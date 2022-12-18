import React from "react";
import { View, SafeAreaView } from 'react-native';
import { Text } from '@react-native-material/core';
import { Avatar as PaperAvatar } from "react-native-paper"
import { styled } from "nativewind";
import { useAuthStore } from "../core/store";
import { Button } from "react-native-paper";


const AvatarImage = styled(PaperAvatar.Image)
const StyledButton = styled(Button)

export default function SettingScreen() {
    const authStore = useAuthStore()
    return (
        <SafeAreaView className="h-full">
            <View className="flex flex-1 justify-around items-center flex-col">
                <View className="flex justify-center items-center">
                    <AvatarImage size={100} source={{ uri: 'https://i.pinimg.com/564x/fe/f9/e5/fef9e5889245360d5df507be59276e17.jpg' }} />
                    <Text style={{ fontSize: 24 }}>
                        {authStore.username}
                    </Text>
                </View>
                <View>
                    <StyledButton
                        mode="elevated"
                        uppercase={false}
                        textColor="white"
                        className="bg-blue-500 my-1 text-lg"
                        onPress={e => { authStore.clearAuth() }}
                    >Logout</StyledButton></View>
            </View>
        </SafeAreaView>
    );
}
