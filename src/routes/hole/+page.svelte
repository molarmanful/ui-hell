<script lang='ts'>
  import { Title } from '$lib/components'
</script>

<Title x='HOLE' />

{#snippet hole(n: number)}
  {#if n > 0}
    <div class="{n % 2 ? 'bg-foreground' : 'bg-background'} m-auto size-5/6 flex rounded-full">
      {@render hole(n - 1)}
    </div>
  {/if}
{/snippet}

<div class='flex py-13 container'>
  <div class='m-auto size-lg flex rounded-full bg-foreground'>
    {@render hole(26)}
  </div>
</div>
