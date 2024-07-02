import MenuButton from "../MenuButton";
import Icon from '@expo/vector-icons/Ionicons';

type NavMenuIconProps = {
    onPress: () => void
}
export default function NavMenuIcon({ onPress }: NavMenuIconProps) {
    return (
        <MenuButton
            onPress={ onPress }
        >
            <Icon 
                name="menu"
                size={ 33 }
                color= { 'white' }
            />
        </MenuButton>
    )
}