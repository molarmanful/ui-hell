<script lang='ts'>
  import { Drawer as DrawerPrimitive } from 'vaul-svelte'

  import { cn } from '$lib/utils.js'

  type $$Props = DrawerPrimitive.DescriptionProps

  export let el: $$Props['el']
  let className: $$Props['class']
  export { className as class }
</script>

<DrawerPrimitive.Description
  class={cn('text-muted-foreground text-sm', className)}
  bind:el
  {...$$restProps}
>
  <slot />
</DrawerPrimitive.Description>
