import { Switch, Text, View } from "react-native";
import MoveButton from "./MoveButton";
import styles from "../styles";

type HeaderMovesProps = {
    inverted: boolean
    isCurrentMove: boolean
    onPress: () => void
    onChange: (value: boolean) => void
}
export default function HeaderMoves({ inverted, isCurrentMove, onChange, onPress }: HeaderMovesProps ) {
    return(
        <>
            <View style= { styles.historyHeaderSwitch }>
                <Text style= {styles.gameText}>ReverseOrd: </Text>
                <Switch
                    value= { inverted }
                    onValueChange={ onChange }
                />
            </View>
            <MoveButton
                description= { "Get to Game Start" }
                isCurrentMove = { isCurrentMove }
                onPress={ onPress }
                style= { styles.historyHeaderButton }
            />
        </>
    )
}