import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, InputContent, PressCount, CoreComponents, SwitchComponent, FormComponent, FormObj } from "./src/pages";

export type RootStackParamList = {
    home: undefined
    one: undefined
    two: undefined
    three: undefined
    four: undefined
    five: undefined
    six: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" component={ HomeScreen }/>
            <Stack.Screen name="one" component={ PressCount }/>
            <Stack.Screen name="two" component={ InputContent }/>
            <Stack.Screen name="three" component={ CoreComponents }/>
            <Stack.Screen name="four" component={ SwitchComponent }/>
            <Stack.Screen name="five" component={ FormComponent }/>
            <Stack.Screen name="six" component={ FormObj }/>
        </Stack.Navigator>
    </NavigationContainer>
)}