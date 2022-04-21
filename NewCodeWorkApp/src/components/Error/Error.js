import React from "react";
import AnimatedLottieView from "lottie-react-native";

const Error = () => {
    return(
        <AnimatedLottieView source={require('../../assets/error.json')} autoPlay ></AnimatedLottieView>
    )
}
export default Error;