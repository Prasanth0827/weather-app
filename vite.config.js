// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace `your-username` and `repo-name` accordingly
export default defineConfig({
  base: "/your-repo-name/",
  plugins: [react()]
});
