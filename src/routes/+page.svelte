<script lang='ts'>
  import { Foreword } from '$lib'
  import { Button } from '$lib/components/ui/button'
</script>

<svelte:head>
  <title>ui-hell</title>
</svelte:head>

<Foreword />

<div class='align-center flex text-center h-svh container'>
  <div class='sticky top-27 m-auto'>
    <h1>
      CRAZY STUFF STARTS HERE
      <br />
      (MORE OR LESS)
    </h1>
    <Button class='mt-8 origin-t scale-200' href='/meat'>START</Button>
  </div>
</div>
