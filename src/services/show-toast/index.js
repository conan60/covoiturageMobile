import Toast from 'react-native-root-toast';

const showToast = (notif)=>{
    Toast.show(notif,{duration : Toast.durations.SHORT})
}

export default showToast