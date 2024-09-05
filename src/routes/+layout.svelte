<script lang='ts'>
  import { ModeWatcher } from 'mode-watcher'
  import type { Snippet } from 'svelte'

  import type { LayoutServerData } from './$types'

  import { afterNavigate, onNavigate } from '$app/navigation'
  import { Navbar } from '$lib/components'

  import 'uno.css'
  import '../app.css'

  interface Props {
    data: LayoutServerData
    children: Snippet
  }

  const { children }: Props = $props()

  let loaded = $state(false)

  afterNavigate(() => {
    loaded = true
  })

  onNavigate(() => {
    loaded = false

    return new Promise(res => setTimeout(res, 200))
  })
</script>

<ModeWatcher />
<Navbar />

<div class="{loaded ? 'opacity-100' : 'opacity-0'} transition-opacity-200">
  {@render children()}
</div>
