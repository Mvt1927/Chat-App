import { styled } from "nativewind"
import { View as ReactView, Text as ReactText, Pressable } from "react-native"
import { Avatar as PaperAvatar } from "react-native-paper"
import { useContactsStore } from "../../../core/store"
import dateShort from "../../../module/moment-shortformat"
import { UserContactCard } from "../Dto/ListContactsScreenDto"
const View = styled(ReactView)
const Text = styled(ReactText)
const AvatarImage = styled(PaperAvatar.Image)
export function ContactCardContainer({ user }: { user: UserContactCard }) {

    const contactsStore = useContactsStore()
    const selectContacts =()=>{
        contactsStore.select(user)
    }

    return (
        <View>
            <Pressable
                android_ripple={{color:"gray"}}
                unstable_pressDelay={100}
                onPress={()=>selectContacts()}
            >
                <View >
                    <View className="mx-4 rounded-lg item-friend w-full py-1 flex flex-row text-justify items-center normal-case " >
                        <AvatarImage size={56} className="mx-1 mr-4" source={{ uri: user.srcAvatar ? user.srcAvatar : 'https://i.pinimg.com/564x/fe/f9/e5/fef9e5889245360d5df507be59276e17.jpg' }} />
                        <View className="w-4/5 flex flex-col">
                            <Text className=" text text-base truncate">{user.username}</Text>
                            <View className="flex flex-row">
                                <Text className="max-w-fit w-4/6 text-xs font-light whitespace-nowrap truncate font-base">
                                    {user.chat[0] && user.chat[0].msg}
                                </Text>
                                {user.chat[0] && user.chat[0].createdAt && <>
                                    <Text className="text-xs">&nbsp; · &nbsp;</Text>
                                    <Text className="time-receive-latest-message w-1/6 text-xs font-light whitespace-nowrap">
                                        {user.chat[0].createdAt && dateShort(user.chat[0].createdAt)}
                                    </Text>
                                </>}
                            </View>
                        </View>
                    </View>
                </View>
            </Pressable>
        </View>

    )
} 