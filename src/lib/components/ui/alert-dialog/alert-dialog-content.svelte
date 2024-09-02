<script lang='ts'>
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui'

  import * as AlertDialog from './index.js'

  import { cn, flyAndScale } from '$lib/utils.js'

  type $$Props = AlertDialogPrimitive.ContentProps

  export let transition: $$Props['transition'] = flyAndScale
  export let transitionConfig: $$Props['transitionConfig']

  let className: $$Props['class']
  export { className as class }
</script>

<AlertDialog.Portal>
  <AlertDialog.Overlay />
  <AlertDialogPrimitive.Content
    class={cn(
      'bg-background fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg sm:rounded-lg md:w-full',
      className,
    )}
    {transition}
    {transitionConfig}
    {...$$restProps}
  >
    <slot></slot>
  </AlertDialogPrimitive.Content>
</AlertDialog.Portal>
