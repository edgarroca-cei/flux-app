import * as ImageManipulator from 'expo-image-manipulator';
import { Video } from 'expo-av';

/**
 * Extrae el color dominante de un vídeo
 * Analiza el primer frame y calcula el color promedio
 */
export async function extractDominantColor(videoUri: string): Promise<string> {
    try {
        // Por ahora retornamos un color por defecto
        // En una implementación completa, necesitaríamos:
        // 1. Extraer un frame del vídeo
        // 2. Redimensionarlo a algo pequeño (ej: 1x1 pixel)
        // 3. Obtener el color de ese pixel

        // Placeholder: retorna un color basado en el hash del URI
        const hash = videoUri.split('').reduce((acc, char) => {
            return char.charCodeAt(0) + ((acc << 5) - acc);
        }, 0);

        const hue = Math.abs(hash % 360);
        const saturation = 60 + (Math.abs(hash) % 20); // 60-80%
        const lightness = 50 + (Math.abs(hash >> 8) % 20); // 50-70%

        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    } catch (error) {
        console.error('Error extracting color:', error);
        return '#FFFFFF'; // Fallback a blanco
    }
}

/**
 * Convierte HSL a formato hexadecimal
 */
export function hslToHex(h: number, s: number, l: number): string {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n: number) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}
