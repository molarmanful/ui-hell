<script lang='ts'>
  import { Checkbox } from '$lib/components/ui/checkbox'
  import { Progress } from '$lib/components/ui/progress'
  import * as RadioGroup from '$lib/components/ui/radio-group'
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

  class RadioGen {
    n = rand(2, 6)
    int = 0
    cyc = 3
    off = rand(this.cyc)
    x = $state(0)
    el = $state<HTMLDivElement>()

    tick() {
      if (this.int === this.off)
        this.x = rand(this.n)
      this.int++
      this.int %= this.cyc
    }
  }

  class CheckGen {
    n = rand(1, 5)
    int = 0
    cyc = 3
    off = rand(this.cyc)
    x = $state(Array.from<boolean>({ length: this.n }).fill(false))
    el = $state<HTMLDivElement>()

    tick() {
      if (this.int === this.off)
        this.x[rand(this.x.length)] = !!rand(2)
      this.int++
      this.int %= this.cyc
    }
  }

  const gens = [
    () => new SliderGen(),
    () => new ProgressGen(),
    () => new RadioGen(),
    () => new CheckGen(),
  ] as const

  const states = $state(
    Array.from({ length: 5 }).map(() => ({
      is: new Set<number>(),
      xs:
        Array.from({ length: rand(50, 101) }).map(() =>
          getRand(gens)(),
        ),
    })),
  )

  let loaded = $state(false)

  $effect(() => {
    const io = new IntersectionObserver((entries) => {
      for (const { isIntersecting, target } of entries) {
        const t = target as HTMLElement
        const { i, j } = t.dataset
        const i1 = +(i ?? -1)
        const j1 = +(j ?? -1)
        const { is } = states[i1]

        t.style.opacity = `${+isIntersecting}`

        if (isIntersecting) {
          is.add(j1)
          continue
        }
        is.delete(j1)
      }
    })

    let die = false
    const f = () => {
      requestAnimationFrame(() => {
        if (die)
          return

        for (const { is, xs } of states) {
          for (const i of is) {
            xs[i].tick()
          }
        }

        f()
      })
    }

    for (const { xs } of states) {
      for (const { el } of xs) {
        if (!el)
          continue
        io.observe(el)
      }
    }

    setTimeout(() => {
      loaded = true
      f()
    })

    return () => {
      io.disconnect()
      die = true
    }
  })
</script>

<div class="{loaded ? 'opacity-100' : 'opacity-0'} py-13 container transition-opacity-500">
  <div class='mx-auto max-w-65ch'>
    <h1>No problem! Here's the information about the Mercedes CLR GTR:</h1>

    {#each states as { xs }, i}
      <div class='mt-13 flex flex-wrap gap-5'>
        {#each xs as state, j}
          {#if state instanceof SliderGen}
            <div style:width='{state.width}ch' class='flex'>
              <Slider
                class='my-auto transition-opacity-200'
                data-i={i}
                data-j={j}
                max={state.max}
                value={[state.x]}
                bind:el={state.el}
              />
            </div>

          {:else if state instanceof ProgressGen}
            <div style:width='{state.width}ch' class='flex'>
              <Progress
                class='my-auto transition-opacity-200'
                data-i={i}
                data-j={j}
                value={state.x}
                bind:el={state.el}
              />
            </div>

          {:else if state instanceof RadioGen}
            <RadioGroup.Root
              class='flex flex-wrap transition-opacity-200'
              data-i={i}
              data-j={j}
              value={`${state.x}`}
              bind:el={state.el}
            >
              {#each Array.from({ length: state.n }) as _, i}
                <RadioGroup.Item value={`${i}`} />
              {/each}
            </RadioGroup.Root>

          {:else if state instanceof CheckGen}
            <div
              bind:this={state.el}
              class='flex flex-wrap gap-2 transition-opacity-200'
              data-i={i}
              data-j={j}
            >
              {#each state.x as t}
                <Checkbox checked={t} />
              {/each}
            </div>
          {/if}
        {/each}
      </div>
    {/each}
  </div>
</div>
