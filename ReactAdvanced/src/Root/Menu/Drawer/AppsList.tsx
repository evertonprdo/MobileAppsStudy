import { ScrollView, Text } from "react-native"
import s from "../styles"
import MenuButton from "../MenuButton"

type AppListProps = {
    appsName: string[] 
    onChangeScreen: (screen: string) => void
}
export default function AppList({ appsName, onChangeScreen }: AppListProps) {
    return (
        <ScrollView style= { s.appListContainer }>
            { appsName.map(name => (
                <MenuButton
                    key= {"App_" + name}
                    onPress= { () => onChangeScreen(name) }
                    style= { s.appListButton }
                >
                    <Text style= { s.appListText }>
                        { name }
                    </Text>
                </MenuButton>
            )) }
        </ScrollView>
    )
}