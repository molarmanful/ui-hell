<script lang='ts'>
  import Ellipsis from 'lucide-svelte/icons/ellipsis'
  import type { HTMLAttributes } from 'svelte/elements'

  import { cn } from '$lib/utils.js'

  type $$Props = HTMLAttributes<HTMLSpanElement> & {
    el?: HTMLSpanElement
  }

  export let el: $$Props['el']
  let className: $$Props['class']
  export { className as class }
</script>

<span
  bind:this={el}
  class={cn('flex h-9 w-9 items-center justify-center', className)}
  aria-hidden='true'
  role='presentation'
  {...$$restProps}
>
  <Ellipsis class='h-4 w-4'></Ellipsis>
  <span class='sr-only'>More</span>
</span>
