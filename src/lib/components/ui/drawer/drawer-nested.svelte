<script lang='ts'>
  import type { Snippet } from 'svelte'
  import { Drawer as DrawerPrimitive } from 'vaul-svelte'

  interface Props extends DrawerPrimitive.Props {
    children: Snippet
  }

  let { shouldScaleBackground = true, open = $bindable(false), activeSnapPoint = $bindable(), children, ...rest }: Props = $props()
</script>

<DrawerPrimitive.NestedRoot {shouldScaleBackground} bind:open bind:activeSnapPoint {...rest}>
  {@render children()}
</DrawerPrimitive.NestedRoot>
