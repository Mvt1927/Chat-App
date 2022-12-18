import { Flex, Icon, IconButton } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import { StyledComponent } from "nativewind";
import { useEffect, useRef, useState } from "react";
import { ScrollView, View } from "react-native";
import { Surface, Text, TextInput } from "react-native-paper";
import { MessagesContainer } from "../components/ChatScreen";
import { useAuthStore, useChatStore, useContactsStore } from "../core/store";
import { useSocketStore } from "../core/store/socketStore";
import { COLOR } from "../utils";

export function ChatScreen() {
    const [onChat, setOnChat] = useState(false)
    const [msg, setMsg] = useState("");
    const chatStore = useChatStore()
    const contactsStore = useContactsStore()
    const socketStore = useSocketStore()
    const authStore = useAuthStore()
    const socketRef = useRef()
    const navigation = useNavigation()

    useEffect(()=>{
        if (!contactsStore.contactsSelected) {
            navigation.navigate("BottomNavigatorStack")
        }
    },[contactsStore.contactsSelected])

    useEffect(() => {
        if (socketStore.socket) {
            socketStore.socket.current.on("receiveMessage", (data) => {
                console.log("46", data)
                if (!contactsStore.contactsSelected) {
                    contactsStore.fetchContacts(authStore.access_token)
                } else if (data.from === contactsStore.contactsSelected.id) {
                    chatStore.addChats({
                        id: 1000,
                        from: data.from,
                        to: data.to,
                        msg: data.msg
                    })
                }
            })
        }
    },[socketStore.socket.current])
    const handleSendMsg = async (msg) => {
        if (!socketStore.socket) {
            socketRef.current = socketStore.createSocket(authStore.access_token)  
            socketStore.storeSocket(socketRef)
        }
        socketStore.sendMessage(contactsStore.contactsSelected.id,msg)
        chatStore.addChats({
            "id": 1000,
            "msg": msg,
            "from": authStore.id,
            "to": contactsStore.contactsSelected.id,
            "createdAt": Date.now()
        })
    };
    const sendChat = (event) => {
        event.preventDefault();
        if (msg.length > 0) {
            handleSendMsg(msg);
            setMsg("");
        }
    };
    return (
        <View className="flex-1">
            <MessagesContainer />
            <Surface className="border-b border-gray-300 border-solid bg-white">
                <View className="h-14 block mx-3 text-blue-400 flex-row items-center">
                    <View className={`flex flex-row ${onChat && "hidden"}`} >
                        <StyledComponent
                            component={IconButton}
                            className="h-9 w-9"
                            icon={({ size }) =>
                                <Icon name='plus-circle' size={size} color={COLOR.BLUE} />
                            }
                        />
                        <StyledComponent
                            component={IconButton}
                            className="h-9 w-9"
                            icon={({ size }) =>
                                <Icon name='image-size-select-actual' size={size} color={COLOR.BLUE} />
                            }
                        />
                        <StyledComponent
                            component={IconButton}
                            className="h-9 w-9"
                            icon={({ size }) =>
                                <Icon name='file-gif-box' size={size + 5} color={COLOR.BLUE} />
                            }
                        />
                    </View>
                    <TextInput
                        underlineStyle={{ display: 'none' }}
                        onFocus={() => { setOnChat(true) }}
                        onEndEditing={() => { setOnChat(false) }}
                        value={msg}
                        onChangeText={setMsg}
                        placeholder="Aa"
                        placeholderTextColor={"rgba(124,103,107,1)"}
                        className="flex-1 bg-gray-100 rounded-full h-9"
                    />
                    <View>
                        <StyledComponent
                            component={IconButton}
                            className="h-9 w-9"
                            icon={({ size }) =>
                                <Icon name='send' size={size} color={COLOR.BLUE} />
                            }
                            onPress={(e) => {
                               sendChat(e)
                            }}
                        />
                    </View>
                </View>
            </Surface>
        </View>
    )
}