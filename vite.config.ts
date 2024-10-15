import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_TEST_API_URL': JSON.stringify(env.REACT_APP_TEST_API_URL),
      'process.env.REACT_APP_JSON_SERVER_URL': JSON.stringify(env.REACT_APP_JSON_SERVER_URL),
      'process.env.REACT_APP_API_MODE': JSON.stringify(env.REACT_APP_API_MODE),
      'process.env.REACT_APP_DOCKER_API_URL': JSON.stringify(env.REACT_APP_DOCKER_API_URL)
    },
    plugins: [react()],
    server: {
      host: true,
      port: 5173
  },
  }
})