<script lang='ts'>
  import { ContextMenu as ContextMenuPrimitive } from 'bits-ui'

  import { cn, flyAndScale } from '$lib/utils.js'

  type $$Props = ContextMenuPrimitive.ContentProps

  let className: $$Props['class']
  export let transition: $$Props['transition'] = flyAndScale
  export let transitionConfig: $$Props['transitionConfig']
  export { className as class }
</script>

<ContextMenuPrimitive.Content
  class={cn(
    'bg-popover text-popover-foreground z-50 min-w-[8rem] rounded-md border p-1 shadow-md focus:outline-none',
    className,
  )}
  {transition}
  {transitionConfig}
  {...$$restProps}
  on:keydown
>
  <slot></slot>
</ContextMenuPrimitive.Content>
