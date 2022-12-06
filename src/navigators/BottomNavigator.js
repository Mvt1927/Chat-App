import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListContactsScreen from '../screens/ListContactsScreen';
import { Icon } from '@react-native-material/core';
import SafeArea from '../components/SafeArea';
import TestScreen from '../screens/TestScreen';

const Tab = createBottomTabNavigator();

function Notifications() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications!</Text>
      </View>
    );
}

const BottomNavigator = () => {

    return (
        // <SafeAreaView style={[tw`h-full w-full bg-white relative`]}>
        <SafeAreaView classname="h-96 bg-black">
            <View classname="" >
                <Tab.Navigator initialRouteName='HomeTab'
                screenOptions={{
                    tabBarActiveTintColor: '#e91e63',
                  }}
                >
                    <Tab.Screen 
                        name="HomeTab"
                        component={Notifications}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color, size }) => (
                              <Icon name="home" color={color} size={size} />
                            ),
                          }}
                    // options={{
                    //     headerShown: false,
                    //     tabBarShowLabel: false,
                    //     tabBarIcon: (({focused}) => 
                    //         <View classname="px-5">
                    //             <Icon name='home' size={24} color="red" />
                    //         </View>
                    //     ),
                    // }}
                    />
                    <Tab.Screen name="HomeTab2"
                        component={TestScreen}
                    // options={{
                    //     headerShown: false,
                    //     tabBarShowLabel: false,
                    //     tabBarIcon: (({focused}) => 
                    //         <View classname="px-5">
                    //             <Icon name='home' size={24} color="red" />
                    //         </View>
                    //     ),
                    // }}
                    />
                    {/* <Tab.Screen name="SearchTab" component={SearchScreen}
                        options={{
                            headerShown: false,
                            tabBarShowLabel: false,
                            tabBarIcon: (({focused}) => 
                                <View style={tw`py-3 px-5`}>
                                    <Ionicons
                                        name={focused ? 'search' : 'search-outline'}
                                        style={focused ? (tw`text-xl text-[#5EC2EA]`) : (tw`text-xl`)}
                                    />
                                </View>
                            ),
                            tabBarStyle: [tw`bg-[#F5F7FA]`],
                        }}
                    />
                    <Tab.Screen name="MusicTab"
                        children={() => <MusicScreen />}
                        options={{
                            headerShown: false,
                            tabBarShowLabel: false,
                            tabBarIcon: (({focused}) => 
                                <View style={tw`px-5 py-3`}>
                                    <MaterialIcons
                                        name='multitrack-audio'
                                        style={focused ? (tw`text-xl text-[#5EC2EA]`) : (tw`text-xl`)}
                                    />
                                </View>
                            ),
                            tabBarStyle: [tw`bg-[#F5F7FA]`],
                        }}
                    />
                    <Tab.Screen name="ProfileTab" component={MyProfileScreen}
                        options={{
                            headerShown: false,
                            tabBarShowLabel: false,
                            tabBarIcon: (({focused}) => 
                                <View style={tw`py-3 px-5`}>
                                    <Feather
                                        name={'user'} 
                                        style={focused ? (tw`text-xl text-[#5EC2EA]`) : (tw`text-xl`)}
                                    />
                                </View>
                            ),
                            tabBarStyle: [tw`bg-[#F5F7FA]`],
                        }}
                    />
                    <Tab.Screen name="MenuTab" component={MenuScreen}
                        options={{
                            headerShown: false,
                            tabBarShowLabel: false,
                            tabBarIcon: (({focused}) => 
                                <View style={tw`py-3 px-5`}>
                                    <Feather
                                        name='menu'
                                        style={focused ? (tw`text-[#5EC2EA]`) : (tw``)}
                                        size={23}
                                    />
                                </View>
                            ),
                            tabBarStyle: [tw`bg-[#F5F7FA]`],
                        }}
                    /> */}
                </Tab.Navigator>
            </View>
        </SafeAreaView>
    )
}

export default BottomNavigator
