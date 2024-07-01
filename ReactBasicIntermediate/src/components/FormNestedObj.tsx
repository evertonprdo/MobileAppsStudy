import { useState } from "react"
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function FormNestedObj() {
    const [ person, setPerson ] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
        }
    });
    
    return (
        <View style= {{flex: 1}}>
            <LabelInput 
                label="Name"
                value={person.name}
                onChangeText={(text) => setPerson({
                    ...person,
                    name: text
                })}
            />

            <LabelInput 
                label="Title"
                value={person.artwork.title}
                onChangeText={(text) => setPerson({
                    ...person,
                    artwork: {
                        ...person.artwork,
                        title: text
                    }
                })}
            />

            <LabelInput 
                label="City"
                value={person.artwork.city}
                onChangeText={(text) => setPerson({
                    ...person,
                    artwork: {
                        ...person.artwork,
                        city: text
                    }
                })}
            />

            <LabelInput 
                label="Image"
                value={person.artwork.image}
                onChangeText={(text) => setPerson({
                    ...person,
                    artwork: {
                        ...person.artwork,
                        image: text
                    }
                })}
            />

            <View style= {{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 30, paddingHorizontal: 20}}>
                <Text>{ `${person.artwork.title} of ${person.name} (located in ${person.artwork.city})` }</Text>
                <Image style= {{width: '100%', height: 300}} source={{uri: person.artwork.image}} />
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