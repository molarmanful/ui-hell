<script lang='ts'>
  import { scroll, timeline } from 'motion'

  import { Title } from '$lib/components'

  $effect(() => {
    scroll(timeline([
      ['.hole', {
        rotate: [5, 360 + 340],
      }, { duration: 1 }],

      { name: 'a', at: 0.5 },
      ['.hole', {
        x: [0, '5%'],
        y: [0, '5%'],
      }, { at: 'a' }],
      ['.big-hole', {
        scale: [1, 4],
      }, { at: 'a' }],
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
    <div class='sticky top-1/2 translate-y--1/2'>
      <h2 class='b-none text-4xl md:text-7xl'>
        Power is
        <br />
        one helluva drug.
      </h2>
    </div>
  </div>

  <div>
    <div class='sticky top-1/2 translate-y--1/2'>
      <p class='md:text-3xl'>
        Our smartphones alone can process at speeds of over <strong>100,000
          times</strong> that of the Apollo 11's onboard computer...
      </p>
    </div>
  </div>

  <div>
    <div>
      <p class='text-xl font-bold md:text-4xl'>
        And yet nowadays, it seems that almost every piece of software is
        hellbent on stretching the computational <span
          class='text-warning'>recta</span> of our personal devices to their
        absolute limits.
      </p>
    </div>
  </div>
</div>
