import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://pawpatrol-back-preprod-bvhubpaxgda3frfy.brazilsouth-01.azurewebsites.net",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
