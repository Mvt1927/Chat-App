// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View, SafeAreaView } from 'react-native';
import { AppBar, Text, TextInput, IconButton, Icon } from '@react-native-material/core';
// import { Button } from "react-native-paper";
// import  from '@react-native-material/core'
import { styled } from "nativewind";
import { useDispatch } from "react-redux";
import { useAuthStore } from "../core/store";
import { useNavigation } from "@react-navigation/native";
// import SyncStorage from "sync-storage";

// const StyledText = styled(Text)
// const StyledTextInput = styled(TextInput)
// const StyledAppBar = styled(AppBar)
// const StyledButton = styled(Button)


export default function ListContactsScreen() {
    const dispatch = useDispatch()
    const authStore = useAuthStore()
    const navigation = useNavigation()
    return (
        // <SafeAreaView className="w-full h-full" >
            <View className="flex h-full" style={{ flex: 1}}>

                <View className="flex justify-center items-center flex-1">
                    <Text>
                        Test
                    </Text>
                </View>
                <View className="w-full flex flex-row justify-evenly h-16 border-solid border items-center">
                    <View
                        className="border border-solid justify-center flex ite"
                        onPress={e => authStore.clearAuth()}
                    >
                        <Icon name="home" size={24} color="red" />
                        <Text>Chat</Text>

                    </View>
                    <View
                        onPress={() => navigation.navigate("TestStack2")}
                    />
                    <View
                        onPress={() => navigation.navigate("TestStack2")}
                    />
                </View>
            </View>
        // </SafeAreaView>
    );
}
