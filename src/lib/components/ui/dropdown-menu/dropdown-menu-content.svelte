<script lang='ts'>
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui'

  import { cn, flyAndScale } from '$lib/utils.js'

  type $$Props = DropdownMenuPrimitive.ContentProps
  type $$Events = DropdownMenuPrimitive.ContentEvents

  let className: $$Props['class']
  export let sideOffset: $$Props['sideOffset'] = 4
  export let transition: $$Props['transition'] = flyAndScale
  export let transitionConfig: $$Props['transitionConfig']
  export { className as class }
</script>

<DropdownMenuPrimitive.Content
  class={cn(
    'bg-popover text-popover-foreground z-50 min-w-[8rem] rounded-md border p-1 shadow-md focus:outline-none',
    className,
  )}
  {sideOffset}
  {transition}
  {transitionConfig}
  {...$$restProps}
  on:keydown
>
  <slot></slot>
</DropdownMenuPrimitive.Content>
