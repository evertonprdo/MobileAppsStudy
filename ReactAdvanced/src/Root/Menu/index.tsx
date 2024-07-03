import { View } from "react-native";

import s from "./styles";
import Drawer from "./Drawer";
import NavigationBar from "./NavigationBar";
import { useState } from "react";

export default function DrawerMenu() {
    const [ showDrawer, setShowDrawer ] = useState(false)

    return (
        <View style= { s.menuContainer }>
            <NavigationBar
                onPress={ () => setShowDrawer(!showDrawer) }
            />
            <Drawer
                drawerVisibility= { showDrawer }
                onClose= { () => setShowDrawer(false) }
            />
        </View>
    )
}