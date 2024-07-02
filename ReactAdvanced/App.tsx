import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootComponentsList, RootListNames } from './src/Root';
import Navigation from './src/Root/Menu';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    const [ screenName, setScreenName ] = useState("HomeScreen")
    const Screen = getScreenComponent()

    function getScreenComponent() {
        for(const key of RootListNames) {
            if(screenName === key) {
                return RootComponentsList[key]
            }
        }
        return () => <Text>Not Found</Text>
    }
    
    return (
        <SafeAreaProvider>
            <View style= {styles.container}>
                <StatusBar 
                    style='light' 
                    translucent= { true } 
                />

                <Navigation 
                    onChangeScreen={ setScreenName }
                />

                <View style= {styles.contentContainer}>
                    <Screen/>
                </View>
            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#348e91',

        justifyContent: 'space-between',
    },
    footerContainer: {
        height: 57,
        flexDirection: 'row',

        justifyContent: 'center',
        alignItems: 'center'
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#213635'
    }
});