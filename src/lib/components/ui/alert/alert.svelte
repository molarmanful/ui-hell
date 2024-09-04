<script lang='ts'>
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  import { type Variant, alertVariants } from './index.js'

  import { cn } from '$lib/utils.js'

  interface Props extends HTMLAttributes<HTMLDivElement> {
    variant?: Variant
    children: Snippet
  }

  const { class: className = '', variant = 'default', children, ...rest }: Props = $props()
</script>

<div class={cn(alertVariants({ variant }), className)} {...rest} role='alert'>
  {@render children()}
</div>
