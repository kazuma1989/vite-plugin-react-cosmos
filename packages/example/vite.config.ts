import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import cosmos from "vite-plugin-react-cosmos"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === "catalog" && cosmos({ entryFileName: "index.html" }),
  ],
}))
