import React from "react";
import { View, SafeAreaView } from 'react-native';
import { Text } from '@react-native-material/core';


export default function TestScreen() {
    return (
        <SafeAreaView className="flex justify-center h-full">
            <View className="flex justify-center items-center">
                <Text>
                    Coming soon
                </Text>
            </View>
        </SafeAreaView>
    );
}
