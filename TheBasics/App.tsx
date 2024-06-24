import createNavigatorFactory from "./src/customNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { HomeScreen, InputContent, PressCount, NestedNavigator } from "./src/pages";

const My = createNavigatorFactory();

export default function App() {
return(
    <SafeAreaProvider>
        <NavigationContainer>
            <My.Navigator initialRouteName="Home">
                <My.Screen name="Home" component={ HomeScreen }/>
                <My.Screen name="one" component={ PressCount }/>
                <My.Screen name="two" component={ InputContent }/>
                <My.Screen name="tree" component={ NestedNavigator }/>
            </My.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
)}