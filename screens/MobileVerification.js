import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

export default MobileVerification = () => {
    const [mobile, setMobile] = useState("");
    const showData = async () => {
        try {
            const value = await AsyncStorage.getItem("@mobile");
            if (value !== null) {
                setMobile(value);
            } else console.log(value);
        } catch (e) {
            // error reading value
        }
    };

    useEffect(() => {
        showData();
    });
    return (
        <View>
            <Text>{mobile}</Text>
        </View>
    );
};
