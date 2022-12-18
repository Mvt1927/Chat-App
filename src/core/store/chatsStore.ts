import create from "zustand";
import { persist } from "zustand/middleware";
import { IChatStore, IReturnChat} from "../dtos";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getchats } from "../apis";
export const useChatStore = create<IChatStore>()(
    persist(
        (set, get) => ({
            chats: [],
            async fetchChats(token,contactId) {
                const response:{
                    data:IReturnChat,
                    status:number
                } = await getchats(token,contactId)
                if (response) {
                    if (response.status===200 && (response.data.status && response.data.status === true || response.data.statusCode == 200)) {
                        set({
                            chats:[...response.data.chats]
                        })
                    } else {
                        set({
                            chats:[]
                        })
                    }
                } else {
                    set({
                        chats:[]
                    })
                }
            },
            addChats(message) {
                if (message) {
                    set({
                        chats:[...get().chats,message]
                    })
                }
            },
            clear() {
                set({
                    chats:[]
                })
            },
        }),
        {
            name: "chats",
            getStorage: () => AsyncStorage,
        }
    )
);
