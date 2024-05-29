import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

module.exports = {
  plugins: [
    {
      name: '@vite-plugins/react',
      configure: ({ redirect }) => {
        redirect.setup({
          to: 'index.html',
        })
      },
    },
  ],
}
