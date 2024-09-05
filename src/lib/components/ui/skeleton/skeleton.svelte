<script lang='ts'>
  import type { HTMLAttributes } from 'svelte/elements'

  import { cn } from '$lib/utils.js'

  interface Props extends HTMLAttributes<HTMLDivElement> {}

  const { class: className, ...rest }: Props = $props()
</script>

<div class={cn('bg-muted animate-pulse rounded-md', className)} {...rest}></div>
