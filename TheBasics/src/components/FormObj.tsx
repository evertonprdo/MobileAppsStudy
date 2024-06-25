import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function FormObj() {
    const [ form, setForm ] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'barbara@example.com',
    });

    return (
        <View>
            <LabelInput 
                label="First name"
                value={ form.firstName }
                onChangeText={ text => setForm({
                    ...form,
                    firstName: text
                })}
            />

            <LabelInput 
                label="Last name"
                value={ form.lastName }
                onChangeText={ text => setForm({
                    ...form,
                    lastName: text
                })}
            />

            <LabelInput 
                label="Email"
                value={ form.email }
                onChangeText={ text => setForm({
                    ...form,
                    email: text
                })}
            />

            <View style= {{height: 75, alignItems: 'center', justifyContent: 'center'}}>
                <Text style= {{fontWeight: '600'}} >{ `Hello! ${form.firstName} ${form.lastName}, Thank's for share your email: (${form.email})` }</Text>
            </View>
        </View>
    )
}

type LabelInputProps = {
    label: string
    value: string
    onChangeText: (text: string) => void
}

function LabelInput({label, value, onChangeText}: LabelInputProps) {
    return(
        <View style= {styles.labelInputContainer}>
            <View style= {styles.text}>
                <Text>{label}: </Text>
            </View>
            <TextInput 
                value={value}
                onChangeText={ onChangeText }
                style= {styles.textInput}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%'
    },
    labelInputContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        paddingHorizontal: 10
    },
    textInput: {
        flex: 4,
        backgroundColor: 'white',
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    text: {
        flex: 1
    }
})