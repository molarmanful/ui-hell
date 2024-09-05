<script lang='ts'>
  import { Progress } from '$lib/components/ui/progress'
  import { Slider } from '$lib/components/ui/slider'
  import { getRand, rand } from '$lib/utils'

  class SliderGen {
    max = 100
    goal = 50
    vel = 0
    x = $state(50)

    tick() {
      if ((this.vel >= 0 && this.x >= this.goal) || (this.vel <= 0 && this.x <= this.goal)) {
        this.goal = rand(this.max)
        this.vel = Math.sign(this.goal - this.x) * rand(1, 6)
      }
      this.x = Math.max(0, Math.min(this.max, this.x + this.vel))
    }
  }

  class ProgressGen extends SliderGen {}

  const gens = [() => new SliderGen(), () => new ProgressGen()] as const
  const states = $state(
    Array.from({ length: 12 * 6 }).map(() => getRand(gens)()),
  )

  $effect(() => {
    const f = () => {
      requestAnimationFrame(() => {
        for (const state of states)
          state.tick()
        f()
      })
    }
    f()
  })
</script>

<div class='cols-3 flex flex-wrap gap-5 py-13 container lg:cols-12 md:cols-6'>
  {#each states as state}
    {#if state instanceof ProgressGen}
      <Progress max={state.max} value={state.x} />
    {:else if state instanceof SliderGen}
      <Slider max={state.max} value={[state.x]} />
    {/if}
  {/each}
</div>
