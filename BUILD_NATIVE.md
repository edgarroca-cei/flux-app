# FLUX ⚡️ - Guía Completa de Build Nativo

FLUX es una app iOS nativa que requiere un **build nativo** para funcionar correctamente con todas sus características avanzadas.

## 🎯 ¿Por Qué Build Nativo?

Expo Go tiene limitaciones que impiden:
- ❌ Haptics personalizados avanzados
- ❌ Animaciones con Worklets (react-native-reanimated)
- ❌ Gestos táctiles complejos
- ❌ Shaders personalizados

**La versión completa de FLUX necesita compilación nativa.**

## 🚀 Opción 1: Build Local (Requiere Mac)

### Requisitos
- Mac con macOS 12+ y Xcode 14+
- iPhone conectado por USB
- Cuenta Apple ID (gratuita)

### Pasos

1. **Conecta tu iPhone** por USB

2. **Ejecuta el build**:
   ```bash
   npx expo run:ios --device
   ```

3. **Primera vez**: Xcode se abrirá automáticamente
   - Selecciona tu equipo de desarrollo (Apple ID)
   - Xcode configurará el signing automáticamente

4. **Confía en el certificado** en tu iPhone:
   - Ajustes → General → VPN y gestión de dispositivos
   - Toca tu Apple ID → Confiar

5. **Abre FLUX** y disfruta 🎉

### Troubleshooting

**"No devices found"**:
```bash
xcrun xctrace list devices
```

**"Build failed"**:
```bash
cd ios
pod install --repo-update
cd ..
npx expo run:ios --device
```

---

## 🌐 Opción 2: EAS Build (Sin Mac, Build en la Nube)

### Ventajas
- ✅ No necesitas Mac
- ✅ Build en servidores de Expo
- ✅ Descarga e instala en tu iPhone

### Pasos

1. **Instala EAS CLI**:
   ```bash
   npm install -g eas-cli
   ```

2. **Login**:
   ```bash
   eas login
   ```

3. **Configura el proyecto**:
   ```bash
   eas build:configure
   ```

4. **Crea el build de desarrollo**:
   ```bash
   eas build --platform ios --profile development
   ```

5. **Espera** (10-15 minutos)

6. **Descarga e instala**:
   - Recibirás un link por email
   - Abre en Safari en tu iPhone
   - Instala el perfil de desarrollo
   - Descarga e instala FLUX

---

## 📱 Características Completas (Solo Build Nativo)

### Grabación
- ✅ Presión táctil para grabar 5 segundos
- ✅ Animación de "inhalación" con bordes brillantes
- ✅ Onda de distorsión circular
- ✅ Haptic "pop" profundo al terminar

### Timeline Scrubber
- ✅ Líneas verticales brillantes (fibras ópticas)
- ✅ Gestos táctiles con pan gesture
- ✅ Haptic "vinyl scratch" al deslizar
- ✅ Física de resorte fluida
- ✅ Colores dinámicos de cada vídeo

### Reproducción
- ✅ Loop infinito suave
- ✅ Transiciones elásticas
- ✅ Sin controles (movimiento = interacción)

---

## 🎨 Arquitectura Técnica

```
FLUX (Build Nativo)
├── expo-camera → Grabación 5 segundos
├── expo-haptics → Patrones táctiles personalizados
├── expo-video → Reproducción en loop
├── react-native-reanimated → Animaciones con Worklets
├── react-native-gesture-handler → Gestos avanzados
├── @shopify/react-native-skia → Efectos visuales
└── Zustand + AsyncStorage → State + Persistencia
```

---

## ⚡️ Inicio Rápido

**¿Tienes Mac?**
```bash
npx expo run:ios --device
```

**¿No tienes Mac?**
```bash
npm install -g eas-cli
eas login
eas build --platform ios --profile development
```

---

## 📝 Notas Importantes

1. **Primera compilación**: Toma 5-10 minutos
2. **Hot reload**: Funciona después del primer build
3. **Actualizaciones**: Solo recompila si cambias dependencias nativas
4. **Expo Go**: NO soporta las características avanzadas de FLUX

---

**FLUX está diseñado para ser una experiencia sensorial completa. El build nativo es esencial para lograr la visión original.** ⚡️
