<script lang='ts'>
  import Beef from 'lucide-svelte/icons/beef'

  import { AspectRatio } from '$lib/components/ui/aspect-ratio'
  import { Button, buttonVariants } from '$lib/components/ui/button'
  import * as Dialog from '$lib/components/ui/dialog'
  import { Skeleton } from '$lib/components/ui/skeleton'

  let cols = $state(1)
  let gap = $state(2)
  let open = $state(false)
  let brad = $state(0.375)
  let loaded = $state(false)

  $effect(() => {
    if (!open) {
      cols = 1
      gap = 2
      brad = 0.375
    }
  })
</script>

<Dialog.Root bind:open>
  <Dialog.Trigger class={buttonVariants({ variant: 'destructive' })}>
    <Beef class='mr-2 size-4' /> EAT THE SLOP
  </Dialog.Trigger>

  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>IT'S JOEVER</Dialog.Title>
      <Dialog.Description>
        Chat we are so cooked bruh
      </Dialog.Description>
    </Dialog.Header>

    <div
      style:grid-template-columns='repeat({cols}, minmax(0, 1fr))'
      style:gap='{gap}rem'
      class='grid'
    >
      {#each Array.from({ length: cols * cols }) as _}
        <AspectRatio ratio={1}>
          <Skeleton class='absolute inset-0 size-full' />
          <img
            style:border-radius='{brad}rem'
            class="{loaded ? 'opacity-100' : 'opacity-0'} size-full rounded-md bg-muted object-cover image-render-pixel saturate-200 transition-opacity"
            alt='Walter White falling over in dismay.'
            loading='lazy'
            onload={() => loaded = true}
            src='/walter-white-falling.gif'
          />
        </AspectRatio>
      {/each}
    </div>

    <Dialog.Footer>
      <Button
        onclick={() => {
          cols *= 2
          gap /= 2
          brad *= 6 / 7
        }}
        variant='destructive'
      >SLOP<sup>2</sup></Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>
