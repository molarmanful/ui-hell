<script lang='ts'>
  import { ModeWatcher } from 'mode-watcher'
  import type { Snippet } from 'svelte'

  import { ModeToggle } from '$lib/components'

  import '../app.css'

  interface Props {
    children: Snippet
  }

  const { children }: Props = $props()
</script>

<ModeWatcher />
<ModeToggle />

{@render children()}
