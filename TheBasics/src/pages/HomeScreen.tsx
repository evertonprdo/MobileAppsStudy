import { View, Pressable, StyleSheet, Text } from 'react-native'

import type { StackScreenProps } from "@react-navigation/stack";;
import type { RootStackParamList } from '../../App';

export default function HomeScreen({ navigation }: StackScreenProps<RootStackParamList, 'home'>) {
    const RootKeys: Array<keyof RootStackParamList> = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'ten']

return(
    <View style= {style.mainContainer}>
        {RootKeys.map((value, i) => {
            return (
                <Pressable
                    key={i}
                    onPress={ () => navigation.navigate(value) }
                    style= {style.button}
                >
                    <Text selectable= {false}>{ value }</Text>
                </Pressable>
            )
        })}
    </View>
)}

const style = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: '75%',
        backgroundColor: '#ccc',
        borderRadius: 5
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})