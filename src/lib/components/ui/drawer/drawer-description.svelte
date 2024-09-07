<script lang='ts'>
  import type { Snippet } from 'svelte'
  import { Drawer as DrawerPrimitive } from 'vaul-svelte'

  import { cn } from '$lib/utils.js'

  interface Props extends DrawerPrimitive.DescriptionProps {
    children: Snippet
  }

  let { class: className = '', el = $bindable(), children, ...rest }: Props = $props()
</script>

<DrawerPrimitive.Description
  class={cn('text-muted-foreground text-sm', className)}
  bind:el
  {...rest}
>
  {@render children()}
</DrawerPrimitive.Description>
