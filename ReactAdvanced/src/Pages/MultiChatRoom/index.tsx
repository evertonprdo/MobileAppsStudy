import { useEffect, useRef, useState } from "react";
import { Switch, View } from "react-native";

import s from "./styles";
import Notification from "./Notification";
import ChatNavigation from "./ChatNavigation";
import Chat from "./Chat";
import { createConnection } from "./model/chat";

const serverUrl = 'https://localhost:1234'

export default function MultiChatRoom() {
    const [ roomId, setRoomId ] = useState('general')

    const [ isDark, setIsDark ] = useState(false)
    const [ notifyShow, setNotifyShown ] = useState(false)
    const [ message, setMessage ] = useState('')
    
    function onConnection(text: string, theme: boolean) {
        setMessage(text)
        setIsDark(theme)

        setNotifyShown(true)
        setTimeout(() => {
            setNotifyShown(false)
        }, 3000)
    }

    const onConnected = () => {
        onConnection('Connected', isDark)
    }
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId)
        connection.on('connected', () => {
            onConnected()
        })
        connection.connect()
        return () => connection.disconnect()
    }, [ roomId ])

    return(
        <View style= {s.mainContainer}>
            <Notification 
                message= { message }
                darkTheme = { isDark }
                visibility= { notifyShow }
            />

            <ChatNavigation
                theme= { isDark }
                onChangeTheme={ setIsDark }
                onChangeRoom= { setRoomId }
            />

            <Chat
                roomId= { roomId }
            />
        </View>
    )
}