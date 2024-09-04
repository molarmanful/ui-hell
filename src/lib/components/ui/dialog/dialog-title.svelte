<script lang='ts'>
  import { Dialog as DialogPrimitive } from 'bits-ui'
  import type { Snippet } from 'svelte'

  import { cn } from '$lib/utils.js'

  interface Props extends DialogPrimitive.TitleProps {
    children: Snippet
  }

  const { class: className = '', children, ...rest }: Props = $props()
</script>

<DialogPrimitive.Title
  class={cn('text-lg font-semibold leading-none tracking-tight', className)}
  {...rest}
>
  {@render children()}
</DialogPrimitive.Title>
