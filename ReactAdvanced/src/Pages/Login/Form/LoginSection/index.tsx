import { useState } from "react"
import { Text, TextInput, View } from "react-native"

import s from "../../style"
import FormButton from "../FormButton"
import InputLogin from "./InputLogin"

import { useCurrentUser, useTheme } from "../../Hooks"

export default function Form() {
    const { name } = useTheme()
    const formContainerStyle = [
        s.formContainer,
        name === 'dark' && s.darkFormContainer
    ]
    const welcomeStyle = [
        s.welcomeText,
        name === 'dark' && s.darkWelcomeText
    ]

    const { currentUser } = useCurrentUser()
    const isLoggedIn = currentUser?.firstName !== undefined

    return (
        <View style= { formContainerStyle }>
            <Text style= { welcomeStyle }>
                Welcome
            </Text>

            { isLoggedIn ? <Gretting/> : <Welcome/> }
        </View>
    )
}

function Welcome() {
    const { setCurrentUser } = useCurrentUser()
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')

    return (
        <View>
            <View>
                <InputLogin
                    label="FirstName: "
                />
                <InputLogin
                    label="LastName: "
                />
            </View>

            <View style= {s.buttonContainer}>
                <FormButton
                    title="Log in"
                />
                <Text>Fill in both fields.</Text>
            </View>
        </View>
    )
}

function Gretting() {
    const { currentUser } = useCurrentUser()
    return (
        <View>
            <Text>{ `Hello ${currentUser?.firstName} ${currentUser?.lastName}` }</Text>
        </View>
    )
}