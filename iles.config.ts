import { defineConfig } from 'iles'
import Unocss from 'unocss/vite'
import presetAttributify from '@unocss/preset-attributify'
import presetWebfonts from '@unocss/preset-web-fonts'
import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';
 

export default defineConfig({
    vite: {
        plugins: [
            Unocss({
                presets:[
                    presetUno(),
                    presetIcons(),
                    presetAttributify(),
                    presetWebfonts({
                    provider: 'fontshare',
                    fonts: {
                        sans: 'Roboto',
                        serif: 'Stardom',
                    }
                    }),
                ]
            }),
          ],
    }
})
