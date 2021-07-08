import * as GoogleSignIn from 'expo-google-sign-in';

const signInGoogle = {

    initAsync: async () => {
        await GoogleSignIn.initAsync({
            // You may ommit the clientId when the firebase `googleServicesFile` is configured
            // clientId: '<YOUR_IOS_CLIENT_ID>',
        });
        this.syncUserWithStateAsync();
    },

    syncUserWithStateAsync: async () => {
        const user = await GoogleSignIn.signInSilentlyAsync();
        return ({ user });
    },

    signOutAsync: async () => {
        await GoogleSignIn.signOutAsync();
        this.setState({ user: null });
    },

    signInAsync: async () => {
        try {
            await GoogleSignIn.askForPlayServicesAsync();
            const { type, user } = await GoogleSignIn.signInAsync();
            if (type === 'success') {
                this._syncUserWithStateAsync();
            }
        } catch ({ message }) {
            alert('login: Error:' + message);
        }
    },

    onPress: () => {
        if (this.state.user) {
            this.signOutAsync();
        } else {
            this.signInAsync();
        }
    }


}

export default signInGoogle