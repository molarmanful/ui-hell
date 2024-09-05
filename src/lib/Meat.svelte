<script lang='ts'>
  import Megaphone from 'lucide-svelte/icons/megaphone'

  import { ARSkel, Slop, Waltuh } from '$lib/components'
  import * as Alert from '$lib/components/ui/alert'
  import * as Card from '$lib/components/ui/card'
  import * as Tooltip from '$lib/components/ui/tooltip'

  let loaded = $state(false)
</script>

<div class='flex flex-col items-start gap-8 py-13 container lg:flex-row-reverse lg:[&>*]:w-1/2'>
  <div class='w-full lg:(sticky top-22)'>
    <ARSkel>
      <img
        class="{loaded ? 'opacity-100' : 'opacity-0'} h-full w-full rounded-lg bg-muted object-cover image-render-pixel saturate-200 transition-opacity-200"
        alt='Food worker handling pink slime in a factory setting.'
        loading='lazy'
        onload={() => loaded = true}
        src='/meatgrinder.gif'
      />
    </ARSkel>
  </div>

  <Card.Root>
    <Card.Header>
      <Card.Title tag='h1'>ANIMAL FARM</Card.Title>
      <Card.Description>is not a children's book.</Card.Description>
    </Card.Header>

    <Card.Content>
      <p>
        The <strong>BIG WEB</strong> is an industrial meatgrinder.
      </p>

      <p>
        The input is meat, and the output is... meat adjacent.
      </p>

      <p>
        I like my steak medium-rare. The <strong>BIG WEB</strong> is well-done
        &mdash; and not the good kind. Back in college, the cafeteria grill
        <em>said</em> they served medium steaks at minimum. In reality, they
        served steaks that were well-done at best, and fully charred at worst.
        Aside from snacks and fruits throughout the day, it was my only real
        meal. I only had to pay 40AED (or the campus currency equivalent); yet
        even then, I felt ripped off.
      </p>

      <p>
        It wasn't the even the cooks' faults. The Higher-Ups&trade; decreed
        that, for safety reasons, all steaks must be cooked until the juicy
        <span class='text-destructive'>red</span> innards were purged. Ah yes,
        our college cafeteria was <em>sooo</em> well-known for its strict
        adherence to safety that there were food poisoning outbreaks from acai
        bowls served at the cafeteria. Rumor has it that the bowls were made
        with stale ingredients &mdash; meant to be thrown out as food waste
        &mdash; but repurposed once more for human consumption. You didn't hear
        it from me though.
      </p>

      <Alert.Root class='mt-6 rounded-md'>
        <Megaphone class='size-4' />
        <Alert.Title>Special shoutout</Alert.Title>
        <Alert.Description>
          to the homies
          <Tooltip.Root>
            <Tooltip.Trigger>
              <s class='bg-current'>REDACTED</s>
            </Tooltip.Trigger>
            <Tooltip.Content>
              <p>I ain't no narc</p>
            </Tooltip.Content>
          </Tooltip.Root>
          and
          <Tooltip.Root>
            <Tooltip.Trigger>
              <s class='bg-current'>REDACTED</s>
            </Tooltip.Trigger>
            <Tooltip.Content>
              <p>Snitches get stitches</p>
            </Tooltip.Content>
          </Tooltip.Root>
          for secretly cooking me medium-rares when the supervisors weren't
          around.
        </Alert.Description>
      </Alert.Root>

      <p>
        Anyways, back to the meat grinder we go. As nutritious bags of meat,
        it's only natural that we too shall extrude ourselves. And what comes
        out?
      </p>

      <Slop clazz='mt-6' />

      <p>
        Stringy, squishy, slimy slop. Sinews waterfalling from every orifice,
        flowing in fleshy waves down the conveyor belt.
      </p>

      <p>
        Oh, you thought we were having steak? Sorry buddy, you're about a
        decade too late. For us lowly freeloaders, slop is all the sustenance
        that the <strong>BIG WEB</strong> provides these days.
      </p>

      <p>
        Now <strong>eat</strong>.
      </p>
    </Card.Content>

    <Card.Footer class='flex-wrap justify-between'>
      <Waltuh />
    </Card.Footer>
  </Card.Root>
</div>
