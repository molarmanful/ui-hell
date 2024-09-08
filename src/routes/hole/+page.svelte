<script lang='ts'>
  import { scroll, timeline } from 'motion'

  import { Title } from '$lib/components'

  $effect(() => {
    scroll(timeline([
      ['.hole', {
        rotate: [5, 360 + 180],
      }, { duration: 1 }],
      ['.big-hole', {
        scale: [1, 4],
      }, { at: 0.5 }],
    ],
    ))
  })
</script>

<Title x='HOLE' />

{#snippet hole(max: number, n?: number)}
  {#if n === void 0}
      {@render hole(max, max)}
  {:else if n > 0}
    <div class="{n % 2 !== max % 2 ? 'bg-foreground' : 'bg-background'} mx-auto mb-auto mt-1/9 size-7/8 flex rounded-full hole">
      {@render hole(max, n - 1)}
    </div>
  {/if}
{/snippet}

<div class='fixed inset-0 flex container'>
  <div class='big-hole hole m-auto aspect-square flex rounded-full bg-foreground w-lg!'>
    {@render hole(32)}
  </div>
</div>

<div class='mt--13 flex text-right text-background mix-blend-difference h-svh container dark:text-foreground'>
  <h1 class='m-auto text-30vw leading-none lg:text-70'>
    THE
    <br />
    H<span class='opacity-0'>O</span>LE
  </h1>
</div>

<div class='text-background mix-blend-difference container [&>*]:mx-auto [&>*]:max-w-prose [&>*]:flex [&>*]:items-center dark:text-foreground [&>*]:min-h-svh'>
  <div>
    <div>
      <p class='text-3xl'>
        Our smartphones alone can process at speeds over 100,000 times that of
        the Apollo 11's onboard computer...
      </p>
    </div>
  </div>

  <div>
    <div class='bg-background text-foreground dark:bg-foreground dark:text-background'>
      <p class='p-8 text-4xl font-bold'>
        Yet it seems that almost every piece of software nowadays is hellbent on
        stretching the computational recta of our personal devices to their
        absolute limits.
      </p>
    </div>
  </div>
</div>
