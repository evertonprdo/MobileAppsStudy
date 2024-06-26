import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import type { RootStackParamList } from "./src/pages";

import Page, { RootListNames } from "./src/pages";
import HomeScreen from "./src/pages/HomeScreen";

const Stack = createNativeStackNavigator<RootStackParamList & { HomeScreen: undefined }>();
export default function App() {
return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name="HomeScreen"
                key={String('screen_HomeScreen')}
                component={ HomeScreen }
            />
            
            { RootListNames.map((header) => (
                <Stack.Screen
                    name={header}
                    component={ Page[header] }
                    key={String('screen_' + header)}
                />
            ))}
        </Stack.Navigator>
    </NavigationContainer>
)}