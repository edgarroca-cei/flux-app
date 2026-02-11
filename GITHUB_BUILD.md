# FLUX - Build con GitHub Actions (100% Gratis)

## 🎯 Ventajas

- ✅ **Completamente gratis**
- ✅ **No requiere Mac**
- ✅ **No requiere Apple Developer ($99)**
- ✅ **IPA sin firma** (perfecto para ESign)
- ✅ **Build en la nube de GitHub**

## 📝 Pasos para Obtener el IPA

### 1. Crear Repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre: `flux-app`
3. Privado o Público (tu elección)
4. Crea el repositorio

### 2. Subir el Código

Desde la terminal en el proyecto:

```bash
git init
git add .
git commit -m "Initial commit - FLUX app"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/flux-app.git
git push -u origin main
```

**Reemplaza `TU_USUARIO`** con tu usuario de GitHub.

### 3. Ejecutar el Build

1. Ve a tu repositorio en GitHub
2. Click en **Actions** (arriba)
3. Click en **Build iOS IPA** (izquierda)
4. Click en **Run workflow** (derecha)
5. Click en **Run workflow** (verde)

### 4. Esperar el Build

- Toma **10-15 minutos**
- Verás el progreso en tiempo real
- Se ejecuta en servidores de GitHub (gratis)

### 5. Descargar el IPA

1. Cuando termine (✅ verde)
2. Scroll abajo hasta **Artifacts**
3. Click en **FLUX-IPA**
4. Se descarga un ZIP con el IPA dentro

### 6. Firmar con ESign

1. Descomprime el ZIP
2. Sube el IPA a tu servicio ESign
3. Firma con tu certificado de 1 año
4. Instala en tu iPhone

## 🔧 Troubleshooting

**"Workflow not found"**:
- Asegúrate de subir la carpeta `.github/workflows/`
- Verifica que el archivo se llame `build-ios.yml`

**"Build failed"**:
- Revisa los logs en GitHub Actions
- Puede necesitar ajustes en el esquema de Xcode

**"No IPA generated"**:
- El build puede generar un `.app` en lugar de `.ipa`
- Usa herramientas online para convertir .app a .ipa

## 💡 Alternativa Rápida

Si GitHub Actions falla, puedo ayudarte a:
1. Configurar Codemagic (también gratis)
2. Usar Bitrise (plan gratuito)
3. Crear build local si consigues acceso a un Mac

---

**Esta es la forma más sencilla de obtener el IPA sin pagar nada.** 🚀
