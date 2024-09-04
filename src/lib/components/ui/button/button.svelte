<script lang='ts'>
  import { Button as ButtonPrimitive } from 'bits-ui'

  import { type Props, buttonVariants } from '.'

  import { cn } from '$lib/utils.js'

  const { class: className = '', variant = 'default', size, children, ...rest }: Props = $props()
</script>

<ButtonPrimitive.Root
  class={cn(buttonVariants({ variant, size, className }))}
  {...rest}
>
  {@render children()}
</ButtonPrimitive.Root>
