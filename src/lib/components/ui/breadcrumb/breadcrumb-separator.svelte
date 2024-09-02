<script lang='ts'>
  import ChevronRight from 'lucide-svelte/icons/chevron-right'
  import type { HTMLLiAttributes } from 'svelte/elements'

  import { cn } from '$lib/utils.js'

  type $$Props = HTMLLiAttributes & {
    el?: HTMLLIElement
  }

  export let el: $$Props['el']
  let className: $$Props['class']
  export { className as class }
</script>

<li
  bind:this={el}
  class={cn('[&>svg]:size-3.5', className)}
  aria-hidden='true'
  role='presentation'
  {...$$restProps}
>
  <slot>
    <ChevronRight />
  </slot>
</li>
