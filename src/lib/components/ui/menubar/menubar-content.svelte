<script lang='ts'>
  import { Menubar as MenubarPrimitive } from 'bits-ui'

  import { cn, flyAndScale } from '$lib/utils.js'

  type $$Props = MenubarPrimitive.ContentProps
  type $$Events = MenubarPrimitive.ContentEvents

  let className: $$Props['class']
  export let sideOffset: $$Props['sideOffset'] = 8
  export let alignOffset: $$Props['alignOffset'] = -4
  export let align: $$Props['align'] = 'start'
  export let side: $$Props['side'] = 'bottom'
  export let transition: $$Props['transition'] = flyAndScale
  export let transitionConfig: $$Props['transitionConfig']
  export { className as class }
</script>

<MenubarPrimitive.Content
  class={cn(
    'bg-popover text-popover-foreground z-50 min-w-[12rem] rounded-md border p-1 shadow-md focus:outline-none',
    className,
  )}
  {align}
  {alignOffset}
  {side}
  {sideOffset}
  {transition}
  {transitionConfig}
  {...$$restProps}
  on:keydown
>
  <slot></slot>
</MenubarPrimitive.Content>
