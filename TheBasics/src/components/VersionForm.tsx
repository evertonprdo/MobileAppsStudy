import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function VersionForm() {
    const [version, setVersion] = useState(0);

    function handleReset() {
        setVersion(version + 1)
    }

    return(
        <View style= {styles.mainContainer}>
            <Button title="Reset" onPress={handleReset} />
            <Form key={ version } />
        </View>
    )
}

function Form() {
    const [name, setName] = useState('Taylor');

    return(
        <>
            <TextInput style={styles.textInput} value={name} onChangeText={ setName } />
            <Text>Hello, {name}.</Text>
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 15,
        margin: 30,
        borderRadius: 20,
        gap: 20,
        backgroundColor: '#bbb',
        alignItems: 'center'
    },
    textInput: {
        backgroundColor: 'white',
        padding: 10,
        width: '80%',
        borderRadius: 10
    }
})