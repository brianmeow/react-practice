import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_WEATHER_API_KEY': JSON.stringify(env.REACT_APP_WEATHER_API_KEY),
      'process.env.WEATHER_END_POINT': JSON.stringify(env.WEATHER_END_POINT),

    },
    plugins: [react()],
  }
})