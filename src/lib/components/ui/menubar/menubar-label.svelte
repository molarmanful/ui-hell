<script lang='ts'>
  import { Menubar as MenubarPrimitive } from 'bits-ui'

  import { cn } from '$lib/utils.js'

  type $$Props = MenubarPrimitive.LabelProps & {
    inset?: boolean
  }

  let className: $$Props['class']
  export let inset: $$Props['inset']
  export { className as class }
</script>

<MenubarPrimitive.Label
  class={cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
  {...$$restProps}
>
  <slot></slot>
</MenubarPrimitive.Label>
