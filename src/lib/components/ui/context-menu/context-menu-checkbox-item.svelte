<script lang='ts'>
  import { ContextMenu as ContextMenuPrimitive } from 'bits-ui'
  import Check from 'lucide-svelte/icons/check'

  import { cn } from '$lib/utils.js'

  type $$Props = ContextMenuPrimitive.CheckboxItemProps
  type $$Events = ContextMenuPrimitive.CheckboxItemEvents

  let className: $$Props['class']
  export let checked: $$Props['checked']
  export { className as class }
</script>

<ContextMenuPrimitive.CheckboxItem
  class={cn(
    'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    className,
  )}
  bind:checked
  {...$$restProps}
  on:click
  on:keydown
  on:focusin
  on:focusout
  on:pointerdown
  on:pointerleave
  on:pointermove
>
  <span class='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
    <ContextMenuPrimitive.CheckboxIndicator>
      <Check class='h-4 w-4' />
    </ContextMenuPrimitive.CheckboxIndicator>
  </span>
  <slot></slot>
</ContextMenuPrimitive.CheckboxItem>
