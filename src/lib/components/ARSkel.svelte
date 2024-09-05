<script lang='ts'>
  import type { ComponentProps, Snippet } from 'svelte'

  import { AspectRatio } from '$lib/components/ui/aspect-ratio'
  import { Skeleton } from '$lib/components/ui/skeleton'

  interface Props extends ComponentProps<typeof AspectRatio> {
    ratio?: number
    children: Snippet
  }

  const { ratio = 1, children, ...rest }: Props = $props()
</script>

<AspectRatio {ratio} {...rest}>
  <Skeleton class='absolute inset-0 size-full' />
  {@render children()}
</AspectRatio>
