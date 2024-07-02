import { View } from "react-native";

import s from "./styles";
import Drawer from "./Drawer";
import NavigationBar from "./NavigationBar";
import { useState } from "react";

type NavigationProps = {
    onChangeScreen: (screen: string) => void 
}
export default function Navigation({ onChangeScreen }: NavigationProps) {
    const [ showDrawer, setShowDrawer ] = useState(false)

    return (
        <View style= { s.menuContainer }>
            <NavigationBar
                onPress={ () => setShowDrawer(!showDrawer) }
            />
            <Drawer
                drawerVisibility= { showDrawer }
                onChangeScreen={ onChangeScreen }
                onClose= { () => setShowDrawer(false) }
            />
        </View>
    )
}