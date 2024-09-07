<script lang='ts'>
  import { Foreword } from '$lib'
  import { Title } from '$lib/components'
  import { Button } from '$lib/components/ui/button'
</script>

<Title />

<Foreword />

<div class='align-center flex text-center h-svh container'>
  <div class='sticky top-27 m-auto'>
    <h1>
      CRAZY STUFF
      <br />
      STARTS HERE
    </h1>
    <p class='text-lead'>
      (MORE OR LESS)
    </p>

    <div class='mt-5 flex flex-col gap-2'>
      {#each [3, 2, 1] as n}
        <div class='flex justify-center gap-2'>
          {#each Array.from({ length: n }) as _}
            <Button href='/meat'>GO</Button>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</div>
