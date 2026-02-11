import * as Haptics from 'expo-haptics';

/**
 * Sistema de feedback háptico personalizado para FLUX
 * Cada patrón está diseñado para crear una experiencia sensorial única
 */

/**
 * Vibración suave al iniciar la grabación
 */
export const recordingStart = async () => {
  await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
};

/**
 * "Pop" profundo y resonante al terminar la grabación de 5 segundos
 * Este es el momento más satisfactorio de la app
 */
export const recordingPop = async () => {
  // Secuencia de dos impactos para crear el efecto "pop"
  await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  setTimeout(async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  }, 50);
};

/**
 * Vibración tipo "vinyl scratch" al deslizar por la timeline
 * La intensidad varía según la velocidad del deslizamiento
 * @param speed - Velocidad del deslizamiento (0-1)
 */
export const timelineRip = async (speed: number = 0.5) => {
  // Más rápido = vibración más intensa
  const style = speed > 0.7 
    ? Haptics.ImpactFeedbackStyle.Heavy
    : speed > 0.4
    ? Haptics.ImpactFeedbackStyle.Medium
    : Haptics.ImpactFeedbackStyle.Light;
  
  await Haptics.impactAsync(style);
};

/**
 * Feedback preciso al soltar en un día específico
 */
export const daySnap = async () => {
  await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
};

/**
 * Notificación suave para estados de error o límites
 */
export const notificationWarning = async () => {
  await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
};

/**
 * Notificación de éxito
 */
export const notificationSuccess = async () => {
  await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
};
