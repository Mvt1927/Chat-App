import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {  View } from 'react-native';
import ListContactsScreen from '../screens/ListContactsScreen';
import { Icon, IconButton } from '@react-native-material/core';
import TestScreen from '../screens/TestScreen';
import React from 'react';
import { StyledComponent } from 'nativewind';
import SettingScreen from '../screens/SettingScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {

    return (
        <View className="flex-1">
            <Tab.Navigator
                initialRouteName='ChatTab'
                screenOptions={{
                    tabBarActiveTintColor: 'rgba(59,130,246,1)',
                    tabBarLabelStyle: { fontSize: 14 },
                    tabBarHideOnKeyboard:true,
                    lazy:true,
                }}
            >
                <Tab.Screen
                    name="ChatTab"
                    component={ListContactsScreen}
                    options={{
                        tabBarLabel: 'Chat',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="chat" color={color} size={size} />
                        ),
                        title: "Chat",
                        headerRight: () => (
                            <StyledComponent component={IconButton} className="mr-4 h-9 w-9 bg-gray-100" icon={({ size }) => <Icon name='pencil' size={size - 5} />} />
                        ),
                    }}


                />
                <Tab.Screen
                    name="CallTab"
                    component={TestScreen}
                    options={{
                        tabBarLabel: 'Call',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="phone" color={color} size={size} />
                        ),
                        title: "Call",
                        headerRight: () => (
                            <StyledComponent component={IconButton} className="mr-4 h-9 w-9 bg-gray-100" icon={({ size }) => <Icon name='pencil' size={size - 5} />} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="SettingTab"
                    component={SettingScreen}
                    options={{
                        tabBarLabel: 'Setting',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="cog" color={color} size={size} />
                        ),
                        title: "Setting"
                    }}
                />
            </Tab.Navigator>
        </View>
    )
}

export default BottomNavigator
