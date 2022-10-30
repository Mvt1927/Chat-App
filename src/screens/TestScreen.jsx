// import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from "react";
import { View, SafeAreaView } from 'react-native';
import { AppBar, Text, TextInput } from '@react-native-material/core';
import { Button } from "react-native-paper";
// import  from '@react-native-material/core'
import { styled } from "nativewind";
import { useDispatch } from "react-redux";
import { addValue, ADD_VALUE, rmValue } from "../redux/test";
// import SyncStorage from "sync-storage";

const StyledText = styled(Text)
const StyledTextInput = styled(TextInput)
const StyledAppBar = styled(AppBar)
const StyledButton = styled(Button)


export default function TestScreen({value}) {
    const dispatch = useDispatch()
    return (
            <SafeAreaView className="flex justify-center h-full">
                <View className="flex justify-center items-center">
                    <Text>
                        {value}
                    </Text>
                    <View className="flex flex-row w-full justify-between my-1">
                                    <View className="w-[49%] mr-1 ">
                                        <StyledButton
                                            uppercase={false}
                                            mode="elevated"
                                            textColor="rgb(59, 130, 246)"
                                            buttonColor="white"
                                            disable
                                            onPress={e => dispatch(rmValue())}
                                        // onPress={() => Alert.alert('Simple Button pressed')}
                                        >-</StyledButton>
                                    </View>
                                    <View className="w-[49%] ml-1">
                                        <StyledButton
                                            uppercase={false}
                                            mode="elevated"
                                            textColor="red"
                                            buttonColor="white"
                                            onPress={e=>dispatch(addValue())}
                                        >+</StyledButton>
                                    </View>
                                </View>
                </View>
            </SafeAreaView>
    );
}
