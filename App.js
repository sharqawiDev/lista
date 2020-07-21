import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import {
    View,
    StatusBar,
    Text,
    Modal,
    Image,
    StyleSheet,
    FlatList,
    TextInput,
    KeyboardAvoidingView,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    Alert,
} from "react-native";
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import countryData from "./countries";

function HomeScreen() {
    const image = require("./assets/images/logo2.png");
    const re = /^[0-9\b]+$/;
    _keyExtractor = (item, index) => item.code.toString();

    const change = (ev) => {
        if (ev.length === 0) setMobileNumber("");
        else if (re.test(ev)) setMobileNumber(ev);
    };

    const submit = () => {
        if (mobileNumber.length === 10) console.log("submitted!");
        else Alert.alert("Error", "Phone Number must be 10 digits");
    };
    const [flag, setFlag] = useState("🇸🇦");
    const [dialCode, setDialCode] = useState("+966");
    const [mobileNumber, setMobileNumber] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "space-between",
                backgroundColor: "#0B9E9E",
                paddingTop: 44,
            }}
        >
            <Image source={image} style={{ marginRight: 27 }} />
            <View
                style={{
                    width: "100%",
                    height: 255,
                    backgroundColor: "#EFF0E9",
                    alignItems: "center",
                }}
            >
                <View
                    style={{
                        width: "100%",
                        flexDirection: "row-reverse",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Effra-Bold",
                            fontSize: 24,
                            marginTop: 25,
                            marginRight: 21,
                        }}
                    >
                        أهلا بك ..
                    </Text>
                    <Text
                        style={{
                            fontFamily: "Effra-Regular",
                            fontSize: 17,
                            marginTop: 25,
                            marginLeft: 21,
                        }}
                    >
                        إلغاء
                    </Text>
                </View>
                <View
                    style={{
                        backgroundColor: "white",
                        width: "90%",
                        height: 50,
                        borderRadius: 24.3,
                        flexDirection: "row-reverse",
                        marginTop: 24,
                    }}
                >
                    <TextInput
                        placeholder="رقم الجوال"
                        keyboardType="phone-pad"
                        returnKeyType="done"
                        style={{
                            width: "75%",
                            fontFamily: "Effra-Regular",
                            fontSize: 20,
                            marginRight: 10,
                            textAlign: "right",
                            paddingRight: 21,
                        }}
                        onChangeText={(text) => change(text)}
                        maxLength={10}
                        value={mobileNumber}
                    />
                    <View
                        style={{
                            width: "25%",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginLeft: 20,
                            }}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text
                                style={{
                                    fontSize: 25,
                                    marginRight: 3,
                                    marginLeft: 15,
                                }}
                            >
                                {flag}
                            </Text>
                            <Text
                                style={{
                                    fontFamily: "Effra-Bold",
                                    fontSize: 19,
                                    marginRight: 6,
                                }}
                            >
                                {dialCode}
                            </Text>
                            <Image
                                source={require("./assets/images/arrowdown.png")}
                                style={{ marginTop: 3 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal
                    animationType="slide" // fade
                    transparent={false}
                    visible={modalVisible}
                >
                    <View style={{ flex: 1 }}>
                        <View
                            style={{
                                flex: 10,
                                paddingTop: 80,
                                backgroundColor: "white",
                            }}
                        >
                            <FlatList
                                data={countryData}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <TouchableWithoutFeedback
                                        onPress={() => {
                                            setDialCode(item.dial_code);
                                            setFlag(item.flag);
                                            setModalVisible(false);
                                        }}
                                    >
                                        <View
                                            style={[
                                                styles.countryStyle,
                                                {
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    justifyContent:
                                                        "space-between",
                                                },
                                            ]}
                                        >
                                            <Text style={{ fontSize: 45 }}>
                                                {item.flag}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 20,
                                                    color: "black",
                                                }}
                                            >
                                                {item.name} ({item.dial_code})
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                )}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            style={styles.closeButtonStyle}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <TouchableNativeFeedback
                    onPress={() => submit()}
                    background={TouchableNativeFeedback.SelectableBackground()}
                >
                    <View
                        style={{
                            width: "90%",
                            height: 50,
                            backgroundColor: "#00A49C",
                            borderRadius: 43,
                            marginTop: 16.5,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                color: "white",
                                fontFamily: "Effra-Bold",
                                fontSize: 24,
                            }}
                        >
                            متابعة
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </KeyboardAvoidingView>
    );
}

const Stack = createStackNavigator();

const App = () => {
    useEffect(() => {
        SplashScreen.hide();
    });
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
    },
    countryStyle: {
        borderTopColor: "#211f",
        borderTopWidth: 1,
        padding: 12,
    },
    closeButtonStyle: {
        padding: 35,
        backgroundColor: "#f7f2e4",
    },
});

export default App;
