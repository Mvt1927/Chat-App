
import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import SignInAndSignUpScreen from "./screens/SignInAndSignUpScreen";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import TestScreen from "./redux/bindings/screens/TestScreen";
import store from "./redux/index";

// const store2 = store()

export default function App() {
    return (
        <Provider store={store}>

            <SafeAreaProvider>
                <SignInAndSignUpScreen/>
                <StatusBar />
            </SafeAreaProvider>

        </Provider>
        // <Provider store={store}>
        //     <SafeAreaProvider>
        //         <TestScreen />
        //         <StatusBar />
        //     </SafeAreaProvider>
        // </Provider>
        // <SafeAreaProvider>
        //     <SignInAndSignUpScreen />
        //     <StatusBar />
        // </SafeAreaProvider>
    );
}
