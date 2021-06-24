import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Alert, View } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import RoundedButton from "../rounded-button";
import Icon from "react-native-vector-icons/MaterialIcons";
import { color } from "../../theme";
import getActualLocation from "../../services/actual-position";
import { getGeocodeFromPosition } from "../../services/geocoding";

const Index = (props) => {
  const { onChangePosition = () => null, position = {} } = props;

  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [geocode, setGeocode] = useState("");
  const [positionState, setPositionState] = useState({
    latitude: position.latitude || 35.7228131067157,
    longitude: position.longitude || 10.579623095691206,
  });

  const getActualPosition = () => {
    getActualLocation()
      .then((location) => {
        mapRef.current.animateCamera({
          center: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          },
        });
        setPositionState({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
        getGeocodeFromPosition({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        })
          .then((geocode) => setPositionName(geocode))
          .catch((err) => Alert.alert(err.message));
      })
      .catch((err) => Alert.alert(err.message));
  };

  const handlePosition = (nativePosition) => {
    onChangePosition(nativePosition);
    getGeocodeFromPosition({
      latitude: nativePosition.coordinate.latitude,
      longitude: nativePosition.coordinate.longitude,
    })
      .then((geocode) => setPositionName(geocode))
      .catch((err) => Alert.alert(err.message));
    setPositionState({
      latitude: nativePosition.coordinate.latitude,
      longitude: nativePosition.coordinate.longitude,
    });
  };

  const setPositionName = (array) => {
    const [geocode] = Array.isArray(array) ? array : [];
    const city = geocode.district || geocode.subregion || geocode.city || "";
    setGeocode(`${geocode.region}${city && ", " + city}`);
  };

  useEffect(() => {
    setPositionState({
      latitude: position.latitude || 35.7228131067157,
      longitude: position.longitude || 10.579623095691206,
    });
  }, [position.latitude]);

  useEffect(() => {
    markerRef.current && markerRef.current.showCallout();
  }, [geocode]);

  return (
    <>
      <MapView
        ref={mapRef}
        onLongPress={(e) => handlePosition(e.nativeEvent)}
        style={styles.container}
        initialCamera={{
          center: positionState,
          pitch: 1,
          heading: 10,
          altitude: 10,
          zoom: 16,
        }}
      >
        <Marker
          ref={markerRef}
          coordinate={{
            latitude: positionState.latitude,
            longitude: positionState.longitude,
          }}
          title={geocode}
        >
          <Callout tooltip onPress={() =>null} />
        </Marker>
      </MapView>
      <View style={styles.button}>
        <RoundedButton
          onClick={getActualPosition}
          icon={() => <Icon size={32} color={color.black} name="my-location" />}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  button: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },
});

export default Index;
