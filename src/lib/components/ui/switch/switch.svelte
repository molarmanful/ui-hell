<script lang='ts'>
  import { Switch as SwitchPrimitive } from 'bits-ui'

  import { cn } from '$lib/utils.js'

  interface Props extends SwitchPrimitive.Props {}

  let { class: className, checked, el = $bindable(), ...rest }: Props = $props()
</script>

<SwitchPrimitive.Root
  class={cn(
    'focus-visible:ring-ring focus-visible:ring-offset-background data-[state=checked]:bg-primary data-[state=unchecked]:bg-input peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    className,
  )}
  bind:checked
  bind:el
  {...rest}
>
  <SwitchPrimitive.Thumb
    class={cn(
      'bg-background pointer-events-none block h-5 w-5 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
    )}
  />
</SwitchPrimitive.Root>
