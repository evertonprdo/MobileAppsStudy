import React from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";

import ImageScreen from "./ReactNativeDocs/ImageComponents";
import FlexDirectionScreen from "./ReactNativeDocs/FlexDirectionBasics";

type ScreenProps<T extends keyof RootStack> = NativeStackScreenProps<RootStack, T>
export type RootStack = {
    Home: undefined;
    Image: undefined;
    FlexBasics: undefined;
};

const Stack = createNativeStackNavigator<RootStack>();

export default function MyFirstApp() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name= "Home"
                    component= { HomeScreen }
                />
                <Stack.Screen
                    name="Image"
                    component= { ImageScreen }
                />
                <Stack.Screen
                    name="FlexBasics"
                    component= { FlexDirectionScreen }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export function HomeScreen({ navigation } : ScreenProps<'Home'>) {
    return (
        <View style= {styles.defaultAlign}>
            <Button
                title= { 'Image Screen' } 
                onPress= { () => { navigation.navigate('Image') }}
            />
            <Button
                title= { 'Flex Basics' } 
                onPress= { () => { navigation.navigate('FlexBasics') }}
            />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        mainContainer: {
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 50,

            backgroundColor: '#10121c',
        },
        defaultAlign: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
)