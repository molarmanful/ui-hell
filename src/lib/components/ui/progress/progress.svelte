<script lang='ts'>
  import { Progress as ProgressPrimitive } from 'bits-ui'

  import { cn } from '$lib/utils.js'

  interface Props extends ProgressPrimitive.Props {}

  let { class: className = '', max = 100, value, el = $bindable(), ...rest }: Props = $props()
</script>

<ProgressPrimitive.Root
  class={cn('bg-secondary relative h-4 w-full overflow-hidden rounded-full', className)}
  bind:el
  {...rest}
>
  <div
    style={`transform: translateX(-${100 - (100 * (value ?? 0)) / (max ?? 1)}%)`}
    class='h-full w-full flex-1 bg-primary transition-all'
  ></div>
</ProgressPrimitive.Root>
