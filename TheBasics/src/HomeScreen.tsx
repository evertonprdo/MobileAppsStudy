import { useState } from 'react'
import { View, Pressable, Dimensions, StyleSheet, Text } from 'react-native'

type Position = {
    width: number
    height: number
}
const screen: Position = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}
const click_size = 50
const bg_color = '#ccc'

export default function HomeScreen() {
    const play_size = getPlayContainerSize(screen)
    const [ position, setPosition ] = useState<Position>({height: (play_size.height), width: (play_size.width)});
    const [ clicks, setClicks ] = useState(0);

    console.log('Renderizou');

    function handleClick() {
        const random_pos = getRandomPosition(play_size);
        setPosition(random_pos);
        setClicks(clicks + 1);
    }

return (
    <View style= { styles.screenContainer }>
        <View style= { styles.mainContainer }>
            <View style= {styles.scoreContainer}>
                <Text>{`score: ${clicks}`}</Text>
            </View>
            <View style= {styles.playContainer}>
                <Pressable
                    style= {[ styles.boxContainer, { top: position.height, left: position.width } ]}
                    onPress={ handleClick }
                />
            </View>
        </View>
    </View>
)}

function getPlayContainerSize(size: Position): Position {
    let { width, height } = size;
    height = size.height - click_size - 40 - 75 - 25
    width = size.width - click_size
    return { width, height }
}

function getRandomPosition(size: Position): Position {
    let { width, height } = size
    width = Math.floor(Math.random() * (size.width))
    height = Math.floor(Math.random() * (size.width))
    return { width, height }
}

const styles = StyleSheet.create({
    screenContainer: {
        height: screen.height,
        width: screen.width,
        justifyContent: 'center',
        alignContent: 'center',
    },
    mainContainer: {
        flex: 1,
        paddingBottom: 10,
        paddingTop: 30
    },
    scoreContainer: {
        height: 75,
    },
    playContainer: {
        flex: 1
    },
    boxContainer: {
        position: "absolute",

        width: click_size,
        height: click_size,

        borderRadius: 50,
        backgroundColor: bg_color,
    }
})