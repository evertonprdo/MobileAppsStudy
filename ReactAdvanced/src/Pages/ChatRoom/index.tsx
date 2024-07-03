import { useEffect } from "react";
import { createConnection } from "./createConnection";
import { Text } from "react-native";

export default function ChatRoom() {
    useEffect(() => {
        const connection = createConnection();
        connection.connect();
        return () => {
            connection.disconnect()
        }
    }, [])

    return <Text style= {{color: 'white', fontSize: 33, fontWeight: 'bold'}}>Welcome to the chat</Text>
}