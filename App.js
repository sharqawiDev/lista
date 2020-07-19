import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { View, StatusBar, Text, StyleSheet, Image } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen() {
    const image = require("./assets/images/logo2.png");
    return (
        <View
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
                    flexDirection: "row-reverse",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    backgroundColor: "#EFF0E9",
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
        </View>
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
    view: {
        flex: 1,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default App;
