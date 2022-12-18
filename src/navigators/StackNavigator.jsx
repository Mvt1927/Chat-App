import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInAndSignUpScreen from '../screens/SignInAndSignUpScreen'
import { useAuthStore, useChatStore, useContactsStore } from '../core/store'
import BottomNavigator from './BottomNavigator'
import { StyledComponent } from 'nativewind'
import { Icon, IconButton } from '@react-native-material/core'
import { View } from 'react-native'
import { COLOR } from '../utils'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChatScreen } from '../screens/ChatScreen'


const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    const token = useAuthStore().access_token
    const contactsStore = useContactsStore()
    const contact = contactsStore.contactsSelected
    const chatStore = useChatStore()
    return (
        <SafeAreaView className="flex-1">
            <Stack.Navigator initialRouteName='BottomNavigatorStack'
                screenOptions={{
                    headerShown: false,
                    statusBarStyle: 'dark'
                }}
            >
                {!token
                    ? <Stack.Screen
                        name='SignInAndSignUpStack'
                        component={SignInAndSignUpScreen}

                    />
                    : !contact
                        ? <Stack.Screen
                            name='BottomNavigatorStack'
                            component={BottomNavigator}
                            options={{
                                animationTypeForReplace: 'push',
                                animation: 'slide_from_left'
                            }}
                        />
                        : <Stack.Screen
                            name="ChatStack"
                            component={ChatScreen}
                            options={{
                                title: contact.username,
                                animation: 'fade_from_bottom',
                                animationDuration: 100,
                                headerShown: true,
                                headerRight: () => {
                                    return (
                                        <View className="flex flex-row">
                                            <StyledComponent
                                                component={IconButton}
                                                className="h-9 w-9"
                                                icon={({ size }) =>
                                                    <Icon name='phone' size={size - 2} color={COLOR.BLUE} />
                                                }
                                            />
                                            <StyledComponent
                                                component={IconButton}
                                                className="h-9 w-9"
                                                icon={({ size }) =>
                                                    <Icon name='video' size={size} color={COLOR.BLUE} />
                                                }
                                            />
                                            <StyledComponent
                                                component={IconButton}
                                                className="h-9 w-9"
                                                icon={({ size }) =>
                                                    <Icon name='dots-vertical' size={size} color={COLOR.BLUE}/>
                                                }
                                            />
                                        </View>
                                    )
                                },
                                headerLeft: () => (
                                    <StyledComponent
                                        component={IconButton}
                                        onPress={() => {
                                            contactsStore.clearSelected()
                                            chatStore.clear()
                                        }}
                                        className="mr-4 h-9 w-9"
                                        icon={({ size }) =>
                                            <Icon name='arrow-left' size={size + 2} color={COLOR.BLUE} />
                                        }
                                    />
                                )
                            }}

                        />
                }
            </Stack.Navigator>
        </SafeAreaView>
    )
}
export default StackNavigator