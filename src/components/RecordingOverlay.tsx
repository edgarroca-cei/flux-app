import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import { colors } from '../theme';

const { width, height } = Dimensions.get('window');

interface RecordingOverlayProps {
    progress: number; // 0 to 1
}

export default function RecordingOverlay({ progress }: RecordingOverlayProps) {
    const glowOpacity = useRef(new Animated.Value(0)).current;
    const waveScale = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        // Animación de "inhalación" - los bordes brillan
        Animated.timing(glowOpacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();

        // Onda de distorsión que se cierra hacia el centro
        Animated.timing(waveScale, {
            toValue: 0,
            duration: 5000,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <View style={styles.container} pointerEvents="none">
            {/* Bordes brillantes */}
            <Animated.View
                style={[
                    styles.glowBorder,
                    {
                        opacity: glowOpacity,
                        borderColor: colors.recording.glow,
                    },
                ]}
            />

            {/* Onda de distorsión circular */}
            <Animated.View
                style={[
                    styles.wave,
                    {
                        transform: [
                            {
                                scale: waveScale.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0.1, 1],
                                })
                            },
                        ],
                        opacity: waveScale.interpolate({
                            inputRange: [0, 0.5, 1],
                            outputRange: [0, 0.8, 0.3],
                        }),
                    },
                ]}
            />

            {/* Indicador de progreso sutil */}
            <View style={styles.progressContainer}>
                <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    glowBorder: {
        ...StyleSheet.absoluteFillObject,
        borderWidth: 4,
        borderRadius: 0,
        shadowColor: colors.recording.active,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
    },
    wave: {
        width: width * 1.5,
        height: width * 1.5,
        borderRadius: width * 0.75,
        borderWidth: 2,
        borderColor: colors.glow.soft,
        backgroundColor: 'transparent',
    },
    progressContainer: {
        position: 'absolute',
        bottom: 120,
        left: 40,
        right: 40,
        height: 2,
        backgroundColor: colors.glow.faint,
        borderRadius: 1,
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        backgroundColor: colors.glow.white,
    },
});
