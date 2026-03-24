
# Página web oficial apartamento La Bahía

<img align="center" alt="Coder GIF" src="https://3.bp.blogspot.com/-KFp7rH842JI/VjVXcMssLdI/AAAAAAAAHdI/FeW3YKzQVdc/s800/P9080010.JPG" width="1000px" height="600px"/>

Desplegado por vercel en:
[https://labahiameira.com/](https://www.labahiameira.com/)

## Instalar dependencias
```
npm install
```

### Compila y ejecuta el proyecto
```
npm run dev
```

## API de disponibilidad (Google Sheets)

Se añadió un backend en `server/` para exponer disponibilidad del apartamento leyendo una hoja de Google Sheets:

`GET /api/availability?apartmentId=la-bahia-moana`

### 1) Variables de entorno

Crea un archivo `.env` en la raíz basado en `.env.example`:

```bash
GOOGLE_SHEET_URL=https://docs.google.com/spreadsheets/d/16DI_nQesreGFT_w8dqHMOBNqAzV0cj_aTuG15VUPSB8/edit?usp=sharing
GOOGLE_SHEET_GID=0
DEFAULT_APARTMENT_ID=la-bahia-moana
PORT=3001
VITE_API_URL=http://localhost:3001
VITE_APARTMENT_ID=la-bahia-moana
```

### 2) Formato de columnas en la hoja

La API toma el Sheet como lista de dias reservados (todo lo demas queda disponible).

Combinaciones detectadas:

1. `apartamento`, `fecha`
2. `apartamento`, `fecha`, `disponible`
3. `apartamento`, `fecha_inicio`, `fecha_fin`
4. `apartamento`, `fecha_inicio`, `fecha_fin`, `disponible`

Notas:
- `apartamento` es opcional (si existe, filtra por `apartmentId`).
- Si `disponible` no existe, cada fila se considera reservada.
- Si `disponible` existe:
  - `si`, `true`, `1`, `libre`, `disponible` => no bloquea el dia.
  - `no`, `false`, `0`, `ocupado`, `reservado`, `bloqueado` => marca reservado.
- Formatos de fecha soportados: `YYYY-MM-DD`, `DD/MM/YYYY`, `DD-MM-YYYY`.

### 3) Arranque

Backend + Frontend (recomendado, un solo comando):
```bash
npm run dev:full
```

Backend:
```bash
npm run dev:server
```

Frontend:
```bash
npm run dev
```
