// export default {
//   optimizeDeps: {
//     exclude: ['framer-motion'],
//   },
//   build: {
//     commonjsOptions: {
//       include: [/framer-motion/, /node_modules/],
//     },
//   },
// };

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true
  }
});
