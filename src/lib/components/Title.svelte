<script lang='ts'>
  interface Props {
    x?: string
  }

  const { x = '' }: Props = $props()
</script>

<svelte:head>
  <title>ui-hell{x && ` | ${x}`}</title>
</svelte:head>
