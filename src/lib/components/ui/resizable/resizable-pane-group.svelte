<script lang='ts'>
  import * as ResizablePrimitive from 'paneforge'

  import { cn } from '$lib/utils.js'

  type $$Props = ResizablePrimitive.PaneGroupProps

  let className: $$Props['class']
  export let direction: $$Props['direction']
  export let paneGroup: $$Props['paneGroup']
  export let el: $$Props['el']
  export { className as class }
</script>

<ResizablePrimitive.PaneGroup
  class={cn('flex h-full w-full data-[direction=vertical]:flex-col', className)}
  {direction}
  bind:el
  bind:paneGroup
  {...$$restProps}
>
  <slot></slot>
</ResizablePrimitive.PaneGroup>
