import { styled } from "nativewind";
import { useEffect, useRef } from "react";
import { Dimensions, Image as BaseImage, View as BaseView } from "react-native";
import { ScrollView as BaseScrollView } from "react-native-gesture-handler";
import { Button, Text as BaseText } from "react-native-paper";
import { IChat } from "../../../core/dtos";
import { useAuthStore, useChatStore, useContactsStore } from "../../../core/store";

const View = styled(BaseView)
const Image = styled(BaseImage)
const ScrollView = styled(BaseScrollView)
const Text = styled(BaseText)

export function MessagesContainer() {
    const contactsStore = useContactsStore()
    const scrollRef = useRef<any>();
    const chatsStore = useChatStore()
    const authStore = useAuthStore()
    useEffect(() => {
        chatsStore.fetchChats(authStore.access_token, contactsStore.contactsSelected.id)
    }, [contactsStore.contactsSelected])
    useEffect(()=>{
        console.log(chatsStore.chats)
    },[chatsStore.chats])
    return (
        <View className="flex-1">
            <ScrollView className="m-2" style={{flexGrow:1}}
                contentContainerStyle={{
                    flexGrow:1,
                    justifyContent: 'flex-end'
                }}
                showsVerticalScrollIndicator={false}
                ref={scrollRef}
                onContentSizeChange={() => scrollRef.current.scrollToEnd({animated: true})}
            >
                <View className="h-full flex-col justify-end" >
                    {chatsStore.chats.map((message: IChat | null, index: number) => {
                        return (
                            <View key={index}>
                                {message.to === contactsStore.contactsSelected.id
                                    ? <View
                                        className="w-full flex flex-row justify-end" >
                                        <View
                                            className={` bg-blue-400 rounded-3xl px-3 py-2 break-words self-baseline inline-block  
                                            ${chatsStore.chats[index - 1]?.to === contactsStore.contactsSelected.id ? "rounded-tr-md my-[1px]" : "my-0.5 "}
                                            ${chatsStore.chats[index + 1]?.to === contactsStore.contactsSelected.id ? "rounded-br-md my-[1px]" : "my-0.5 "}`
                                            }
                                        >
                                            <Text className="w-fit max-w-[70vw] text-base font-light text-white">
                                                {message.msg}
                                            </Text>
                                        </View>
                                    </View>
                                    : <View
                                        className="w-full flex flex-row justify-start" >
                                        <View
                                            className={`content w-fit bg-[#E4E6EB] rounded-3xl px-3 py-2 self-baseline break-words 
                                            ${chatsStore.chats[index - 1]?.from == contactsStore.contactsSelected.id ? "rounded-tl-md my-[1px] " : "my-0.5"} 
                                            ${chatsStore.chats[index + 1]?.from == contactsStore.contactsSelected.id ? "rounded-bl-md my-[1px]" : "my-0.5"}`
                                            }
                                        >
                                            <Text className="w-fit max-w-[70vw] text-base font-light">
                                                {message.msg}
                                            </Text>
                                        </View>
                                    </View>}
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}