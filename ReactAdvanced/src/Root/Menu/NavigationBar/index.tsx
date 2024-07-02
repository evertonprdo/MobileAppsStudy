import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import s from "../styles";
import NavMenuIcon from "./NavMenuIcon";

type NavigationBarProps = {
    onPress: () => void
}
export default function NavigationBar({ onPress }: NavigationBarProps) {
    return (
        <SafeAreaView style= { s.navBarContainer }>
            <Text style= { s.textLabel }>React Docs Advanced</Text>
            <NavMenuIcon
                onPress={ onPress }
            />
        </SafeAreaView>
    )
}