<script lang='ts'>
  import Ellipsis from 'lucide-svelte/icons/ellipsis'
  import type { HTMLAttributes } from 'svelte/elements'

  import { cn } from '$lib/utils.js'

  type $$Props = HTMLAttributes<HTMLSpanElement>

  let className: $$Props['class']
  export { className as class }
</script>

<span
  class={cn('flex h-9 w-9 items-center justify-center', className)}
  aria-hidden
  {...$$restProps}
>
  <Ellipsis class='h-4 w-4'></Ellipsis>
  <span class='sr-only'>More pages</span>
</span>
