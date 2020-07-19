import "react-native-gesture-handler";
import React, { useEffect } from "react";
import {
    View,
    StatusBar,
    Text,
    StyleSheet,
    Image,
    Constants,
} from "react-native";
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen() {
    const image = require("./images/logo2.png");
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
            <Text>Hello</Text>
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
