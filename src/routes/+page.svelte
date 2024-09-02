<script lang='ts'>
  import Beef from 'lucide-svelte/icons/beef'

  import { Button } from '$lib/components/ui/button'
  import * as Card from '$lib/components/ui/card'
  import * as Tooltip from '$lib/components/ui/tooltip'
</script>

<svelte:head>
  <title>ui-hell</title>
</svelte:head>

<div class='items-start gap-13 py-8 container lg:flex'>
  <div class='pb-8 text-right lg:(sticky top-22)'>
    <h1 class='text-[25vw] leading-[.8] lg:text-[15vw] sm:text-[28vw]'>
      WHAT
      <br />
      THE
      <br />
      <span class='text-destructive'>HELL?</span>
    </h1>
  </div>

  <div class='flex flex-col gap-8'>
    <article>
      <h2>WELCOME TO UI-HELL</h2>

      <p>
        What follows is the web design equivalent of gore. It's frankly
        atrocious what They&trade; let us humans do with the Internet.
      </p>
    </article>

    <Card.Root>
      <Card.Header>
        <Card.Title>ANIMAL FARM</Card.Title>
        <Card.Description>is not a children's book</Card.Description>
      </Card.Header>

      <Card.Content>
        <p>
          The <strong>BIG WEB</strong> is an industrial meatgrinder. The input is
          meat, and the output is... meat adjacent.
        </p>

        <p>
          I like my steak medium-rare. The <strong>BIG WEB</strong> is
          well-done &mdash; and not the good kind. Back in college, the
          cafeteria grill <em>said</em> they served medium steaks at minimum.
          In reality, they served steaks that were well-done at best, and fully
          charred at worst. Aside from snacks and fruits throughout the day, it
          was my only real meal. I only had to pay 40AED (or the campus
          currency equivalent); yet even then, I felt ripped off.
        </p>

        <p>
          It wasn't the even the cooks' faults. The Higher-Ups&trade; decreed
          that, for safety reasons, all steaks must be cooked until the juicy
          <span class='text-red'>red</span> innards were purged. Ah yes, our
          college cafeteria was <em>sooo</em> well-known for its strict
          adherence to safety that there were food poisoning outbreaks from
          acai bowls served at the cafeteria. Rumor has it that the bowls were
          made with stale ingredients &mdash; meant to be thrown out as food
          waste &mdash; but repurposed once more for human consumption. You
          didn't hear it from me though.
        </p>

        <p>
          Shoutout to the homies
          <Tooltip.Root>
            <Tooltip.Trigger>
              <s class='bg-foreground'>REDACTED</s>
            </Tooltip.Trigger>
            <Tooltip.Content>
              <p>I ain't no narc</p>
            </Tooltip.Content>
          </Tooltip.Root>
          and
          <Tooltip.Root>
            <Tooltip.Trigger>
              <s class='bg-foreground'>REDACTED</s>
            </Tooltip.Trigger>
            <Tooltip.Content>
              <p>Snitches get stitches</p>
            </Tooltip.Content>
          </Tooltip.Root>
          for secretly cooking me medium-rares when the supervisors weren't
          around.
        </p>

        <p>
          I recognize that this rant comes from a place of privilege. Most
          people will never have the opportunity to even choose how they want
          their steak cooked, let alone what meats they want to eat. You may be
          thinking, "This spoiled brat motherfucker is yapping about the most
          inconsequential shit!" And I would be inclined to agree.
        </p>
      </Card.Content>

      <Card.Footer class='flex justify-between'>
        <Button><Beef class='mr-2 h-4 w-4' /> COOK MY STEAK</Button>
      </Card.Footer>
    </Card.Root>
  </div>
</div>
