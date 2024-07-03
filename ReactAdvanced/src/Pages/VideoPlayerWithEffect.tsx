import { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Button, Platform } from 'react-native';
import { Video } from 'expo-av';

export default function VideoPlayerWithEffect() {
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <View style={styles.contentContainer}>
            <View style={ styles.controlsContainer }>
                <VideoPlayer 
                    isPlaying={ isPlaying }
                    src= "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                />
                <Button
                    title={ isPlaying ? 'Pause' : 'Play' }
                    onPress={ () => setIsPlaying(!isPlaying) }
                />
            </View>
        </View>
    )
}

type VideoPlayerProps = {
    src: string
    isPlaying: boolean
}
function VideoPlayer({ src, isPlaying }: VideoPlayerProps) {
    const video = useRef<Video>(null);

    useEffect(() => {       
        isPlaying ? 
        video.current?.playAsync() 
        : video.current?.pauseAsync()
    }, [isPlaying])
    return (
        <Video
            ref={ video }
            style={ styles.video }
            source={{
                uri: src,
            }}
            isLooping
        />
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