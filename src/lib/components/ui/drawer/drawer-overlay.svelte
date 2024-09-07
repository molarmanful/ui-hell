<script lang='ts'>
  import type { Snippet } from 'svelte'
  import { Drawer as DrawerPrimitive } from 'vaul-svelte'

  import { cn } from '$lib/utils.js'

  interface Props extends DrawerPrimitive.OverlayProps {
    children: Snippet
  }

  let { class: className = '', el = $bindable(), children, ...rest }: Props = $props()
</script>

<DrawerPrimitive.Overlay
  class={cn('fixed inset-0 z-50 bg-black/80', className)}
  bind:el
  {...rest}
>
  {@render children()}
</DrawerPrimitive.Overlay>
