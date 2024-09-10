<script lang='ts'>
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

  import { browser } from '$app/environment'
  import { Title } from '$lib/components'

  if (browser)
    gsap.registerPlugin(ScrollTrigger)

  const cont = 'text-background container [&>*]:(mx-auto max-w-prose flex mix-blend-difference min-h-lvh) dark:text-foreground'
  const sticky = 'sticky self-start py-5'

  let innerHeight = $state(0)
  let clientHeight = $state(0)
  const heights = $state<Record<string, number>>({})
  const mid = (k: string) => `${(innerHeight - heights[k]) / 2}px`

  let expando = $state<HTMLElement>()

  $effect(() => {
    if (heights.c === void 0)
      return

    const ctx = gsap.context(() => {
      const extop = scrollY + (expando?.getBoundingClientRect().y ?? 0) - innerHeight / 2

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      })

      tl.fromTo('.hole', { rotate: 5 }, { rotate: 360, duration: extop, ease: 'ease-in' })

      const t = clientHeight - innerHeight - extop
      tl.fromTo('.hole', { rotate: 0 }, { rotate: 340, duration: t, ease: 'ease-out', immediateRender: false }, '>')
      tl.to('.hole', { xPercent: 5, yPercent: 5, duration: t }, '<')
      tl.to('.big-hole', { scale: 4, duration: t }, '<')

      gsap.to('.big-hole', {
        opacity: 0.1,
        duration: 0.3,
        scrollTrigger: {
          trigger: '.foc',
          start: 'top 75%',
          end: 'bottom 50%',
          toggleActions: 'play reverse play reverse',
        },
      })
    })

    return () => ctx.revert()
  })
</script>

<svelte:window bind:innerHeight />

<Title x='HOLE' />

<svelte:body bind:clientHeight />

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

<div class='mt--13 flex text-right text-background mix-blend-difference h-lvh container dark:text-foreground'>
  <h1 class='m-auto text-30vw leading-none lg:text-70'>
    THE
    <br />
    H<span class='opacity-0'>O</span>LE
  </h1>
</div>

<div class={cont}>
  <div>
    <div style:top={mid('a')} class={sticky} bind:clientHeight={heights.a}>
      <h2 class='b-none text-4xl md:text-7xl'>
        <span class='text-warning'>Power</span> is
        <br />
        one helluva drug.
      </h2>
    </div>
  </div>

  <div class='isolate text-foreground mix-blend-normal!'>
    <div class='{sticky} top-22 b rounded-lg bg-background/90 p-6 py-5 backdrop-blur'>
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

  <div class='foc'>
    <div style:top={mid('b')} class={sticky} bind:clientHeight={heights.b}>
      <p class='md:text-3xl'>
        Our smartphones alone can process at speeds of over <strong>100,000
          times</strong> that of the Apollo 11's onboard computer...
      </p>
    </div>
  </div>

  <div bind:this={expando} class='h-200lvh'>
    <div style:top={mid('c')} class={sticky} bind:clientHeight={heights.c}>
      <p class='text-xl font-bold md:text-4xl'>
        So why the fuck is almost every piece of software so hellbent on
        stretching the computational <span class='text-pink'>recta</span> of
        our personal devices to their absolute limits?
      </p>
    </div>
  </div>
</div>
