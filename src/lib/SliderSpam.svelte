<script lang='ts'>
  import { Progress } from '$lib/components/ui/progress'
  import { Slider } from '$lib/components/ui/slider'
  import { getRand, rand } from '$lib/utils'

  class BarGen {
    max = 100
    goal = 50
    vel = 0
    width = rand(5, 10)
    x = $state(50)

    tick() {
      if ((this.vel >= 0 && this.x >= this.goal) || (this.vel <= 0 && this.x <= this.goal)) {
        this.goal = rand(this.max)
        this.vel = Math.sign(this.goal - this.x) * rand(1, 6)
      }
      this.x = Math.max(0, Math.min(this.max, this.x + this.vel))
    }
  }

  class SliderGen extends BarGen {
    el = $state<HTMLSpanElement>()
  }

  class ProgressGen extends BarGen {
    el = $state<HTMLDivElement>()
  }

  const gens = [() => new SliderGen(), () => new ProgressGen()] as const
  const states = $state(
    Array.from({ length: 5 }).map(() =>
      Array.from({ length: rand(50, 101) }).map(() => getRand(gens)()),
    ),
  )

  let loaded = $state(false)

  $effect(() => {
    const f = () => {
      requestAnimationFrame(() => {
        (() => {
          for (const group of states) {
            for (const state of group) {
              if (!state.el)
                continue

              const { el } = state
              const { bottom, top } = el.getBoundingClientRect()
              if (bottom < 0)
                continue
              if (top > innerHeight) {
                return
              }

              state.tick()
            }
          }
        })()

        f()
      })
    }

    setTimeout(() => {
      loaded = true
      f()
    })
  })
</script>

<div class="{loaded ? 'opacity-100' : 'opacity-0'} py-13 container transition-opacity-500">
  <div class='mx-auto max-w-65ch'>
    <h1>No problem! Here's the information about the Mercedes CLR GTR:</h1>
    {#each states as group}
      <div class='mt-13 flex flex-wrap gap-5'>
        {#each group as state}
          {#if state instanceof SliderGen}
            <div style:width='{state.width}ch' class='flex'>
              <Slider class='my-auto' max={state.max} value={[state.x]} bind:el={state.el} />
            </div>
          {:else if state instanceof ProgressGen}
            <div style:width='{state.width}ch' class='flex'>
              <Progress class='my-auto' value={state.x} bind:el={state.el} />
            </div>
          {/if}
        {/each}
      </div>
    {/each}
  </div>
</div>
