<script lang='ts'>
  import { ModeWatcher } from 'mode-watcher'
  import type { Snippet } from 'svelte'

  import { Navbar } from '$lib/components'

  import 'uno.css'
  import '../app.css'

  interface Props {
    children: Snippet
  }

  const { children }: Props = $props()
</script>

<ModeWatcher />
<Navbar />
{@render children()}
