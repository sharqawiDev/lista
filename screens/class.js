import React, { useState, useEffect, Component } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import {
    TextInput,
    TouchableNativeFeedback,
} from "react-native";



export default class MobileVerification extends Component {

    state = {
        mobile: "",
        confirmDisabled: true,
        verCode: "",
        countDown: "",
        countDownDate: null
    }
    re = /^[0-9\b]+$/;
    x;

    getMobile = async () => {
        try {
            const value = await AsyncStorage.getItem("@mobile");
            if (value !== null) {
                this.setState({ mobile: value });
            } else console.log(value);
        } catch (e) {
            console.log(e)
        }
    };
    counterFunction = () => {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = this.state.countDownDate - now;
        if (distance < 0) {
            clearInterval(x);
            this.setState({ countDown: "!EXPIRED" })
            return
        }

        // Time calculations for days, hours, minutes and seconds
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        this.setState({ countDown: minutes + ":" + seconds });

        // If the count down is over, write some text 
    }
    componentDidMount() {
        this.getMobile()
        this.setState({ countDownDate: new Date(new Date().getTime() + 0.3 * 60000).getTime() });
        x = setInterval(this.counterFunction, 1000);
    }

    change = (num) => {
        if (num.length === 0) this.setState({ verCode: "" });
        else if (re.test(num)) {
            this.setState({ verCode: num });
            if (num.length === 6)
                this.setState({ confirmDisabled: false })
            else this.setState({ confirmDisabled: true })
        }

    }

    render() {

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
                            للرقم {this.state.mobile.slice(1)}+
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
                            value={this.state.verCode}
                            onChangeText={text => this.change(text)}
                            maxLength={6}
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
                            أعد طلب الرمز {this.state.countDown}
                        </Text>
                    </View>
                </View>
                <TouchableNativeFeedback onPress={() => console.log("hii")} disabled={this.state.confirmDisabled}>
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
                            opacity: this.state.confirmDisabled ? 0.3 : 1,
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
            </KeyboardAvoidingView >
        );

    }

};
