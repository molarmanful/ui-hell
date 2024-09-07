import { getContext, setContext } from 'svelte'

interface Context<T> {
  get: () => T
  set: (v: T) => void
}

const context = <T>(s: string): Context<T> => {
  const k = Symbol(s)
  return {
    get: () => getContext(k),
    set: v => setContext(k, v),
  }
}

export const all = context<AllContext>('all')
