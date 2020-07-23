import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MobileRegister from "./screens/MobileRegister";
import MobileVerification from "./screens/MobileVerification";
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
                        name="Register"
                        component={MobileRegister}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Verification"
                        component={MobileVerification}
                        // options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default App;
