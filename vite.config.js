import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/sixemojistory/",
  base: "emoji.divya-mehra.com/",
  plugins: [react()],
})
