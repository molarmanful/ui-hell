<script lang='ts'>
  import emblaCarouselSvelte from 'embla-carousel-svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  import { getEmblaContext } from './context.js'

  import { cn } from '$lib/utils.js'

  type $$Props = HTMLAttributes<HTMLDivElement>

  let className: string | undefined | null
  export { className as class }

  const { orientation, options, plugins, onInit } = getEmblaContext('<Carousel.Content/>')
</script>

<div
  class='overflow-hidden'
  on:emblaInit={onInit}
  use:emblaCarouselSvelte={{
    options: {
      container: '[data-embla-container]',
      slides: '[data-embla-slide]',
      ...$options,
      axis: $orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins: $plugins,
  }}
>
  <div
    class={cn('flex', $orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', className)}
    data-embla-container=""
    {...$$restProps}
  >
    <slot></slot>
  </div>
</div>
