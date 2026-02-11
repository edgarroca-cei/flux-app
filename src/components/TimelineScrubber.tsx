import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    ScrollView,
    Pressable,
} from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    runOnJS,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useVideoStore } from '../store/videoStore';
import { colors, animations } from '../theme';
import * as haptics from '../utils/haptics';

const { width } = Dimensions.get('window');
const LINE_WIDTH = 4;
const LINE_SPACING = 8;
const TIMELINE_HEIGHT = 100;
const CENTER_LINE_HEIGHT = 60;
const NORMAL_LINE_HEIGHT = 40;
const FUTURE_LINE_HEIGHT = 30;

export default function TimelineScrubber() {
    const { videos, currentDate, setCurrentDate } = useVideoStore();
    const scrollX = useSharedValue(0);
    const [days, setDays] = useState<string[]>([]);

    useEffect(() => {
        // Generar array de días: 30 pasados, hoy, 30 futuros
        const today = new Date();
        const daysList: string[] = [];

        for (let i = -30; i <= 30; i++) {
            const date = new Date(today);
            date.setDate(date.getDate() + i);
            daysList.push(date.toISOString().split('T')[0]);
        }

        setDays(daysList);
    }, []);

    const todayIndex = days.findIndex(
        d => d === new Date().toISOString().split('T')[0]
    );

    const handleDayPress = async (date: string) => {
        await haptics.daySnap();
        setCurrentDate(currentDate === date ? null : date);
    };

    const gesture = Gesture.Pan()
        .onUpdate((event) => {
            scrollX.value = event.translationX;

            // Haptic feedback mientras desliza
            const speed = Math.abs(event.velocityX) / 1000;
            if (speed > 0.1) {
                runOnJS(haptics.timelineRip)(speed);
            }
        })
        .onEnd(() => {
            scrollX.value = withSpring(0, animations.spring.fluid);
        });

    const getLineHeight = (index: number) => {
        if (index === todayIndex) return CENTER_LINE_HEIGHT;
        if (index < todayIndex) return NORMAL_LINE_HEIGHT;
        return FUTURE_LINE_HEIGHT;
    };

    const getLineColor = (date: string, index: number) => {
        if (index === todayIndex) return colors.timeline.today;
        if (index < todayIndex) {
            const video = videos.find(v => v.date === date);
            return video?.dominantColor || colors.timeline.past;
        }
        return colors.timeline.future;
    };

    return (
        <View style={styles.container}>
            <GestureDetector gesture={gesture}>
                <View style={styles.timelineContainer}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.scrollContent}
                        scrollEnabled={false}
                    >
                        {days.map((date, index) => {
                            const height = getLineHeight(index);
                            const color = getLineColor(date, index);
                            const isSelected = currentDate === date;

                            return (
                                <Pressable
                                    key={date}
                                    onPress={() => handleDayPress(date)}
                                    style={styles.lineContainer}
                                >
                                    <Animated.View
                                        style={[
                                            styles.line,
                                            {
                                                height,
                                                backgroundColor: color,
                                                width: LINE_WIDTH,
                                                opacity: isSelected ? 1 : 0.8,
                                                shadowColor: color,
                                                shadowOffset: { width: 0, height: 0 },
                                                shadowOpacity: isSelected ? 0.8 : 0.4,
                                                shadowRadius: isSelected ? 8 : 4,
                                            },
                                        ]}
                                    />
                                </Pressable>
                            );
                        })}
                    </ScrollView>
                </View>
            </GestureDetector>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 40,
        left: 0,
        right: 0,
        height: TIMELINE_HEIGHT,
    },
    timelineContainer: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: width / 2,
        alignItems: 'flex-end',
        paddingBottom: 20,
    },
    lineContainer: {
        width: LINE_WIDTH + LINE_SPACING,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    line: {
        borderRadius: LINE_WIDTH / 2,
    },
});
