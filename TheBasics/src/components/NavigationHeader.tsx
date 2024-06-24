import { View, Pressable, Text, StyleSheet, StatusBar } from "react-native"; 
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MAIN_COLOR } from "../constants/Colors";

import type { StackScreenProps } from "@react-navigation/stack";
import type { ParamListBase } from "@react-navigation/native";

export default function NavigationHeader({ navigation, route }: StackScreenProps<ParamListBase>) {
    const Insets = useSafeAreaInsets();
    console.log('Renderizou');
    
return(
    <View style= {[ styles.safestArea, { paddingTop: Insets.top } ]}>
        <StatusBar barStyle={ 'light-content' }/>
        <View style = { styles.headerContainer }>
            { navigation.canGoBack() ?
                <>
                    <Pressable style= { styles.button } onPress={ () => { navigation.goBack() } }>
                        <View>
                            <Text selectable= {false} >{ 'GotBack' }</Text>
                        </View>
                    </Pressable>
                    <Text selectable= {false} >{ route.name }</Text>
                </>
                :
                <>
                    <Text selectable= {false} >{ 'Homepage' }</Text>
                </>
            }
        </View>
    </View>
)}

const styles = StyleSheet.create({
    safestArea: {
        backgroundColor: MAIN_COLOR
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

        minHeight: 100,
        paddingVertical: 7,
        backgroundColor: '#ccc',
    },
    button: {
        backgroundColor: 'orange'
    }
})