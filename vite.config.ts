// import path from 'path';
// import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig(({ mode }) => {
//     const env = loadEnv(mode, '.', '');
//     return {
//       server: {
//         port: 3000,
//         host: '0.0.0.0',
//       },
//       plugins: [react()],
//       define: {
//         'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
//         'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
//       },
//       resolve: {
//         alias: {
//           '@': path.resolve(__dirname, '.'),
//         }
//       }
//     };
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // ← вот этот
import path from 'path';

export default defineConfig({
  plugins: [react()], // ← без .swc
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // css: {
  //   modules: {
  //     localsConvention: 'camelCaseOnly',
  //   },
  //   preprocessorOptions: {
  //     scss: {
  //       // additionalData: `@import "@/styles/globals.scss";\n`, // добавь \n в конец!
  //       api: 'modern',
  //     },
  //   },
  // },

  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "@/styles/variables.scss";\n`, // Только переменные — автоматически в каждый .module.scss
        api: 'modern',
      },
    },
  },
  base: '/',
  // server: {
  //   port: 5173,
  //   host: true,
  // },
});
