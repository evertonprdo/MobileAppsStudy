import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as Page from "./src/pages";

export type RootStackParamList = {
    home: undefined
    one: undefined
    two: undefined
    three: undefined
    four: undefined
    five: undefined
    six: undefined
    seven: undefined
    eight: undefined
    ten: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" component={ Page.HomeScreen }/>
            <Stack.Screen name="one" component={ Page.PressCount }/>
            <Stack.Screen name="two" component={ Page.InputContent }/>
            <Stack.Screen name="three" component={ Page.CoreComponents }/>
            <Stack.Screen name="four" component={ Page.SwitchComponent }/>
            <Stack.Screen name="five" component={ Page.FormComponent }/>
            <Stack.Screen name="six" component={ Page.FormObj }/>
            <Stack.Screen name="seven" component={ Page.FormNestedObj }/>
            <Stack.Screen name="eight" component={ Page.ToDoApp }/>
            <Stack.Screen name="ten" component={ Page.VersionForm }/>
        </Stack.Navigator>
    </NavigationContainer>
)}