<script lang='ts'>
  import { Menubar as MenubarPrimitive } from 'bits-ui'

  import { cn, flyAndScale } from '$lib/utils.js'

  type $$Props = MenubarPrimitive.SubContentProps
  type $$Events = MenubarPrimitive.SubContentEvents

  let className: $$Props['class']
  export let transition: $$Props['transition'] = flyAndScale
  export let transitionConfig: $$Props['transitionConfig'] = { x: -10, y: 0 }
  export { className as class }
</script>

<MenubarPrimitive.SubContent
  class={cn(
    'bg-popover text-popover-foreground z-50 min-w-max rounded-md border p-1 focus:outline-none',
    className,
  )}
  {transition}
  {transitionConfig}
  {...$$restProps}
  on:focusout
  on:pointermove
  on:keydown
>
  <slot></slot>
</MenubarPrimitive.SubContent>
