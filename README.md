# FLUX ⚡️

> "El tiempo es líquido. Captura una gota."

FLUX es una app de diario de vídeo para iPhone que convierte la tarea mundana de documentar tu vida en una experiencia sensorial hipnótica. Graba 5 segundos de tu día y navega por tu historia a través de un timeline táctil que se siente increíblemente bien.

## ✨ Características

### Grabación de 5 Segundos
- Mantén pulsada la pantalla para grabar
- Animación de "inhalación" con bordes brillantes
- Onda de distorsión que se cierra hacia el centro
- Feedback háptico satisfactorio al terminar ("pop")

### Timeline Scrubber Hipnótico
- Líneas verticales brillantes tipo fibras ópticas
- Cada día tiene el color promedio de su vídeo
- Vibración tipo "vinyl scratch" al deslizar
- Física de resorte para transiciones orgánicas

### Reproducción Fluida
- Loop infinito de vídeos pasados
- Transiciones suaves con elasticidad
- Sin controles - el movimiento es la interacción

## 🚀 Instalación

### Requisitos
- Node.js 18+
- Expo CLI
- iOS device o simulador (iPhone 12+ recomendado)

### Setup
\`\`\`bash
# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm start

# Escanear el código QR con Expo Go
# O presionar 'i' para abrir en simulador iOS
\`\`\`

## 📱 Probar en tu iPhone

1. Descarga **Expo Go** desde la App Store
2. Ejecuta `npm start` en tu computadora
3. Escanea el código QR con la cámara de tu iPhone
4. La app se abrirá en Expo Go

**Nota**: Los haptics avanzados requieren un build nativo. Para la mejor experiencia:

\`\`\`bash
# Crear un build de desarrollo
npx expo run:ios
\`\`\`

## 🎨 Estética: iOS 26 (Futurismo Orgánico)

- **Materiales**: Vidrio inteligente y luz atrapada
- **Iluminación Reactiva**: La luz "resbala" con el giroscopio
- **Haptic-First**: La vibración es la guía principal
- **Negro Puro**: Fondo #000000 para máximo contraste

## 🛠 Tecnologías

- **React Native** con Expo
- **expo-camera** - Grabación de vídeo
- **expo-haptics** - Feedback táctil personalizado
- **react-native-reanimated** - Animaciones fluidas
- **react-native-gesture-handler** - Gestos táctiles
- **@shopify/react-native-skia** - Efectos visuales líquidos
- **Zustand** - State management
- **AsyncStorage** - Persistencia local

## 📂 Estructura del Proyecto

\`\`\`
app1/
├── src/
│   ├── components/
│   │   ├── RecordingOverlay.tsx    # Overlay de grabación con efectos
│   │   └── TimelineScrubber.tsx    # Timeline táctil
│   ├── screens/
│   │   └── MainScreen.tsx          # Pantalla principal
│   ├── store/
│   │   └── videoStore.ts           # Store de vídeos (Zustand)
│   ├── theme/
│   │   └── index.ts                # Colores y animaciones
│   └── utils/
│       ├── haptics.ts              # Patrones hápticos
│       └── colorExtractor.ts       # Extracción de color
├── App.tsx                         # Componente raíz
└── app.json                        # Configuración de Expo
\`\`\`

## 🎯 Próximos Pasos

- [ ] Implementar shaders GLSL para efectos líquidos avanzados
- [ ] Añadir reacción al giroscopio (luz que "resbala")
- [ ] Mejorar extracción de color (analizar frames reales)
- [ ] Añadir "túnel de motion blur" al deslizar rápido
- [ ] Sincronización con iCloud
- [ ] Exportar vídeos compilados

## 💡 Filosofía de Diseño

FLUX no es solo una app de diario - es un **juguete sensorial**. La gente entrará no solo para ver sus recuerdos, sino simplemente para jugar con la timeline porque se siente increíblemente bien al tacto y a la vista.

**Es funcional, pero ante todo, es una experiencia.**

---

Creado con ⚡️ para iOS 26 (en nuestra imaginación)
