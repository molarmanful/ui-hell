<script lang='ts'>
  import { RadioGroup as RadioGroupPrimitive } from 'bits-ui'
  import type { Snippet } from 'svelte'

  import { cn } from '$lib/utils.js'

  interface Props extends RadioGroupPrimitive.Props {
    children: Snippet
  }

  let { class: className = '', value, children, el = $bindable(), ...rest }: Props = $props()
</script>

<RadioGroupPrimitive.Root class={cn('grid gap-2', className)} bind:value bind:el {...rest}>
  {@render children()}
</RadioGroupPrimitive.Root>
