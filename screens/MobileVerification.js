import React, { useState, useEffect } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import {
    TextInput,
    TouchableNativeFeedback,
    TouchableOpacity,
} from "react-native-gesture-handler";

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
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "space-between",
                backgroundColor: "#EFF0E9",
                paddingTop: 44,
            }}
        >
            <View>
                <View
                    style={{
                        flexDirection: "row-reverse",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        width: "100%",
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Effra-Bold",
                            fontSize: 24,
                            marginRight: 25,
                            marginTop: 12.5,
                        }}
                    >
                        تأكيد رقم الجوال
                    </Text>
                    <Text
                        style={{
                            marginLeft: 19,
                            fontFamily: "Effra",
                            fontSize: 17,
                        }}
                    >
                        إلغاء
                    </Text>
                </View>
                <View
                    style={{
                        marginTop: 16,
                        marginRight: 26,
                        alignItems: "flex-end",
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Effra",
                            fontSize: 17,
                            textAlign: "right",
                            marginLeft: 17,
                            width: 372,
                        }}
                    >
                        يرجى ادخال رمز التفعيل المكون من ٦ خانات والذي تم ارساله
                        للرقم {mobile.slice(1)}+
                    </Text>
                    <TextInput
                        style={{
                            backgroundColor: "white",
                            marginTop: 18.8,
                            width: 184,
                            height: 50,
                            borderRadius: 24.29,
                            fontFamily: "Effra",
                            fontSize: 20,
                            textAlign: "right",
                            paddingRight: 21,
                        }}
                        placeholder="رمز التفعيل"
                        textContentType="oneTimeCode"
                        keyboardType="number-pad"
                        returnKeyType="done"
                    />
                    <Text
                        style={{
                            fontSize: 17,
                            fontFamily: "Effra",
                            color: "#474E4A",
                            borderColor: "#707070",
                            opacity: 0.38,
                            marginTop: 18.2,
                        }}
                    >
                        أعد طلب الرمز {"1:23"}
                    </Text>
                </View>
            </View>
            <TouchableNativeFeedback onPress={() => console.log("hii")}>
                <View
                    style={{
                        width: "90%",
                        height: 50,
                        backgroundColor: "#00A49C",
                        borderRadius: 43,
                        marginBottom: 20,
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "center",
                        opacity: 0.3,
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            fontFamily: "Effra-Bold",
                            fontSize: 24,
                        }}
                    >
                        تأكيد
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </KeyboardAvoidingView>
    );
};
