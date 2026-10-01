import { defineConfig } from 'vite'

// One bundle on purpose: splitting the content modules into their own chunk created a circular chunk import that
// broke the production build at start-up ("Cannot access … before initialization"). gzip size stays ~300 KB.
export default defineConfig({
    build: {
        chunkSizeWarningLimit: 1500
    }
})
