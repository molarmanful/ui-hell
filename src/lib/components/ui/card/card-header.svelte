<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  import { cn } from '$lib/utils.js'

  interface Props extends HTMLAttributes<HTMLDivElement> {
    children: Snippet
  }

  const { class: className = '', children, ...rest }: Props = $props()
</script>

<div class={cn('flex flex-col space-y-1.5 p-6', className)} {...rest}>
  {@render children()}
</div>
