<script lang='ts'>
  import { AspectRatio as AspectRatioPrimitive } from 'bits-ui'
  import type { Snippet } from 'svelte'

  interface Props extends AspectRatioPrimitive.Props {
    children: Snippet
  }

  const { ratio = 4 / 3, children, ...rest }: Props = $props()
</script>

<AspectRatioPrimitive.Root {ratio} {...rest}>
  {@render children()}
</AspectRatioPrimitive.Root>
