import React from 'react';
import { StyleSheet } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';

interface VideoPlayerProps {
    videoUri: string;
}

export default function VideoPlayer({ videoUri }: VideoPlayerProps) {
    const player = useVideoPlayer(videoUri, player => {
        player.loop = true;
        player.play();
    });

    return (
        <VideoView
            style={styles.video}
            player={player}
            contentFit="cover"
            nativeControls={false}
        />
    );
}

const styles = StyleSheet.create({
    video: {
        flex: 1,
    },
});
