<script lang='ts'>
  import ArrowLeft from 'lucide-svelte/icons/arrow-left'
  import type { VariantProps } from 'tailwind-variants'

  import { getEmblaContext } from './context.js'

  import {
    Button,
    type Props,
    type buttonVariants,
  } from '$lib/components/ui/button/index.js'
  import { cn } from '$lib/utils.js'

  type $$Props = Props

  let className: $$Props['class']
  export { className as class }
  export let variant: VariantProps<typeof buttonVariants>['variant'] = 'outline'
  export let size: VariantProps<typeof buttonVariants>['size'] = 'icon'

  const { orientation, canScrollPrev, scrollPrev, handleKeyDown }
    = getEmblaContext('<Carousel.Previous/>')
</script>

<Button
  class={cn(
    'absolute h-8 w-8 touch-manipulation rounded-full',
    $orientation === 'horizontal'
      ? '-left-12 top-1/2 -translate-y-1/2'
      : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
    className,
  )}
  disabled={!$canScrollPrev}
  {size}
  {variant}
  on:click={scrollPrev}
  on:keydown={handleKeyDown}
  {...$$restProps}
>
  <ArrowLeft class='h-4 w-4' />
  <span class='sr-only'>Previous slide</span>
</Button>
