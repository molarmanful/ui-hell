<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  import { cn } from '$lib/utils.js'

  interface Props extends HTMLAttributes<HTMLDivElement> {
    el?: HTMLDivElement
    children: Snippet
  }

  let { class: className = '', el = $bindable(), children, ...rest }: Props = $props()
</script>

<div bind:this={el} class={cn('mt-auto flex flex-col gap-2 p-4', className)} {...rest}>
  {@render children()}
</div>
