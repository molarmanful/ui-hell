<script lang='ts'>
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui'

  import { cn } from '$lib/utils.js'

  type $$Props = AlertDialogPrimitive.DescriptionProps

  let className: $$Props['class']
  export { className as class }
</script>

<AlertDialogPrimitive.Description
  class={cn('text-muted-foreground text-sm', className)}
  {...$$restProps}
>
  <slot></slot>
</AlertDialogPrimitive.Description>
