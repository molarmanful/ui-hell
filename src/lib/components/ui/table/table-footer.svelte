<script lang='ts'>
  import type { HTMLAttributes } from 'svelte/elements'

  import { cn } from '$lib/utils.js'

  type $$Props = HTMLAttributes<HTMLTableSectionElement>

  let className: $$Props['class']
  export { className as class }
</script>

<tfoot class={cn('bg-primary text-primary-foreground font-medium', className)} {...$$restProps}>
  <slot />
</tfoot>
