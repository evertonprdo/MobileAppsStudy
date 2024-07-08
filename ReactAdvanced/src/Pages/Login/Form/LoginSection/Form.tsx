import { useState } from "react"
import { Text, View } from "react-native"

import s from "../../style"
import InputLogin from "./InputLogin"
import FormButton from "../FormButton"

import { useCurrentUser, useTheme } from "../../Hooks"

export default function Form() {
    const { setCurrentUser } = useCurrentUser()
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')

    const canLogin = firstName.trim() !== '' && lastName.trim() !== ''

    function handleOnPressLogIn() {
        setCurrentUser({
            firstName: firstName,
            lastName: lastName
        })
    }
    return (
        <>
        <View style= {s.formLabelsContainer}>
            <InputLogin
                label="FirstName: "
                value={ firstName }
                onChangeText={ setFirstName }
            />
            <InputLogin
                label="LastName: "
                value= { lastName }
                onChangeText= { setLastName }
            />
        </View>

        <View style= {s.buttonContainer}>
            <FormButton
                title="Log in"
                onPress={ handleOnPressLogIn }
                disable= { !canLogin }
            />
            <Text 
                style= {[
                    s.textInfo,
                    useTheme().name === 'dark' && s.textInfoDark
                ]}
            >
                { !canLogin && 'Fill in both fields.' }
            </Text>
        </View>
        </>
    )
}