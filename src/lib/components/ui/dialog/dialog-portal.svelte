<script lang='ts'>
  import { Dialog as DialogPrimitive } from 'bits-ui'

  type $$Props = DialogPrimitive.PortalProps
</script>

<DialogPrimitive.Portal {...$$restProps}>
  <slot></slot>
</DialogPrimitive.Portal>
