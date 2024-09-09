<script lang='ts'>
  import { scroll, timeline } from 'motion'
  import { watch } from 'runed'

  import { Title } from '$lib/components'

  const expando = $state<{
    x?: number
    el?: HTMLElement
  }>({})

  watch(() => expando?.x, () => {
    if (expando?.x === void 0)
      return

    return scroll(timeline([
      ['.hole', {
        rotate: [5, 360],
      }, {
        duration: (scrollY + (expando?.el?.getBoundingClientRect().y ?? 0)) / document.body.clientHeight,
        easing: 'ease-in',
      }],

      'a',
      ['.hole', {
        rotate: [0, 340],
        x: [0, '5%'],
        y: [0, '5%'],
      }, {
        at: 'a',
        easing: 'linear',
      }],
      ['.big-hole', {
        scale: [1, 4],
      }, {
        at: 'a',
      }],
    ]))
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

<div class='text-background container [&>*]:(mx-auto max-w-prose flex items-center mix-blend-difference min-h-svh) dark:text-foreground'>
  <div>
    <div class='sticky top-1/2 translate-y--1/2'>
      <h2 class='b-none text-4xl md:text-7xl'>
        <span class='text-warning'>Power</span> is
        <br />
        one helluva drug.
      </h2>
    </div>
  </div>

  <div class='isolate text-foreground mix-blend-normal!'>
    <div class='b rounded-lg bg-background/90 p-6 backdrop-blur'>
      <p>
        It's easy to take many things for granted as a member of <strong>The
          Civilized World&trade;</strong>. Food, water, shelter, clothing,
        sleep &mdash; for the average citizen of the Developed Nations of
        Earth, survival is often a choice rather than a necessity. At times, it
        may even seem that electricity is free.
      </p>

      <p>
        The words <em>electricity</em> and <em>power</em> tend to be used
        interchangeably in everyday conversation, and understandably so.
        Electricity can move anything &mdash; people, goods, money &mdash;
        anywhere. Electricity can feed a nation, and give its people clean
        running water. Electricity can save the dying, and cure the ailing.
        Electricity is what lets children read without straining in the dark
        of night.
      </p>

      <p>
        In the Olympic dick-measuring contest of international relations,
        having a strong, stable electrical infrastructure grants a nation
        around 6 bonus inches. Electrical power <em>is</em> power, in both the
        material and social sense.
      </p>
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

  <div bind:this={expando.el} bind:clientHeight={expando.x}>
    <div>
      <p class='text-xl font-bold md:text-4xl'>
        So why the fuck is almost every piece of software so hellbent on
        stretching the computational <span class='text-pink'>recta</span> of
        our personal devices to their absolute limits?
      </p>
    </div>
  </div>
</div>
