<script lang='ts'>
  import { ModeWatcher } from 'mode-watcher'
  import type { Snippet } from 'svelte'
  import '../app.css'

  interface Props {
    children: Snippet
  }

  const { children }: Props = $props()
</script>

<ModeWatcher />

{@render children()}
