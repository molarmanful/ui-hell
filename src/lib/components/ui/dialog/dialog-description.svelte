<script lang='ts'>
  import { Dialog as DialogPrimitive } from 'bits-ui'
  import type { Snippet } from 'svelte'

  import { cn } from '$lib/utils.js'

  interface Props extends DialogPrimitive.DescriptionProps {
    children: Snippet
  }

  const { class: className = '', children, ...rest }: Props = $props()
</script>

<DialogPrimitive.Description
  class={cn('text-muted-foreground text-sm', className)}
  {...rest}
>
  {@render children()}
</DialogPrimitive.Description>
