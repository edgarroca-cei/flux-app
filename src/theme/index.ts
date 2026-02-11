/**
 * Sistema de colores para FLUX
 * Basado en negro puro, luz brillante y colores dinámicos
 */

export const colors = {
    // Base
    black: '#000000',
    white: '#FFFFFF',

    // Luz y brillo
    glow: {
        white: '#FFFFFF',
        soft: 'rgba(255, 255, 255, 0.6)',
        subtle: 'rgba(255, 255, 255, 0.3)',
        faint: 'rgba(255, 255, 255, 0.1)',
    },

    // Estados
    recording: {
        active: '#FF3B30', // Rojo vibrante de iOS
        glow: 'rgba(255, 59, 48, 0.8)',
    },

    // Timeline
    timeline: {
        today: '#FFFFFF',
        past: 'rgba(255, 255, 255, 0.8)',
        future: 'rgba(255, 255, 255, 0.15)',
    },
};

/**
 * Configuraciones de animación estándar
 */
export const animations = {
    // Duraciones (en ms)
    duration: {
        instant: 150,
        fast: 250,
        normal: 400,
        slow: 600,
        recording: 5000, // 5 segundos de grabación
    },

    // Configuraciones de spring para react-native-reanimated
    spring: {
        // Elasticidad suave para transiciones generales
        soft: {
            damping: 20,
            stiffness: 90,
            mass: 1,
        },

        // Rebote más pronunciado para elementos interactivos
        bouncy: {
            damping: 15,
            stiffness: 100,
            mass: 0.8,
        },

        // Muy suave para el scrubber temporal
        fluid: {
            damping: 25,
            stiffness: 80,
            mass: 1.2,
        },
    },
};
