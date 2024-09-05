<script lang='ts'>
  import { ModeWatcher } from 'mode-watcher'
  import type { Snippet } from 'svelte'

  import type { LayoutServerData } from './$types'

  import { Navbar } from '$lib/components'

  import 'uno.css'
  import '../app.css'

  interface Props {
    data: LayoutServerData
    children: Snippet
  }

  const { children }: Props = $props()
  let innerHeight = $state(0)
</script>

<svelte:window bind:innerHeight />

<ModeWatcher />
<Navbar />

{@render children()}
