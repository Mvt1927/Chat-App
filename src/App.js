
import React from "react";
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigators/StackNavigator";
import { IconComponentProvider } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StatusBar } from "react-native";


export default function App() {
    return (
        <IconComponentProvider IconComponent={MaterialCommunityIcons}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <StackNavigator />
                    <StatusBar barStyle="dark-content" backgroundColor={"white"} />
                </NavigationContainer>
            </SafeAreaProvider>
        </IconComponentProvider>
    );
}
