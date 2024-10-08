<script lang='ts'>
  import Play from 'lucide-svelte/icons/play'

  import { base } from '$app/paths'
  import { Title } from '$lib/components'
  import { Button } from '$lib/components/ui/button'
</script>

<Title />

<div class='relative items-start py-13 container lg:(flex [&>*]:w-1/2 divide-x)'>
  <div class='pb-8 lg:(sticky top-22 pr-8 text-right) lt-lg:(min-h-69lvh flex items-center justify-center text-center)'>
    <h1 class='text-25vw leading-[.8] 2xl:text-58.5 lg:text-37 sm:text-45 xl:text-48'>
      WHAT
      <br />
      THE
      <br />
      <span class='text-destructive'>HELL?</span>
    </h1>
  </div>

  <article class='lg:pl-8'>
    <h2>FOREWORD</h2>

    <p class='text-lead'>
      Dear Visitor,
    </p>

    <p>
      Hi, I'm Ben. I'm a creative technologist, which basically means I'm an
      artist, a programmer, and everything in between. One of the things I love
      to do as part of my practice is to make art from websites &mdash; web
      art.
    </p>

    <p>
      I have a morbid fascination with weird websites, especially those with
      styles deemed "unconventional" by the masses. What initially inspired me
      this time, however, was the opposite: tools and practices adopted by
      designers, developers, and engineers behind the <strong>BIG WEB</strong>.
      Microservices Architecture&trade;; Serverless Computing&trade;; Software
      as a Service&trade;. Technologies that every respectable company, from
      the behemothest behemoths to the most ungerminated startups, seeks to
      exploit in their quest for the Holy Grail of Rapid Infinite Scaling.
    </p>

    <p>
      Unfortunately, scaling isn't free. It's <em>very</em> far from free.
    </p>

    <p>
      The giants atop the <strong>BIG WEB</strong> have long been too giant for
      their own good, let alone ours. And yet even they still grow. When
      companies sacrifice to the altar of greed such petty concerns as "ethical
      responsibility" and "not doing shitty things," we suffer. Cobalt mining,
      noise pollution, body dysphoria, disinformation &mdash; the post-digital
      age is miserable. What's worse is that:
    </p>

    <ol>
      <li>
        Most of us benefit in some way from the suffering of others through
        convenience, financial gain, or entertainment.
      </li>
      <li>
        It's far easier to just dissociate from or outright ignore the
        suffering in favor of the perceived benefits.
      </li>
    </ol>

    <p>
      This website began, like most of my projects, as a little experiment in
      creating chaotic generative art from structured UI components; a "bullet
      hell" for UI, if you will. But from the start, I found that this format
      also served as a nice cathartic outlet for my long-standing frustrations
      and annoyances with the <strong>BIG WEB</strong>. And over time, the
      project has evolved to reflect this larger personal significance.
    </p>

    <p>
      It should be noted that I don't have solutions in mind to address the
      issues I bring up here. But why should I? After all:
    </p>

    <ol>
      <li>
        These issues have long passed the point of solvability for one person
        alone (barring extenuating factors and drastic measures).
      </li>
      <li>
        The Internet userbase &mdash; and arguably, society as a whole &mdash;
        is too fractured and lacking in empathy to even begin effecting
        meaningful change.
      </li>
      <li>
        There seems to be this implicit stigma around complaining as
        "unproductive." But in the face of such undesirable yet inescapable
        shifts, I would argue that complaining is actually <em>more</em>
        productive than the supposed "alternatives."
      </li>
    </ol>

    <p>
      I still take full responsibility for all views expressed on this website.
      Just don't expect me to be the Second Coming of Jesus Christ or the
      15<sup>th</sup> Dalai Lama.
    </p>

    <p>
      It's pretty insane to see how capable browsers have become at handling
      these website thingamabobs; the evolution of web standards over time has
      allowed for a great degree of freedom in how I approach web art. Freedom
      is great, but not everyone might appreciate what I've made. This website
      may contain mildly disturbing content including &mdash; but not limited
      to &mdash; the following:
    </p>

    <ul>
      <li>Expletives</li>
      <li>Dumb Memes</li>
      <li>UI/UX travesties</li>
      <li>Half-incoherent ramblings</li>
      <li>Anti-establishment rhetoric</li>
    </ul>

    <p>
      If any of the above disturb you, then it may do you well to leave this site now &mdash; no hard feelings!
      Otherwise...
    </p>

    <p>
      Welcome to <strong>ui-hell</strong>; please enjoy your stay.
    </p>

    <p>
      <Button href='https://bennyboy.tech' target='_blank' variant='outline'>&mdash; Ben Pang</Button>
    </p>
  </article>
</div>

<div class='align-center flex text-center h-lvh container'>
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
            <Button href='{base}/meat' variant='outline'><Play class='size-4' /><span class='sr-only'>Play</span></Button>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</div>
