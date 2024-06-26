import { View, Pressable, StyleSheet, Text, ScrollView } from 'react-native'

import type { StackScreenProps } from "@react-navigation/stack";;
import type { RootStackParamList } from '.';

import { RootListNames } from '.';

export default function HomeScreen({ navigation }: StackScreenProps<RootStackParamList & { HomeScreen: undefined }, 'HomeScreen'>) {
return(
    <ScrollView>
        <View style= {style.mainContainer}>
            {RootListNames.map((value, i) => {
                return (
                    <Pressable
                        key={i}
                        onPress={ () => navigation.navigate(value) }
                        style= {style.button}
                    >
                        <Text style={{ color: '#111',fontWeight: '500', letterSpacing: 0.7 }} selectable= {false}>{ value }</Text>
                    </Pressable>
                )
            })}
        </View>
    </ScrollView>
)}

const style = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: '75%',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 17,
        paddingTop: 10,
    },
})