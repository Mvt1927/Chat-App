import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux'
import SignInAndSignUpScreen from '../screens/SignInAndSignUpScreen'
import TestScreen from '../redux/bindings/screens/TestScreen'
import { useAuthStore } from '../core/store'
import ListContactsScreen from '../screens/ListContactsScreen'
import BottomNavigator from './BottomNavigator'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    const token = useAuthStore().access_token
    return (
        <Stack.Navigator initialRouteName='BottomNavigatorStack `   `   `   ```'
            screenOptions={{
                headerShown: false,
            }}
        >
            {!token
                ? <Stack.Screen name='SignInAndSignUpStack' component={SignInAndSignUpScreen} />
                : <>
                    {/* <Stack.Screen name='ListContactsStack' component={ListContactsScreen}/>
                    <Stack.Screen name='TestStack2' component={TestScreen} /> */}
                    <Stack.Screen name='BottomNavigatorStack' component={BottomNavigator}/>
                </>
            }
        </Stack.Navigator>
    )
}
export default StackNavigator