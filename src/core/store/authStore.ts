import create from "zustand";
import jwt from "jsonwebtoken";
import { persist } from "zustand/middleware";
import { signin, signup } from "../apis";
import { IAuth, IResAuth, IReturnAuth } from "../dtos";
// import { useDispatch } from "react-redux";
import { setToken } from "../../redux/auth";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const useAuthStore = create<IAuth>()(
    persist(
        (set, get) => ({
            response_message: "",
            access_token: "",
            username: "",
            email: "",
            id: undefined,
            fetchSignin: async (payload) => {
                const response: {
                    data: IReturnAuth,
                    status: number
                } = await signin(payload);
                console.log(response)
                // const data = response.data
                if (response.status === 200 && (response.data.status === true || response.data.statusCode == 200)) {
                    set({
                        access_token: response.data.data?.access_token || response.data.access_token,
                        id: response.data.data?.user.id || response.data.id,
                        username: response.data.data?.user.username || response.data.username,
                        response_message: "",
                    });
                    console.log("ok")
                } else {
                    console.log(response.data)
                    set({
                        access_token: "",
                        id: NaN,
                        username: "",
                        response_message: response.data.msg || "Eror",
                    });
                }
            },
            fetchSignup: async (data) => {
                const response: {
                    data: IReturnAuth,
                    status: number
                } = await signup(data);
                if (response.status === 201 &&(response.data.status === true || response.data.statusCode == 200)) {
                    set({
                        access_token: response.data.data?.access_token || response.data.access_token,
                        id: response.data.data?.user.id || response.data.id,
                        username: response.data.data?.user.username || response.data.username,
                        response_message: "",
                    });
                    //   console.log("ok")
                } else {
                    console.log(response)
                    set({
                        access_token: "",
                        id: NaN,
                        username: "",
                        response_message: response.data.msg||response.data.message || "Account already exist",
                    });
                   
                }
            },
            setResponseMessage: (message) => {
                set({
                    response_message: message,
                });
            },
            clearAuth: () => {
                set({
                    access_token: "",
                    username: "",
                    email: "",
                    id: undefined,
                    response_message: ""
                });
            },
        }),
        {
            name: "auth",
            getStorage: () => AsyncStorage,
        }
    )
);
