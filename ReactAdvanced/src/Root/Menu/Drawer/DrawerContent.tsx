import { Text, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import s from "../styles";
import AppList from "./AppsList";
import { RootListNames } from "../..";


export default function DrawerContent() {
    return (
        <TouchableWithoutFeedback>
            <SafeAreaView style= { s.drawerContentContainer }>
                <Text style= { s.drawerTitle }>Apps List</Text>

                <View style= { s.drawerLine } />

                <AppList 
                    appsName={ RootListNames }
                />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}