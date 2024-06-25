import { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

export default function FormComponent() {
    const [ name, setName ] = useState('Taylor');
    const [ age, setAge ] = useState(42);

    return (
        <View style= {{flex: 1, justifyContent: 'center', alignContent: 'center', gap: 20, paddingHorizontal: 30}}>
            <TextInput 
                value={name}
                onChangeText={setName}
                style= {{backgroundColor: 'white', paddingVertical: 10, paddingHorizontal: 5}}
            />
            <Button 
                title="Increment age"
                onPress={ () => setAge(age + 1) }
            />
            <Text>{ `Hello, ${name}. You are ${age} years old.` }</Text>
        </View>
    )
}