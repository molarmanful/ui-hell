<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  import type { HeadingLevel } from './index.js'

  import { cn } from '$lib/utils.js'

  interface Props extends HTMLAttributes<HTMLHeadingElement> {
    level?: HeadingLevel
    children: Snippet
  }

  const { class: className = '', level = 'h5', children, ...rest }: Props = $props()
</script>

<svelte:element
  this={level}
  class={cn('mb-1 font-medium leading-none tracking-tight', className)}
  {...rest}
>
  {@render children()}
</svelte:element>
