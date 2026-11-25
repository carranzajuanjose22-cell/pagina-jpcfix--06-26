import { defineConfig, type Plugin } from 'vite'
import path from 'node:path'
import fs from 'node:fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function figmaAssetResolver(): Plugin {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        return path.resolve(__dirname, 'src/assets', id.replace('figma:asset/', ''))
      }
    },
  }
}

// Preserve every original in public/, but publish only reviewed brand and project images.
// In particular, unused captures containing operational amounts or staff names stay out of dist/.
function reviewedPublicAssets(): Plugin {
  const approvedImages = new Set([
    'jpcfix-oficial-web.png', 'jpcfix-social.png', 'club22-mesas.png',
    'club22-transparent-web.png', 'rebueno-transparent-web.png',
    'parrilla-sergio-andres-transparent-web.png', 'yofre-transparent-web.png',
    'libreria-kolores-transparent-web.png', 'instituto-mixto-secundario-web.png',
  ])
  return {
    name: 'reviewed-public-assets',
    apply: 'build',
    generateBundle() {
      const directory = path.resolve(__dirname, 'public')
      const walk = (folder: string) => {
        for (const entry of fs.readdirSync(folder, { withFileTypes: true })) {
          const absolute = path.join(folder, entry.name)
          if (entry.isDirectory()) { walk(absolute); continue }
          const relative = path.relative(directory, absolute).split(path.sep).join('/')
          if (relative.startsWith('images/') && !approvedImages.has(entry.name)) continue
          this.emitFile({ type: 'asset', fileName: relative, source: fs.readFileSync(absolute) })
        }
      }
      walk(directory)
    },
  }
}

export default defineConfig({
  publicDir: 'public',
  build: { copyPublicDir: false },
  plugins: [figmaAssetResolver(), react(), tailwindcss(), reviewedPublicAssets()],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
