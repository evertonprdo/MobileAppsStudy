import { ScrollView, Text } from "react-native"
import s from "../styles"
import MenuButton from "../MenuButton"
import { useSetScreen } from "../../Navigation/rootContext"
import { RootListNamesType } from "../.."

type AppListProps = {
    appsName: RootListNamesType[]
}
export default function AppList({ appsName }: AppListProps) {
    const onScreenChange = useSetScreen()
    return (
        <ScrollView style= { s.appListContainer }>
            { appsName.map(name => (
                <MenuButton
                    key= {"App_" + name}
                    onPress= { () => onScreenChange(name) }
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