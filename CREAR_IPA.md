# FLUX - Guía para Crear IPA

## 📱 Cómo Obtener el Archivo IPA

Para instalar FLUX en tu iPhone sin Mac, necesitas crear un build con EAS (Expo Application Services).

### Paso 1: Crear Cuenta de Expo (Gratuita)

1. Ve a https://expo.dev/signup
2. Crea una cuenta (es gratis)
3. Verifica tu email

### Paso 2: Login en EAS

Abre la terminal en el proyecto y ejecuta:

```bash
eas login
```

Ingresa tu email y contraseña de Expo.

### Paso 3: Configurar el Proyecto

```bash
eas build:configure
```

Esto creará el archivo `eas.json` con la configuración del build.

### Paso 4: Crear el Build

```bash
eas build --platform ios --profile development
```

**Importante**: Selecciona las siguientes opciones cuando pregunte:
- ✅ Generate a new Apple Provisioning Profile
- ✅ Log in to your Apple account (usa tu Apple ID)

### Paso 5: Esperar el Build

- El build se hace en la nube (10-15 minutos)
- Recibirás un link por email cuando termine
- También puedes ver el progreso en https://expo.dev

### Paso 6: Instalar en tu iPhone

1. **Abre el link** del build en Safari en tu iPhone
2. **Instala el perfil de desarrollo**:
   - Ajustes → General → VPN y gestión de dispositivos
   - Toca el perfil de desarrollo
   - Instalar
3. **Descarga e instala FLUX**
4. **Confía en el certificado**:
   - Ajustes → General → VPN y gestión de dispositivos
   - Toca tu Apple ID
   - Confiar

## 🔐 Requisitos

- Cuenta de Expo (gratuita)
- Apple ID (gratuita)
- iPhone con iOS 13+

## ⚡️ Comandos Rápidos

```bash
# 1. Login
eas login

# 2. Configurar
eas build:configure

# 3. Crear build
eas build --platform ios --profile development

# 4. Ver builds
eas build:list
```

## 📝 Notas

- **Primera vez**: Toma ~15 minutos
- **Siguientes builds**: ~10 minutos
- **Válido por**: 7 días (después necesitas rebuild)
- **Costo**: Gratis para builds de desarrollo

## 🆘 Troubleshooting

**"Apple ID required"**:
- Necesitas un Apple ID (gratuito)
- Crea uno en https://appleid.apple.com

**"Build failed"**:
- Revisa los logs en https://expo.dev
- Asegúrate de tener todas las dependencias instaladas

**"Can't install on iPhone"**:
- Ve a Ajustes → General → VPN y gestión de dispositivos
- Confía en el perfil de desarrollo

---

**Una vez que tengas el IPA, podrás instalarlo directamente en tu iPhone y disfrutar de FLUX con todas sus características.** ⚡️
