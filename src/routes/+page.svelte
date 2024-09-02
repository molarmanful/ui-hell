<script lang='ts'>
  import Beef from 'lucide-svelte/icons/beef'

  import { Button } from '$lib/components/ui/button'
  import * as Card from '$lib/components/ui/card'
</script>

<svelte:head>
  <title>ui-hell</title>
</svelte:head>

<div class='lg:flex container gap-14 py-8'>
  <div class='text-right'>
    <h1 class='text-[25vw] sm:text-[28vw] lg:text-[15vw] leading-[.8]'>
      WHAT
      <br />
      THE
      <br />
      <span class='text-destructive'>HELL?</span>
    </h1>
  </div>

  <Card.Root class='flex-1'>
    <Card.Header>
      <Card.Title>PATROLLING THE BIG WEB</Card.Title>
      <Card.Description>makes me wish for a nuclear winter.</Card.Description>
    </Card.Header>

    <Card.Content>
      <p>
        The <strong>BIG WEB</strong> is an industrial meatgrinder. The input is
        meat, and the output is meat adjacent.
      </p>

      <p>
        I like my steak medium-rare. The <strong>BIG WEB</strong> is well-done.
        Not the good kind. Back in college, the cafeteria grill <em>said</em>
        they served medium steaks at minimum. In reality, they served steaks
        that were well-done at best, and fully charred at worst. It wasn't the
        cooks' faults either; the Higher-Ups&trade; decreed that, for safety
        reasons, all steaks must be cooked until the juicy <span
          class='text-red-400'>red</span> innards were purged. Ah yes, our
        college cafeteria was <em>sooo</em> well-known for its strict adherence
        to safety that there were food poisoning outbreaks from acai bowls
        served at the cafeteria. Rumor has it that the bowls were made with
        stale ingredients &mdash; meant to be thrown out as food waste &mdash;
        but repurposed once more for human consumption. You didn't hear it from
        me though.
      </p>
    </Card.Content>

    <Card.Footer class='flex justify-between'>
      <Button variant='outline'><Beef class='mr-2 h-4 w-4' /> COOK MY DAMN STEAK</Button>
    </Card.Footer>
  </Card.Root>
</div>
