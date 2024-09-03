import extractorSvelte from '@unocss/extractor-svelte'
import {
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'

export default {
  presets: [
    presetUno(),
    presetAnimations(),
    presetShadcn(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Instrument Sans:400..700',
        mono: 'Fira Code',
      },
    }),
  ],
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'src/**/*.{js,ts}',
      ],
    },
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: ['dark'],
  theme: {},
  rules: [],
  shortcuts: [{
    'text-lead': 'text-muted-foreground text-xl',
    'text-large': 'text-lg font-semibold',
    'text-small': 'text-sm font-medium leading-none',
    'text-muted': 'text-muted-foreground text-sm',
    'link': 'text-primary font-semibold transition-colors underline-offset-4 hover:underline',
  }],
  extractors: [extractorSvelte],
}
