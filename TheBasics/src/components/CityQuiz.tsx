import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function CityQuiz() {
    const [ answer, setAnswer ] = useState('');
    const [ error, setError ] = useState<Error | null>(null);
    const [ status, setStatus ] = useState('typing');

    async function handleSubmit() {
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success')
        } catch (err) {
            setStatus('typing');
            setError(err as Error)
        }
    }

    function handleTextAreaChange(e: string) {
        setAnswer(e)
    }
    return (
        <View style= { styles.mainContainer }>
            <View style= { styles.headerContainer }>
                <Text style= { styles.titleText }>City Quiz</Text>
                <Text style= { styles.answerText }>In which city is there a billboard that turns air into drinkable water?</Text>
            </View>

            <View style={ styles.answerContainer }>
                { status !== 'success' ? (
                    <>
                        <TextInput 
                            value= { answer }
                            onChangeText={ handleTextAreaChange }
                            inputMode={ status !== "submitting" ? "text" : "none" }
                            onKeyPress={ (e) => e.nativeEvent.key === 'Enter' && handleSubmit }
                            style= { styles.answerButton }
                        />
                        <Pressable
                            disabled= { answer.length === 0 || status === 'submitting' }
                            style= {[ 
                                styles.answerButton,
                                { backgroundColor: answer.length === 0 || status === 'submitting' ? "#ddd" : "white" }
                            ]}
                            onPress={ handleSubmit }
                        >
                            <Text style= {[ styles.answerText, {fontSize: 14} ]}>Submit</Text>
                        </Pressable>
                        {error !== null && <Text style= {[ styles.answerText, {fontSize: 14, color: 'red'} ]}>{error.message}</Text>}
                    </>
                ) : ( 
                    <Text style= {[styles.titleText, {fontSize: 20} ]}>Congratulations, Lima is the right answer!</Text>
                ) }
            </View>
        </View>
    )
}

function submitForm(answer: string): Promise<string | Error> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'lima'
            if (shouldError) {
                reject(new Error('Good guess but a wrong answer. Try again!'))
            } else {
                resolve("Congratulations, Lima is the right answer!");
            }
        }, 1500);
    })
}
const border = {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    borderRadius: 7,
}
const styles = StyleSheet.create({
    mainContainer: {
        height: 500,
        margin: 23,
        padding: 12,
        gap: 33
    },
    headerContainer: {
        ...border,
        padding: 33,
        gap: 25
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 0.3,
        userSelect: 'none',
        textAlign: 'center',
    },
    answerText: {
        fontSize: 17,
        fontWeight: 'normal',
        letterSpacing: 0.3,
        userSelect: 'none',
        textAlign: 'center',
    },
    answerContainer: {
        ...border,
        padding: 30,
        gap: 10,
        justifyContent: 'center',
    },
    answerButton: {
        ...border,
        paddingVertical: 7,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})