import { useRef, useState } from 'react';
import { View, StyleSheet, Button, Platform } from 'react-native';
import { Video } from 'expo-av';

export default function VideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const video = useRef<Video>(null);

    function handleClick() {
        if (isPlaying) {
            video.current?.pauseAsync()
        } else {
            video.current?.playAsync()
        }
        setIsPlaying(!isPlaying)
    }
    return (
        <View style={styles.contentContainer}>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
                }}
                isLooping
            />
            <View style={styles.controlsContainer}>
                <Button
                    title={isPlaying ? 'Pause' : 'Play'}
                    onPress={handleClick}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        paddingHorizontal: Platform.OS === 'web' ? 50 : 25,
    },
    video: {
        width: '100%',
        height: Platform.OS === 'web' ? 473 : 199,
        alignSelf: 'center'
    },
    controlsContainer: {
        padding: 10,
    },
});