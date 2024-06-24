import { View, Pressable, StyleSheet, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { StackScreenProps } from "@react-navigation/stack";;
import type { ParamListBase } from "@react-navigation/native";

export default function HomeScreen({ navigation }: StackScreenProps<ParamListBase>) {
    const Insets = useSafeAreaInsets();
return(
    <View style= {{flex: 1, justifyContent: 'space-around', alignItems: 'center', paddingTop: Insets.top}}>
        <Pressable onPress={ () => navigation.navigate('one') } style= {style.button}>
            <Text selectable= {false}>{ 'One' }</Text>
        </Pressable>
        <Pressable onPress={ () => navigation.navigate('two') } style= {style.button}>
            <Text selectable= {false} style= {{cursor: 'pointer'}}>{ 'Two' }</Text>
        </Pressable>
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
    }
})