import { createDrawerNavigator,  DrawerNavigationProp, DrawerScreenProps } from '@react-navigation/drawer'
import { colors } from '../styles/colors';
import {  TabNavigation } from './tab.navigation'
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

type DrawerParamList = {
    Tab: undefined
}
type DrawerSceenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Tab'>
export type DrawerTypes = {
    navigation: DrawerSceenNavigationProp
}
export function DrawerNavigation(){
    const Drawer = createDrawerNavigator<DrawerParamList>()
    return(
        <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: colors.secondary },
            headerTintColor: colors.white,
            drawerStyle:{
                backgroundColor: colors.secondary,
            },
            drawerActiveTintColor: colors.white,
            drawerInactiveTintColor: colors.white
        }}>
            <Drawer.Screen name ='Tab' component={TabNavigation}
            options={{
                drawerLabel: 'Perfil',
                headerTitle: 'Perfil',
                drawerIcon: () => (
                    <Ionicons name = "person" size = {24} color={colors.white}/>
                ),
            }}
            />
        </Drawer.Navigator>
    )
}