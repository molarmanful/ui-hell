<script lang='ts'>
  import { ScrollArea as ScrollAreaPrimitive } from 'bits-ui'

  import { Scrollbar } from './index.js'

  import { cn } from '$lib/utils.js'

  type $$Props = ScrollAreaPrimitive.Props & {
    orientation?: 'vertical' | 'horizontal' | 'both'
    scrollbarXClasses?: string
    scrollbarYClasses?: string
  }

  let className: $$Props['class']
  export { className as class }
  export let orientation = 'vertical'
  export let scrollbarXClasses: string = ''
  export let scrollbarYClasses: string = ''
</script>

<ScrollAreaPrimitive.Root {...$$restProps} class={cn('relative overflow-hidden', className)}>
  <ScrollAreaPrimitive.Viewport class='h-full w-full rounded-[inherit]'>
    <ScrollAreaPrimitive.Content>
      <slot></slot>
    </ScrollAreaPrimitive.Content>
  </ScrollAreaPrimitive.Viewport>
  {#if orientation === 'vertical' || orientation === 'both'}
    <Scrollbar class={scrollbarYClasses} orientation='vertical'></Scrollbar>
  {/if}
  {#if orientation === 'horizontal' || orientation === 'both'}
    <Scrollbar class={scrollbarXClasses} orientation='horizontal'></Scrollbar>
  {/if}
  <ScrollAreaPrimitive.Corner></ScrollAreaPrimitive.Corner>
</ScrollAreaPrimitive.Root>
