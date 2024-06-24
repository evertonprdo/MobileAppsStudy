import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import Circle from './components/Circle';

const { width, height } = Dimensions.get('window');

const getRandomPosition = () => {
    const x = Math.random() * (width - 50);
    const y = Math.random() * (height - 50);
    return { top: y, left: x };
};

const App = () => {
    const [position, setPosition] = useState(getRandomPosition());
    const [score, setScore] = useState(0);
    console.log('Renderizou');

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition(getRandomPosition());
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    const handlePress = () => {
        setScore(score + 1);
        setPosition(getRandomPosition());
    };

    return (
        <View style={styles.container}>
            <Text style={styles.score}>Score: {score}</Text>
            <Circle onPress={handlePress} position={position} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    score: {
        fontSize: 24,
        fontWeight: 'bold',
        position: 'absolute',
        top: 40,
    },
});

export default App;