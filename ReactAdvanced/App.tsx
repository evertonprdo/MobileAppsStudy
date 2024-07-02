import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { RootComponentsList, RootListNames } from './src/Root';

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
        <View style= {styles.container}>
            <View style= {styles.contentContainer}>
                <Screen/>
            </View>

            <View style= {styles.footerContainer}>
                { RootListNames.map(item => {
                    return (
                        <Button 
                            key={"Button_" + item}
                            title={ item }
                            onPress={ () => setScreenName(item) }
                        />
                    )
                }) }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e3e3e3',

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
    }
});