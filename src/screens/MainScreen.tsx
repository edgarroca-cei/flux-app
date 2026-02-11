import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Pressable,
    Dimensions,
    Animated,
    Platform,
} from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { VideoView, useVideoPlayer } from 'expo-video';
import * as FileSystem from 'expo-file-system';
import { useVideoStore } from '../store/videoStore';
import { colors, animations } from '../theme';
import * as haptics from '../utils/haptics';
import { extractDominantColor } from '../utils/colorExtractor';
import RecordingOverlay from '../components/RecordingOverlay';
import TimelineScrubber from '../components/TimelineScrubber';
import VideoPlayer from '../components/VideoPlayer';

const { width, height } = Dimensions.get('window');

export default function MainScreen() {
    const [permission, requestPermission] = useCameraPermissions();
    const [isRecording, setIsRecording] = useState(false);
    const [recordingProgress, setRecordingProgress] = useState(0);
    const cameraRef = useRef<CameraView>(null);
    const recordingTimerRef = useRef<NodeJS.Timeout | null>(null);

    const { currentDate, getVideoByDate, saveVideo, loadVideos } = useVideoStore();
    const currentVideo = currentDate ? getVideoByDate(currentDate) : null;

    // Animación de viñeteado
    const vignetteOpacity = useRef(new Animated.Value(0.3)).current;

    useEffect(() => {
        loadVideos();
    }, []);

    useEffect(() => {
        if (!permission) {
            requestPermission();
        }
    }, [permission]);

    const handlePressIn = async () => {
        if (isRecording || currentDate) return; // Solo grabar en "hoy"

        await haptics.recordingStart();
        setIsRecording(true);
        setRecordingProgress(0);

        // Iniciar grabación
        if (cameraRef.current) {
            try {
                const video = await cameraRef.current.recordAsync({
                    maxDuration: 5,
                });

                if (video) {
                    // Extraer color dominante
                    const dominantColor = await extractDominantColor(video.uri);

                    // Guardar el vídeo
                    const today = new Date().toISOString().split('T')[0];
                    await saveVideo({
                        date: today,
                        uri: video.uri,
                        dominantColor,
                        duration: 5,
                    });

                    await haptics.recordingPop();
                }
            } catch (error) {
                console.error('Error recording:', error);
                await haptics.notificationWarning();
            } finally {
                setIsRecording(false);
                setRecordingProgress(0);
            }
        }

        // Animación de progreso
        let progress = 0;
        recordingTimerRef.current = setInterval(() => {
            progress += 0.02; // 50 updates en 5 segundos
            setRecordingProgress(Math.min(progress, 1));

            if (progress >= 1 && recordingTimerRef.current) {
                clearInterval(recordingTimerRef.current);
            }
        }, 100);
    };

    const handlePressOut = () => {
        if (recordingTimerRef.current) {
            clearInterval(recordingTimerRef.current);
        }

        // Detener grabación si está en curso
        if (isRecording && cameraRef.current) {
            cameraRef.current.stopRecording();
        }
    };

    if (!permission?.granted) {
        return <View style={styles.container} />;
    }

    return (
        <View style={styles.container}>
            {/* Cámara o Video */}
            {!currentDate ? (
                <Pressable
                    style={styles.cameraContainer}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                    disabled={isRecording}
                >
                    <CameraView
                        ref={cameraRef}
                        style={styles.camera}
                        facing="back"
                    />

                    {/* Viñeteado suave */}
                    <Animated.View
                        style={[
                            styles.vignette,
                            { opacity: vignetteOpacity },
                        ]}
                        pointerEvents="none"
                    />

                    {/* Overlay de grabación */}
                    {isRecording && (
                        <RecordingOverlay progress={recordingProgress} />
                    )}
                </Pressable>
            ) : (
                <View style={styles.videoContainer}>
                    {currentVideo && (
                        <VideoPlayer videoUri={currentVideo.uri} />
                    )}
                </View>
            )}

            {/* Timeline Scrubber */}
            <TimelineScrubber />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    cameraContainer: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    vignette: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'transparent',
        borderRadius: 0,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 100,
        elevation: 10,
    },
    videoContainer: {
        flex: 1,
    },
    video: {
        flex: 1,
    },
});
