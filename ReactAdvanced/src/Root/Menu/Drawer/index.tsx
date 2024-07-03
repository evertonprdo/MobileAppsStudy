import { Modal, TouchableWithoutFeedback, View } from "react-native"
import s from "../styles"
import DrawerContent from "./DrawerContent"

type DrawerProps = {
    drawerVisibility: boolean
    onClose: () => void
}
export default function Drawer({ drawerVisibility, onClose }: DrawerProps) {
    return (
        <Modal
            visible= { drawerVisibility }
            transparent= {true}
            statusBarTranslucent
            onRequestClose={ onClose }
        >
            <TouchableWithoutFeedback onPress={ onClose }>
                <View style= {s.drawerContainer}>
                    <DrawerContent />
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}