import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import DrawerMenu from "../Menu";
import ContentScreen from "./ContentScreen";
import { useScreen } from "./rootContext";

export default function Navigation() {
    return (
        <View style= {{flex: 1}}>
                    
            <StatusBar 
                style='light' 
                translucent= { true } 
            />
            <DrawerMenu />
            <ContentScreen 
                name= { useScreen() }
            />
        </View>
    )
}