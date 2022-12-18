// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef } from "react";
import { View, ScrollView, StatusBar } from 'react-native';
import { useAuthStore, useContactsStore } from "../core/store";
import { TextInput } from "react-native-paper";
import { ListContactsContainer } from "../components/ListContactsScreen";
import { useSocketStore } from "../core/store/socketStore";


export default function ListContactsScreen() {
    const authStore = useAuthStore()
    const contactsStore = useContactsStore()
    const socketStore = useSocketStore()
    const socketRef = useRef()
    useEffect(() => {
        if (socketStore.socket) {
            socketStore.socket.current.on("receiveMessage", (data) => {
                if (!contactsStore.contactsSelected) {
                    contactsStore.fetchContacts(authStore.access_token)
                } 
            })
        }
    },[socketStore.socket])
    useEffect(() => {
        if (authStore.access_token) {
            contactsStore.fetchContacts(authStore.access_token)
            socketRef.current = socketStore.createSocket(authStore.access_token)
            socketStore.storeSocket(socketRef)
        }
        return () => {
            socketStore.socket.current?.off("receiveMessage");
        }
    }, [authStore.access_token])
    return (
        <View className="h-full bg-white">
            <ScrollView
                className="" style={{ overflow: "hidden" }}
                showsVerticalScrollIndicator={false}
            >
                <View className="mx-4 justify-between flex flex-row items-center my-1">
                    <TextInput
                        underlineStyle={{ display: 'none' }}
                        className="w-full bg-gray-100 rounded-full h-10 text-gray-100 hover:text-gray-500"
                        left={<TextInput.Icon disabled icon="magnify" />}
                    />
                </View>
                <View className="">
                    <ListContactsContainer data={contactsStore.contacts} />
                </View>
            </ScrollView>
            <StatusBar />
        </View>
    );
}
