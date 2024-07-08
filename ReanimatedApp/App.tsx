import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';
import { Circle, Svg } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

export default function App() {
    const r = useSharedValue(10)

    function handlePress() {
        r.value += 10
    }

    const animatedProps = useAnimatedProps(() => ({
        r: withTiming(r.value)
    }))

    return (
        <View style={styles.container}>

            <Svg style={styles.svg}>
                <AnimatedCircle
                    cx="50%"
                    cy="50%"
                    fill="#b58df1"
                    animatedProps={animatedProps}
                />
            </Svg>

            <Pressable
                style={styles.button}
                onPress={handlePress}
            >
                <Text
                    style={{
                        color: 'white',
                        userSelect: 'none'
                    }}
                >
                    Click Me!
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    svg: {
        height: 250,
        width: '100%',
    },
    button: {
        alignSelf: 'center',

        paddingHorizontal: 21,
        paddingVertical: 10,

        backgroundColor: '#331173',
    }
});
