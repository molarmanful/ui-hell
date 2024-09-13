import { rand } from '$lib/utils'

class Retick {
  int = 0
  cyc = 3
  off = rand(this.cyc)

  retick(f = () => { }) {
    if (this.int === this.off)
      f()
    this.int++
    this.int %= this.cyc
  }
}

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

export class SliderGen extends BarGen {
  el = $state<HTMLSpanElement>()
}

export class ProgressGen extends BarGen {
  el = $state<HTMLDivElement>()
}

export class RadioGen {
  n = rand(2, 6)
  retick = new Retick()
  x = $state(0)
  el = $state<HTMLDivElement>()

  tick() {
    this.retick.retick(() => {
      this.x = rand(this.n)
    })
  }
}

export class CheckGen {
  n = rand(1, 5)
  retick = new Retick()
  x = $state(Array.from<boolean>({ length: this.n }).fill(false))
  el = $state<HTMLDivElement>()

  tick() {
    this.retick.retick(() => {
      this.x[rand(this.x.length)] = !!rand(2)
    })
  }
}

export class SwitchGen {
  retick = new Retick()
  x = $state(false)
  el = $state<HTMLButtonElement>()

  tick() {
    this.retick.retick(() => {
      this.x = !!rand(2)
    })
  }
}

export const gens = [
  () => new SliderGen(),
  () => new ProgressGen(),
  () => new RadioGen(),
  () => new CheckGen(),
  () => new SwitchGen(),
] as const
