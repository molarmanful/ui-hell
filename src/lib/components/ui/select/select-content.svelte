<script lang='ts'>
  import { Select as SelectPrimitive } from 'bits-ui'
  import { scale } from 'svelte/transition'

  import { cn, flyAndScale } from '$lib/utils.js'

  type $$Props = SelectPrimitive.ContentProps
  type $$Events = SelectPrimitive.ContentEvents

  export let sideOffset: $$Props['sideOffset'] = 4
  export let inTransition: $$Props['inTransition'] = flyAndScale
  export let inTransitionConfig: $$Props['inTransitionConfig']
  export let outTransition: $$Props['outTransition'] = scale
  export let outTransitionConfig: $$Props['outTransitionConfig'] = {
    start: 0.95,
    opacity: 0,
    duration: 50,
  }

  let className: $$Props['class']
  export { className as class }
</script>

<SelectPrimitive.Content
  class={cn(
    'bg-popover text-popover-foreground relative z-50 min-w-[8rem] overflow-hidden rounded-md border shadow-md outline-none',
    className,
  )}
  {inTransition}
  {inTransitionConfig}
  {outTransition}
  {outTransitionConfig}
  {sideOffset}
  {...$$restProps}
  on:keydown
>
  <div class='w-full p-1'>
    <slot></slot>
  </div>
</SelectPrimitive.Content>
