<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  import type { HeadingLevel } from './index.js'

  import { cn } from '$lib/utils.js'

  interface Props extends HTMLAttributes<HTMLHeadingElement> {
    tag?: HeadingLevel
    children: Snippet
  }

  const { class: className = '', tag = 'h3', children, ...rest }: Props = $props()
</script>

<svelte:element
  this={tag}
  class={cn('text-lg font-semibold leading-none tracking-tight', className)}
  {...rest}
>
  {@render children()}
</svelte:element>
