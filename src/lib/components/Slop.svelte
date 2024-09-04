<script lang='ts'>
  import { ScrollArea } from '$lib/components/ui/scroll-area'

  interface Props {
    clazz?: string
  }

  const { clazz = '' }: Props = $props()

  let el: HTMLDivElement | undefined = $state()

  const slop = () => ['SLOP', 'SLOPPITY'][Math.random() * 2 | 0]
  const slops = $state(Array.from<string>({ length: 420 }).map(() => slop()))

  $effect(() => {
    const t = setInterval(() => {
      if (!el)
        return

      el.scrollTop = el.scrollHeight / 2

      for (let i = 10; i-- > 0;) {
        slops.push(slop())
        slops.shift()
      }
    }, 100)

    return () => clearInterval(t)
  })
</script>

<ScrollArea class='{clazz} h-64 b rounded-md p-4 text-destructive' bind:el>
  {slops.join(' ')}...
</ScrollArea>
