<script lang='ts'>
  import type { HTMLAttributes } from 'svelte/elements'

  import { ModeToggle } from '.'

  interface Props extends HTMLAttributes<HTMLElement> {
    clazz?: string
  }

  const { clazz = '', ...props }: Props = $props()
</script>

<header class='{clazz} sticky top-0 z-50 w-full items-start border-b bg-background' {...props}>
  <div class='flex items-center justify-between py-2 container'>
    <div class='flex items-center'>
      <span class='font-bold'>ui-hell</span>
    </div>
    <div class='flex items-center'>
      <ModeToggle />
    </div>
  </div>
</header>
