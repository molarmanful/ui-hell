<script lang='ts'>
  import { Calendar as CalendarPrimitive } from 'bits-ui'

  import { cn } from '$lib/utils.js'

  type $$Props = CalendarPrimitive.GridHeadProps

  let className: $$Props['class']
  export { className as class }
</script>

<CalendarPrimitive.GridHead class={cn(className)} {...$$restProps}>
  <slot />
</CalendarPrimitive.GridHead>
