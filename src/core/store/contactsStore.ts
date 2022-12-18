import create from "zustand";
import { persist } from "zustand/middleware";
import { getusers } from "../apis";
import { IContactStore, IReturnContacts } from "../dtos";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const useContactsStore = create<IContactStore>()(
    persist(
        (set) => ({
            contacts: [],
            contactsSelected: undefined,

            fetchContacts: async function(token){
                const response:{
                    data:IReturnContacts
                    status:number
                } = await getusers(token)
                if (response.status === 200&&(response.data.status===true||response.data.statusCode==200)) {
                    set({
                        contacts:response.data.users
                    })
                }else {
                    set({
                    contacts:[],
                    contactsSelected:undefined
                })}
            },
            select: (contact) => {
                set({
                    contactsSelected : contact
                })
            },
            clear: () =>{
                set({
                    contacts:[],
                    contactsSelected:undefined
                })
            },
            clearSelected: () => {
                set({
                    contactsSelected:undefined
                })
            },

        }),
        {
            name: "contacts",
            getStorage: () => AsyncStorage,
        }
    )
);
