<script lang='ts'>
  import type { HTMLAttributes } from 'svelte/elements'

  import { ModeToggle } from '.'

  interface Props extends HTMLAttributes<HTMLElement> {
    clazz?: string
  }

  const { clazz = '', ...rest }: Props = $props()
</script>

<header class='{clazz} sticky top-0 z-50 w-full items-start b-b bg-background' {...rest}>
  <div class='flex items-center justify-between py-2 container'>
    <div class='flex items-center'>
      <a class='font-bold' href='/'>ui-hell</a>
    </div>
    <div class='flex items-center'>
      <ModeToggle />
    </div>
  </div>
</header>
