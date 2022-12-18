import create from "zustand";
import { persist } from "zustand/middleware";
import { signin, signup } from "../apis";
import { IAuthStore, IReturnAuth } from "../dtos";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const useAuthStore = create<IAuthStore>()(
    persist(
        (set, get) => ({
            response_message: "",
            access_token: "",
            username: "",
            email: "",
            id: undefined,
            fetchSignin: async (payload) => {
                const response: {
                    data: IReturnAuth
                    status: number
                } = await signin(payload);
                if (response) {
                    if (response.status === 200 && (response.data.status && response.data.status === true || response.data.statusCode == 200)) {
                        set({
                            access_token: response.data.data?.access_token || response.data.access_token,
                            id: response.data.data?.user.id || response.data.id,
                            username: response.data.data?.user.username || response.data.username,
                            response_message: "",
                        });
                    } else {
                        set({
                            access_token: "",
                            id: NaN,
                            username: "",
                            response_message: response.data.msg ? response.data.msg : "Eror",
                        });
                    }
                } else set({ response_message: "Server error" })
            },
            fetchSignup: async (data) => {
                const response: {
                    data: IReturnAuth,
                    status: number
                } = await signup(data);
                if (response) {

                    if (response.status === 201 && (response.data.status === true || response.data.statusCode == 200)) {
                        set({
                            access_token: response.data.data?.access_token || response.data.access_token,
                            id: response.data.data?.user.id || response.data.id,
                            username: response.data.data?.user.username || response.data.username,
                            response_message: "",
                        });
                    } else {
                        set({
                            access_token: "",
                            id: NaN,
                            username: "",
                            response_message: response.data.msg || response.data.message || "Account already exist",
                        });

                    }
                }else set({response_message:"Server Error"})
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
