import React from "react";
import { StyleSheet, View, StatusBar, Button, Image, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";

import ImageScreen from "./ReactNativeDocs/ImageComponents";
import FlexDirectionScreen from "./ReactNativeDocs/FlexDirectionBasics";
import RowColumnScreen from "./ReactNativeDocs/RowGapColumnGap";

type ScreenProps<T extends keyof RootStack> = NativeStackScreenProps<RootStack, T>
export type RootStack = {
    Home?: undefined
    Image?: undefined
    FlexBasics?: undefined;
    RowColumn?: undefined;
};

const Stack = createNativeStackNavigator<RootStack>();

export default function MyFirstApp() {
    return (
        <NavigationContainer>
            <View style= { styles.mainContainer }>
                <StatusBar backgroundColor= { '#4c5163' } barStyle={ "light-content" }/>
                <StackScreen />
            </View>
        </NavigationContainer>
    )
}

export function HomeScreen({ navigation } : ScreenProps<'Home'>) {
    return (
        <View style= {[ styles.defaultAlign, styles.homeScreenContainer ]}>
            <Button
                title= { 'Image Screen' } 
                onPress= { () => { navigation.navigate('Image') }}
                color= { '#4c5163' }
            />
            <Button
                title= { 'Flex Basics' } 
                onPress= { () => { navigation.navigate('FlexBasics') }}
                color= {'#4c5163'}
            />
            <Button
                title= { 'Row Column Screen' } 
                onPress= { () => { navigation.navigate('RowColumn') }}
                color= {'#4c5163'}
            />
        </View>
    )
}

function LogoTitle({ title }: {title: string}) {
    return (
        <View style= {styles.headerContainer}>
            <Text style= {{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>{ title }</Text>
        </View>
    )
}

function StackScreen(){
    return (
        <Stack.Navigator
            screenOptions= {{ 
                header: (props) => <LogoTitle title= { props.options.title?? 'undefined' } />,
                contentStyle: {
                    backgroundColor: '#3d414f'
                },
                animation: 'fade_from_bottom',
            }}
        >
            <Stack.Screen 
                name= "Home"
                component= { HomeScreen }
                options= {{ title: 'HomeScreen' }}
            />

            <Stack.Screen
                name="Image"
                component= { ImageScreen }
                options= {{ title: 'ImageScreen' }}
            />

            <Stack.Screen
                name="FlexBasics"
                component= { FlexDirectionScreen }
                options= {{ title: 'FlexDirectionScreen' }}
            />

            <Stack.Screen
                name="RowColumn"
                component= { RowColumnScreen }
                options= {{ title: 'RowColumnScreen' }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create(
    {
        mainContainer: {
            flex: 1,
            backgroundColor: '#3d414f',
        },
        defaultAlign: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        headerContainer: {
            padding: 15,

            backgroundColor: '#4c5163',
            alignItems: 'center',
        },
        homeScreenContainer: {
            flex: 1,
            alignItems: 'stretch',
            justifyContent: 'flex-end',

            padding: 20,
            gap: 12,
        },
    }
)