<script lang='ts'>
  import type { HTMLAttributes } from 'svelte/elements'

  import { ModeToggle } from '.'

  interface Props extends HTMLAttributes<HTMLElement> {
    clazz?: string
  }

  const { clazz = '', ...props }: Props = $props()
</script>

<header class='sticky top-0 z-50 w-full border-b bg-background {clazz}' {...props}>
  <div class='flex items-center container mx-auto py-2'>
    <div class='flex items-center'>
      <span class='font-bold'>ui-hell</span>
    </div>
    <div class='flex items-center ml-auto'>
      <ModeToggle />
    </div>
  </div>
</header>
