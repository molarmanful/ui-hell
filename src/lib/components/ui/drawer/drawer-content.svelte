<script lang='ts'>
  import type { Snippet } from 'svelte'
  import { Drawer as DrawerPrimitive } from 'vaul-svelte'

  import DrawerOverlay from './drawer-overlay.svelte'

  import { cn } from '$lib/utils.js'

  interface Props extends DrawerPrimitive.ContentProps {
    children: Snippet
  }

  const { class: className = '', children, ...rest }: Props = $props()
</script>

<DrawerPrimitive.Portal>
  <DrawerOverlay />
  <DrawerPrimitive.Content
    class={cn(
      'bg-background fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border',
      className,
    )}
    {...rest}
  >
    <div class='mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted'></div>
    {@render children()}
  </DrawerPrimitive.Content>
</DrawerPrimitive.Portal>
