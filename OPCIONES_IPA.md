# FLUX - Opciones para Obtener IPA con Firma Externa

## 🎯 Situación Actual

Tienes un servicio de firma externa (ESign) válido por 1 año, pero EAS Build requiere Apple ID incluso para builds internos.

## ✅ Soluciones Disponibles

### Opción 1: Proporcionar Apple ID Temporal (Recomendado)

**Ventaja**: Más rápido y automático
**Proceso**:
1. Proporciona tu Apple ID (gratuito, no necesitas cuenta Developer de $99)
2. EAS genera el IPA firmado temporalmente
3. Descargas el IPA
4. Lo re-firmas con tu servicio ESign para extender la validez a 1 año

**Comando**:
```bash
eas build --platform ios --profile preview
```

---

### Opción 2: Build Local con Expo (Requiere Mac)

Si tienes acceso a un Mac (tuyo o de un amigo):

```bash
npx expo run:ios --configuration Release
```

Esto genera el IPA en:
```
ios/build/Build/Products/Release-iphoneos/flux.app
```

Luego conviertes .app a .ipa manualmente o con herramientas.

---

### Opción 3: Usar Servicio de Build Alternativo

Servicios como **Codemagic** o **Bitrise** permiten builds sin Apple ID:
- Codemagic: https://codemagic.io
- Bitrise: https://www.bitrise.io

Ambos tienen planes gratuitos y pueden generar IPAs sin firma.

---

### Opción 4: GitHub Actions (Gratis, Sin Mac)

Configurar GitHub Actions para compilar automáticamente:

1. Sube el proyecto a GitHub
2. Configura workflow de GitHub Actions
3. El build se hace en la nube de GitHub (gratis)
4. Descarga el IPA resultante

**Ventaja**: 100% gratis, sin límites
**Desventaja**: Requiere configuración inicial

---

## 🚀 Recomendación

**La opción más rápida es usar tu Apple ID con EAS:**

1. El Apple ID es gratuito (no pagas nada)
2. EAS genera el IPA en 10-15 minutos
3. Descargas el IPA
4. Lo re-firmas con ESign para 1 año de validez

**Tu Apple ID solo se usa para generar el certificado temporal**, luego ESign lo reemplaza con tu certificado de 1 año.

---

## 📝 Decisión

¿Qué opción prefieres?

**A)** Usar Apple ID con EAS (rápido, 15 min)
**B)** Configurar GitHub Actions (gratis, requiere setup)
**C)** Usar servicio alternativo (Codemagic/Bitrise)

Dime cuál prefieres y continúo con esa opción.
