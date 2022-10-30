// import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from "react";
import { StyleSheet, View, Alert, Image, ToastAndroid, SafeAreaView } from 'react-native';
import { AppBar, Avatar, Dialog, IconButton, Text, TextInput } from '@react-native-material/core';
import { Button, Snackbar } from "react-native-paper";
// import  from '@react-native-material/core'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import ToastManager, { Toast } from 'toastify-react-native'
import myGlobalSetting from "../myGlobalSetting";
import axios from "axios";
import SyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from "react-redux";
import { getToken, setToken, setUser } from "../redux/auth/actions";
import { addValue } from "../redux/test";
// import SyncStorage from "sync-storage";

const StyledText = styled(Text)
const StyledTextInput = styled(TextInput)
const StyledAppBar = styled(AppBar)
const StyledButton = styled(Button)


export default function SignInAndSignUpScreen() {
    const dispatch = useDispatch()
    const testState = useSelector(state => state)
    const loginRoute = myGlobalSetting.loginAPI;
    const registerRoute = myGlobalSetting.signupAPI;

    const [isRegister, setIsRegister] = useState(false);
    const [values, setValues] = useState({ username: "", password: "", email: "", repassword: "" });

    const handleToggleRegister = (e) => {
        e.preventDefault();
        setIsRegister(!isRegister)
        setValues({ ...values, email: "", repassword: "" })
    }

    const handleChange = (e) => {
        setValues({ ...values, [e._dispatchInstances?.pendingProps?.name]: e.nativeEvent?.text });
        console.log(`${e._dispatchInstances?.pendingProps?.name} : ${e.nativeEvent?.text}`)
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const { username, password, email} = values;
            var route = loginRoute
            var payload = {
                username: username,
                password: password,
            }
            if (isRegister) {
                route = registerRoute
                payload = {
                    username: username,
                    password: password,
                    email: email
                }
            }
            const { data } = await axios.post(route, payload)
            .catch(e => {
                console.log(e)
                throw e
            });
            if (data.status === false) {
                Toast.error(data.msg);
                console.log(data)
            }
            if (data.status === true) {
                dispatch(setToken(data.access_token))
                dispatch(setUser(
                    {
                        id: data.id,
                        username: data.username
                    }
                ))
                console.log(data);
                // navigate("/m"); 
            }
        } else console.log("no")
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
        <SafeAreaView className="w-full h-full">
            <View className="justify-start h-full">
                <View className="h-5/6 w-full flex justify-between">
                    <View className="items-center h-2/6 justify-center">
                        <StyledText variant="h2" className="font-bold text-blue-500">{isRegister ? "Register" : "Login"}</StyledText>
                    </View>
                    <View className="flex flex-col h-4/6 m-8 justify-between">
                        <View className="w-full">
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
                                        disable
                                        // onPress={() => dispatch(addValue())}
                                    >Facebook</StyledButton>
                                </View>
                                <View className="w-[49%] ml-1">
                                    <StyledButton
                                        uppercase={false}
                                        mode="elevated"
                                        icon={'google'}
                                        textColor="red"
                                        buttonColor="white"
                                        onPress={e => {
                                            console.log("test:", testState)
                                        }}
                                    >Google</StyledButton>
                                </View>
                            </View>
                            <StyledButton
                                mode="elevated"
                                textColor="black"
                                uppercase={false}
                                className="bg-slate-200 my-1"
                                onPress={e => { handleToggleRegister(e) }}
                            >{isRegister ? 'Login' : 'Register'}</StyledButton>
                        </View>
                    </View>
                </View>

                <ToastManager width={350} positionValue={30} duration={2500} className="w-full" />

            </View>
        </SafeAreaView>
    );
}
