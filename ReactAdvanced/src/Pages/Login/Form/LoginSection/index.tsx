import { Text, View } from "react-native"

import s from "../../style"
import Form from "./Form"

import { useCurrentUser, useTheme } from "../../Hooks"

export default function FormLogin() {
    const isLoggedIn = useCurrentUser().currentUser?.firstName !== undefined

    const welcomeStyle = [
        s.welcomeText,
        useTheme().name === 'dark' && s.darkWelcomeText
    ]

    return (
        <View style= { s.formContainer }>
            <Text style= { welcomeStyle }>
                Welcome
            </Text>

            { isLoggedIn ? <Gretting/> : <Form/> }
        </View>
    )
}


function Gretting() {
    const { currentUser } = useCurrentUser()
    const textStyle = [
        s.textButton,
        useTheme().name === 'dark' && s.darkTextButton,
    ]
    return (
        <View>
            <Text style= { textStyle }>
                { `Hello ${currentUser?.firstName} ${currentUser?.lastName}` }
            </Text>
        </View>
    )
}