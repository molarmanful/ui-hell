<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  import { cn } from '$lib/utils.js'

  interface Props extends HTMLAttributes<HTMLDivElement> {
    children: Snippet
  }

  const { class: className = '', children, ...rest }: Props = $props()
</script>

<div
  class={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
  {...rest}
>
  {@render children()}
</div>
