<script lang='ts'>
  import { Tooltip as TooltipPrimitive } from 'bits-ui'
  import type { Snippet } from 'svelte'

  import { cn, flyAndScale } from '$lib/utils.js'

  interface Props extends TooltipPrimitive.ContentProps {
    children: Snippet
  }

  const {
    class: className = '',
    sideOffset = 4,
    transition = flyAndScale,
    transitionConfig = { y: 8, duration: 150 },
    children,
    ...rest
  }: Props = $props()
</script>

<TooltipPrimitive.Content
  class={cn(
    'bg-popover text-popover-foreground z-50 overflow-hidden rounded-md border px-3 py-1.5 text-sm shadow-md',
    className,
  )}
  {sideOffset}
  {transition}
  {transitionConfig}
  {...rest}
>
  {@render children()}
</TooltipPrimitive.Content>
