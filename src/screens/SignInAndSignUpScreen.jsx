import React from "react";
import { View, SafeAreaView, Dimensions } from 'react-native';
import { AppBar, Text, TextInput } from '@react-native-material/core';
import { Button } from "react-native-paper";
import { useState } from 'react';
import { styled } from "nativewind";
import ToastManager, { Toast } from 'toastify-react-native'
import { useAuthStore, useTestStore } from "../core/store";

const StyledText = styled(Text)
const StyledTextInput = styled(TextInput)
const StyledAppBar = styled(AppBar)
const StyledButton = styled(Button)


export default function SignInAndSignUpScreen() {
    const authStore = useAuthStore();

    const [isRegister, setIsRegister] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [values, setValues] = useState({ username: "", password: "", email: "", repassword: "" });

    const handleToggleRegister = (e) => {
        e.preventDefault();
        setIsRegister(!isRegister)
        setValues({ ...values, email: "", repassword: "" })
    }

    const handleChange = (e) => {
        setValues({ ...values, [e._dispatchInstances?.pendingProps?.name]: e.nativeEvent?.text });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        if (validateForm()) {
            const { username, password, email } = values;
            var payload = {
                username: username,
                password: password,
            }
            if (isRegister) {
                payload = {
                    username: username,
                    password: password,
                    email: email
                }
                await authStore.fetchSignup(payload)

            } else await authStore.fetchSignin(payload)
            if (authStore.response_message != "") {
                Toast.error(authStore.response_message)
            }
        }
        setIsLoading(false)
    }
    const validateForm = () => {
        const { username, password, email, repassword } = values;
        if (username === "") {
            Toast.error("Username and Password is required.");
            return false;
        }
        if (password === "") {
            Toast.error("Username and Password is required.");
            return false;
        }
        if (isRegister) {
            if (email === "") {
                Toast.error("Email is required.");
                return false;
            }
            if (repassword === "") {
                Toast.error("Re-enter password is required.");
                return false;
            }
            if (repassword !== password) {
                Toast.error("Re-enter password and password not match.");
                return false;
            }
        }
        return true;
    };
    return (
        // <SafeAreaView className="w-full h-full">
        <View className="justify-start h-full">
            <View className="h-5/6 w-full flex justify-between">
                <View className="items-center h-2/6 justify-center">
                    <StyledText variant="h2" className="font-bold text-blue-500">{isRegister ? "Register" : "Login"}</StyledText>
                </View>
                <View className="flex flex-col h-4/6 m-8 justify-between">
                    <View className="w-full flex justify-center">
                        <StyledTextInput
                            variant="outlined"
                            color='blue'
                            name="username"
                            textContentType="username"
                            value={values.username}
                            onChange={handleChange}
                            label="Username"
                            autoComplete="username"
                            clearButtonMode={'always'}
                        />
                        {isRegister && <StyledTextInput
                            variant="outlined"
                            color='blue'
                            name="email"
                            textContentType="emailAddress"
                            value={values.email}
                            onChange={handleChange}
                            label="Email"
                            autoComplete="email"
                            keyboardType='email-address'
                        />}
                        <StyledTextInput
                            variant="outlined"
                            color='blue'
                            name="password"
                            textContentType="password"
                            value={values.password}
                            onChange={handleChange}
                            label="Password"
                            autoComplete="password"
                            clearTextOnFocus
                            secureTextEntry
                        />
                        {isRegister && <StyledTextInput
                            variant="outlined"
                            color='blue'
                            name="repassword"
                            textContentType="password"
                            value={values.repassword}
                            onChange={handleChange}
                            label="Re-enter password"
                            autoComplete="password"
                            secureTextEntry
                        />}
                    </View>
                    <View className="w-full">
                        <StyledButton
                            mode="elevated"
                            uppercase={false}
                            textColor="white"
                            disabled={isLoading}
                            loading={isLoading}
                            className="bg-blue-500 my-1 text-lg"
                            onPress={e => { handleSubmit(e) }}
                        >{isRegister ? "Register" : "Login"}</StyledButton>
                        <View className="flex flex-row w-full justify-between my-1">
                            <View className="w-[49%] mr-1 ">
                                <StyledButton
                                    uppercase={false}
                                    mode="elevated"
                                    icon='facebook'
                                    textColor="rgb(59, 130, 246)"
                                    buttonColor="white"
                                    disabled={true}
                                >Facebook</StyledButton>
                            </View>
                            <View className="w-[49%] ml-1">
                                <StyledButton
                                    uppercase={false}
                                    mode="elevated"
                                    icon={'google'}
                                    textColor="red"
                                    buttonColor="white"
                                    disabled={true}
                                >Google</StyledButton>
                            </View>
                        </View>
                        <StyledButton
                            mode="elevated"
                            textColor="black"
                            uppercase={false}
                            disabled={isLoading}
                            className="bg-slate-200 my-1"
                            onPress={e => { handleToggleRegister(e) }}
                        >{isRegister ? 'Login' : 'Register'}</StyledButton>
                    </View>
                </View>
            </View>
            <ToastManager width={Dimensions.get("screen").width-50} positionValue={30} duration={2500} className="w-full" />
        </View>
    );
}
