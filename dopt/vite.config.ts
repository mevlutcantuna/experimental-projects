import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");

const HTTPS = process.env.HTTPS === "true";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true
    })
  ],
  server: {
    open: true,
    host: "localhost",
    port: 3000,
    ...(HTTPS
      ? {
          https: {
            key: "./key.pem",
            cert: "./cert.pem"
          }
        }
      : {})
  }
});
