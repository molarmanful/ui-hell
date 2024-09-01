<script lang='ts'>
  import type { HTMLLiAttributes } from 'svelte/elements'

  import { cn } from '$lib/utils.js'

  type $$Props = HTMLLiAttributes & {
    el?: HTMLLIElement
  }

  export let el: $$Props['el']
  let className: $$Props['class']
  export { className as class }
</script>

<li bind:this={el} class={cn('inline-flex items-center gap-1.5', className)}>
  <slot />
</li>
