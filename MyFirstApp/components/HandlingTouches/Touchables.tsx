import React, { Component } from "react";
import { Alert, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from "react-native";

export default function Touchables() {
    const alertTappedButton = () => { Alert.alert('You tapped the button!') }
    const alertLongPressButton = () => { Alert.alert('You long-pressed the button!') }

    return (
        <View style = { styles.container }>
            <TouchableHighlight onPress={ alertTappedButton } underlayColor={ 'white' } >
                <View style= {styles.button}>
                    <Text style= { styles.buttonText }>{ "TouchableHighlight" }</Text>
                </View>
            </TouchableHighlight>

            <TouchableOpacity onPress={ alertTappedButton } >
                <View style= {styles.button}>
                    <Text style= { styles.buttonText }>{ "TouchableOpacity" }</Text>
                </View>
            </TouchableOpacity>

            <TouchableNativeFeedback
                onPress= { alertTappedButton }
                background= { Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : undefined }
            >
                <View style= {styles.button}>
                    <Text style= { styles.buttonText }>
                        TouchableNativeFeedback{' '} { Platform.OS !== 'android' ? '(android only)' : '' }
                    </Text>
                </View>
            </TouchableNativeFeedback>

            <TouchableWithoutFeedback onPress= { alertTappedButton }>
                <View style= {styles.button}>
                    <Text style= { styles.buttonText }>{ "TouchableWithoutFeedBack" }</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableHighlight 
                onPress= { alertTappedButton } 
                onLongPress= { alertLongPressButton } 
                underlayColor= { 'white' } 
            >
                <View style= {styles.button}>
                    <Text style= { styles.buttonText }>{ "Touchable with Long Press" }</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            paddingTop: 60,
            alignItems: 'center',
        },
        button: {
            marginBottom: 30,
            width: 260,
            alignItems: 'center',
            backgroundColor: '#2196F3',
        },
        buttonText: {
            textAlign: 'center',
            padding: 20,
            color: 'white',
        }
    }
)