<script lang='ts'>
  import type { HTMLAttributes } from 'svelte/elements'

  import { getEmblaContext } from './context.js'

  import { cn } from '$lib/utils.js'

  type $$Props = HTMLAttributes<HTMLDivElement>
  let className: string | undefined | null
  export { className as class }

  const { orientation } = getEmblaContext('<Carousel.Item/>')
</script>

<div
  class={cn(
    'min-w-0 shrink-0 grow-0 basis-full',
    $orientation === 'horizontal' ? 'pl-4' : 'pt-4',
    className,
  )}
  aria-roledescription='slide'
  data-embla-slide=""
  role='group'
  {...$$restProps}
>
  <slot></slot>
</div>
