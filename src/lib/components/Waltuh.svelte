<script lang='ts'>
  import Beef from 'lucide-svelte/icons/beef'

  import { goto } from '$app/navigation'
  import { base } from '$app/paths'
  import { ARSkel } from '$lib/components'
  import { Button, buttonVariants } from '$lib/components/ui/button'
  import * as Dialog from '$lib/components/ui/dialog'

  let cols = $state(1)
  let gap = $state(2)
  let open = $state(false)
  let brad = $state(0.375)
  let sat = $state(1)
  let loaded = $state(false)
  let going = $state(false)

  $effect(() => {
    if (!open) {
      cols = 1
      gap = 2
      brad = 0.375
      sat = 1
    }
  })
</script>

<Dialog.Root closeOnEscape={!going} closeOnOutsideClick={!going} bind:open>
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
        <ARSkel>
          <img
            style:border-radius='{brad}rem'
            style:filter='saturate({sat})'
            class="{loaded ? 'opacity-100' : 'opacity-0'} size-full bg-muted object-cover image-render-pixel transition-opacity-500"
            alt='Walter White falling over in dismay.'
            loading='lazy'
            onload={() => loaded = true}
            src='{base}/walter-white-falling.gif'
          />
        </ARSkel>
      {/each}
    </div>

    <Dialog.Footer>
      <Button
        disabled={going}
        onclick={() => {
          cols *= 2
          gap /= 2
          brad *= 6 / 7
          sat *= 2

          const now = Date.now()
          requestAnimationFrame(() => {
            if (open && Date.now() - now >= 1000) {
              going = true
              cols = 1
              goto(`${base}/sliders`)
            }
          })
        }}
        variant='destructive'
      >
        {#if going}
          LOADING...
        {:else}
          SLOP<sup>2</sup>
        {/if}
      </Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>
