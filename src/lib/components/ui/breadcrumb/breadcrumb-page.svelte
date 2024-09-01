<script lang='ts'>
  import type { HTMLAttributes } from 'svelte/elements'

  import { cn } from '$lib/utils.js'

  type $$Props = HTMLAttributes<HTMLSpanElement> & {
    el?: HTMLSpanElement
  }

  export let el: $$Props['el']
  export let className: $$Props['class']
  export { className as class }
</script>

<span
  bind:this={el}
  class={cn('text-foreground font-normal', className)}
  aria-current='page'
  aria-disabled='true'
  role='link'
  {...$$restProps}
>
  <slot></slot>
</span>
