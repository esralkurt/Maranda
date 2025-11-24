import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub repository adınız 'Maranda' olduğu için base path'i bu şekilde ayarlıyoruz.
  // Bu sayede CSS ve JS dosyaları doğru adresten yüklenir.
  base: '/Maranda/',
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
});
