<script lang='ts'>
  import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui'

  import { cn } from '$lib/utils.js'

  type $$Props = RangeCalendarPrimitive.GridHeadProps

  let className: $$Props['class']
  export { className as class }
</script>

<RangeCalendarPrimitive.GridHead class={cn(className)} {...$$restProps}>
  <slot></slot>
</RangeCalendarPrimitive.GridHead>
