import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface VideoEntry {
    id: string;
    date: string; // YYYY-MM-DD format
    uri: string;
    thumbnailUri?: string;
    dominantColor: string; // Color promedio para la timeline
    duration: number;
    createdAt: number;
}

interface VideoStore {
    videos: VideoEntry[];
    currentDate: string | null;
    isLoading: boolean;

    // Actions
    loadVideos: () => Promise<void>;
    saveVideo: (video: Omit<VideoEntry, 'id' | 'createdAt'>) => Promise<void>;
    getVideoByDate: (date: string) => VideoEntry | undefined;
    setCurrentDate: (date: string | null) => void;
    deleteVideo: (id: string) => Promise<void>;
}

const STORAGE_KEY = '@flux_videos';

export const useVideoStore = create<VideoStore>((set, get) => ({
    videos: [],
    currentDate: null,
    isLoading: false,

    loadVideos: async () => {
        set({ isLoading: true });
        try {
            const stored = await AsyncStorage.getItem(STORAGE_KEY);
            if (stored) {
                const videos = JSON.parse(stored) as VideoEntry[];
                set({ videos, isLoading: false });
            } else {
                set({ isLoading: false });
            }
        } catch (error) {
            console.error('Error loading videos:', error);
            set({ isLoading: false });
        }
    },

    saveVideo: async (video) => {
        const newVideo: VideoEntry = {
            ...video,
            id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            createdAt: Date.now(),
        };

        const videos = [...get().videos, newVideo];

        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(videos));
            set({ videos });
        } catch (error) {
            console.error('Error saving video:', error);
            throw error;
        }
    },

    getVideoByDate: (date: string) => {
        return get().videos.find(v => v.date === date);
    },

    setCurrentDate: (date) => {
        set({ currentDate: date });
    },

    deleteVideo: async (id: string) => {
        const videos = get().videos.filter(v => v.id !== id);

        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(videos));
            set({ videos });
        } catch (error) {
            console.error('Error deleting video:', error);
            throw error;
        }
    },
}));
