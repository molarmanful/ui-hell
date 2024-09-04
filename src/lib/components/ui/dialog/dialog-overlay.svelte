<script lang='ts'>
  import { Dialog as DialogPrimitive } from 'bits-ui'
  import { fade } from 'svelte/transition'

  import { cn } from '$lib/utils.js'

  interface Props extends DialogPrimitive.OverlayProps {}

  const {
    class: className = '',
    transition = fade,
    transitionConfig = {
      duration: 150,
    },
    ...rest
  }: Props = $props()
</script>

<DialogPrimitive.Overlay
  class={cn('bg-background/80 fixed inset-0 z-50 backdrop-blur-sm', className)}
  {transition}
  {transitionConfig}
  {...rest}
/>
