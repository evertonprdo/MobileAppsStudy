import { Text, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import s from "../styles";
import AppList from "./AppsList";
import { RootListNames } from "../..";

type DrawerContentProps = {
    onChangeScreen: (screen: string) => void
}
export default function DrawerContent({ onChangeScreen }: DrawerContentProps) {
    return (
        <TouchableWithoutFeedback>
            <SafeAreaView style= { s.drawerContentContainer }>
                <Text style= { s.drawerTitle }>Apps List</Text>

                <View style= { s.drawerLine } />

                <AppList 
                    appsName={ RootListNames }
                    onChangeScreen= { onChangeScreen }
                />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}