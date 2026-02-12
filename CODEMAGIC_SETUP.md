# FLUX - Setup con Codemagic (Más Fácil)

## 🎯 Por Qué Codemagic es Mejor

**GitHub Actions:**
- ❌ Requiere configuración compleja de Xcode
- ❌ Problemas con paths y schemes
- ❌ No está optimizado para React Native

**Codemagic:**
- ✅ Diseñado específicamente para apps móviles
- ✅ Soporte nativo para Expo
- ✅ Configuración más simple
- ✅ Plan gratuito: 500 min/mes

## 📝 Pasos para Configurar

### 1. Crear Cuenta en Codemagic

1. Ve a https://codemagic.io/signup
2. **Sign up with GitHub**
3. Autoriza el acceso a tus repositorios

### 2. Conectar el Repositorio

1. En Codemagic, click en **"Add application"**
2. Selecciona **GitHub**
3. Busca y selecciona **flux-app**
4. Click en **"Finish: Add application"**

### 3. Configurar el Build

1. Codemagic detectará automáticamente `codemagic.yaml`
2. Click en **"Start new build"**
3. Selecciona la rama **main**
4. Click en **"Start new build"**

### 4. Esperar el Build

- Toma **10-15 minutos**
- Verás el progreso en tiempo real
- Más estable que GitHub Actions

### 5. Descargar el IPA

1. Cuando termine (✅ verde)
2. Click en **"Artifacts"**
3. Descarga **FLUX.ipa**
4. Firma con ESign
5. Instala en tu iPhone

## 🔥 Ventajas sobre GitHub Actions

| Aspecto | GitHub Actions | Codemagic |
|---------|----------------|-----------|
| Setup | Complejo | Simple |
| Expo support | Manual | Nativo |
| Debugging | Difícil | Fácil |
| Estabilidad | Media | Alta |
| Plan gratis | 2000 min | 500 min |

## 💡 Troubleshooting

**"Build failed"**:
- Revisa los logs en Codemagic
- Más claros que GitHub Actions

**"No artifacts"**:
- El IPA se genera en `ios/build/FLUX.ipa`
- Descarga desde la sección Artifacts

## 🚀 Próximos Pasos

1. Crea cuenta en Codemagic
2. Conecta el repo
3. Inicia el build
4. Descarga el IPA

**Es mucho más simple que GitHub Actions.** 🎯
