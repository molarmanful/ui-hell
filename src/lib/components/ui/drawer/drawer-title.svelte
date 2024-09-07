<script lang='ts'>
  import type { Snippet } from 'svelte'
  import { Drawer as DrawerPrimitive } from 'vaul-svelte'

  import { cn } from '$lib/utils.js'

  interface Props extends DrawerPrimitive.TitleProps {
    children: Snippet
  }

  let { class: className = '', el = $bindable(), children, ...rest }: Props = $props()
</script>

<DrawerPrimitive.Title
  class={cn('text-lg font-semibold leading-none tracking-tight', className)}
  bind:el
  {...rest}
>
  {@render children()}
</DrawerPrimitive.Title>
