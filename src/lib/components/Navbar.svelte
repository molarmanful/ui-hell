<script lang='ts'>
  import type { HTMLAttributes } from 'svelte/elements'

  import { ModeToggle } from '.'

  interface Props extends HTMLAttributes<HTMLElement> {
    clazz?: string
  }

  const { clazz = '', ...props }: Props = $props()
</script>

<header class='sticky items-start top-0 z-50 w-full border-b bg-background {clazz}' {...props}>
  <div class='flex items-center justify-between container py-2'>
    <div class='flex items-center'>
      <span class='font-bold'>ui-hell</span>
    </div>
    <div class='flex items-center'>
      <ModeToggle />
    </div>
  </div>
</header>
