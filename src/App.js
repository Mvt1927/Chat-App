
import React from "react";
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import SignInAndSignUpScreen from "./screens/SignInAndSignUpScreen";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import store from "./redux/index";
import StackNavigator from "./navigators/StackNavigator";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// const store2 = store()

export default function App() {
    return (
        <Provider store={store}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                {/* <SafeAreaProvider> */}
                    <NavigationContainer>
                        <StackNavigator />
                    </NavigationContainer>
                    <StatusBar />
                {/* </SafeAreaProvider> */}
            </IconComponentProvider>
        </Provider>

    );
}
