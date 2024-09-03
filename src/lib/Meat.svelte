<script lang='ts'>
  import Beef from 'lucide-svelte/icons/beef'

  import { AspectRatio } from '$lib/components/ui/aspect-ratio'
  import { Button } from '$lib/components/ui/button'
  import * as Card from '$lib/components/ui/card'
  import * as Tooltip from '$lib/components/ui/tooltip'
</script>

<div class='items-start gap-8 py-13 container lg:flex lt-lg:gap-8'>
  <Card.Root>
    <Card.Header>
      <Card.Title>ANIMAL FARM</Card.Title>
      <Card.Description>... is not a children's book</Card.Description>
    </Card.Header>

    <Card.Content class='w-full lg:max-w-prose'>
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
      </p>
    </Card.Content>

    <Card.Footer class='flex justify-between'>
      <Button><Beef class='mr-2 h-4 w-4' /> COOK MY STEAK</Button>
    </Card.Footer>
  </Card.Root>

  <div class='flex-1 lg:(sticky top-22)'>
    <AspectRatio class='bg-muted' ratio={1}>
      <img
        class='h-full w-full rounded-md object-cover image-render-pixel saturate-200'
        alt='Food worker handling pink slime in a factory setting.'
        loading='lazy'
        src='/meatgrinder.gif'
      />
    </AspectRatio>
  </div>
</div>
