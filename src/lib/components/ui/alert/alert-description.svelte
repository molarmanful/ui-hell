<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  import { cn } from '$lib/utils.js'

  interface Props extends HTMLAttributes<HTMLDivElement> {
    children: Snippet
  }

  const { class: className = '', children, ...rest }: Props = $props()
</script>

<div class={cn('text-sm [&_p]:leading-relaxed', className)} {...rest}>
  {@render children()}
</div>
