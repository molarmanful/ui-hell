<script lang='ts'>
  import type { HTMLAttributes } from 'svelte/elements'

  type $$Props = HTMLAttributes<HTMLElement> & {
    el?: HTMLElement
  }

  export let el: $$Props['el']
  let className: $$Props['class']
  export { className as class }
</script>

<nav bind:this={el} class={className} aria-label='breadcrumb' {...$$restProps}>
  <slot />
</nav>
