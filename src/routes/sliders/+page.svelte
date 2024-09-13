<script lang='ts'>
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

  import { CheckGen, ProgressGen, RadioGen, SliderGen, SwitchGen, gens } from './gens.svelte'

  import { browser } from '$app/environment'
  import { Title } from '$lib/components'
  import { Checkbox } from '$lib/components/ui/checkbox'
  import { Progress } from '$lib/components/ui/progress'
  import * as RadioGroup from '$lib/components/ui/radio-group'
  import { Slider } from '$lib/components/ui/slider'
  import { Switch } from '$lib/components/ui/switch'
  import { getRand, rand } from '$lib/utils'

  if (browser)
    gsap.registerPlugin(ScrollTrigger)

  const states = $state(
    Array.from({ length: 5 }).map(() => ({
      els: new Set<Element>(),
      xs:
        Array.from({ length: rand(50, 101) }).map(() =>
          getRand(gens)(),
        ),
    })),
  )

  let loaded = $state(false)

  const aos = (node: Element, i: number) => {
    const ctx = gsap.context(() => {
      const xs = node.querySelectorAll('[data-j]')
      gsap.set(xs, { opacity: 0 })

      const anim = (n: 0 | 1) => (batch: Element[]) => {
        for (const el of batch)
          states[i].els[n ? 'add' : 'delete'](el)

        gsap.to(batch, {
          opacity: n,
          duration: 0.2,
          stagger: 0.01,
          overwrite: true,
        })
      }

      ScrollTrigger.batch(xs, {
        onEnter: anim(1),
        onLeave: anim(0),
        onEnterBack: anim(1),
        onLeaveBack: anim(0),
      })
    })

    return { destroy: () => ctx.revert() }
  }

  $effect(() => {
    let die = false
    const f = () => {
      requestAnimationFrame(() => {
        if (die)
          return

        for (const { els, xs } of states) {
          for (const el of els) {
            xs[+(el as HTMLElement).dataset.j!].tick()
          }
        }

        f()
      })
    }

    setTimeout(() => {
      loaded = true
      f()
    })

    return () => die = true
  })
</script>

<Title x='SLIDERS' />

<div class="{loaded ? 'opacity-100' : 'opacity-0'} py-13 container transition-opacity-500">
  <div class='mx-auto max-w-65ch'>
    <h1>No problem! Here's the information about the Mercedes CLR GTR:</h1>

    {#each states as { xs }, i}
      <div class='mt-13 flex flex-wrap gap-5' use:aos={i}>
        {#each xs as state, j}
          {#if state instanceof SliderGen}
            <div style:width='{state.width}ch' class='flex'>
              <Slider
                class='my-auto'
                data-j={j}
                max={state.max}
                value={[state.x]}
                bind:el={state.el}
              />
            </div>

          {:else if state instanceof ProgressGen}
            <div style:width='{state.width}ch' class='flex'>
              <Progress
                class='my-auto'
                data-j={j}
                value={state.x}
                bind:el={state.el}
              />
            </div>

          {:else if state instanceof RadioGen}
            <RadioGroup.Root
              class='flex flex-wrap'
              data-j={j}
              value={`${state.x}`}
              bind:el={state.el}
            >
              {#each Array.from({ length: state.n }) as _, i}
                <RadioGroup.Item class='my-auto' value={`${i}`} />
              {/each}
            </RadioGroup.Root>

          {:else if state instanceof CheckGen}
            <div
              bind:this={state.el}
              class='flex flex-wrap gap-2'
              data-j={j}
            >
              {#each state.x as t}
                <Checkbox class='my-auto' checked={t} />
              {/each}
            </div>

          {:else if state instanceof SwitchGen}
            <Switch
              class='flex flex-wrap gap-2'
              checked={state.x}
              data-j={j}
              bind:el={state.el}
            />
          {/if}
        {/each}
      </div>
    {/each}
  </div>
</div>
