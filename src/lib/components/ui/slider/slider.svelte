<script lang='ts'>
  import { Slider as SliderPrimitive } from 'bits-ui'

  import { cn } from '$lib/utils.js'

  interface Props extends SliderPrimitive.Props {}

  let { value = [0], class: className = '', ...rest }: Props = $props()
</script>

<SliderPrimitive.Root
  class={cn('relative flex w-full touch-none select-none items-center', className)}
  bind:value
  let:thumbs
  {...rest}
>
  <span class='relative h-2 w-full grow overflow-hidden rounded-full bg-secondary'>
    <SliderPrimitive.Range class='absolute h-full bg-primary' />
  </span>
  {#each thumbs as thumb}
    <SliderPrimitive.Thumb
      class='block h-5 w-5 border-2 border-primary rounded-full bg-background ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring'
      {thumb}
    />
  {/each}
</SliderPrimitive.Root>
