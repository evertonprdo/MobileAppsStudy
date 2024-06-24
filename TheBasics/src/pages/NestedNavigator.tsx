import createNavigatorFactory from "../customNavigator";
import { NavigationContainer } from "@react-navigation/native";

import { InputContent, PressCount } from "../pages";

const MyNested = createNavigatorFactory();

export default function NestedNavigator() {
return(
    <NavigationContainer independent= {true}>
        <MyNested.Navigator initialRouteName="one">
            <MyNested.Screen name="one" component={ InputContent }/>
            <MyNested.Screen name="four" component={ PressCount }/>
        </MyNested.Navigator>
    </NavigationContainer>
)}