<script lang='ts'>
  import { Popover as PopoverPrimitive } from 'bits-ui'

  import { cn, flyAndScale } from '$lib/utils.js'

  type $$Props = PopoverPrimitive.ContentProps
  let className: $$Props['class']
  export let transition: $$Props['transition'] = flyAndScale
  export let transitionConfig: $$Props['transitionConfig']
  export { className as class }
</script>

<PopoverPrimitive.Content
  class={cn(
    'bg-popover text-popover-foreground z-50 w-72 rounded-md border p-4 shadow-md outline-none',
    className,
  )}
  {transition}
  {transitionConfig}
  {...$$restProps}
>
  <slot />
</PopoverPrimitive.Content>
