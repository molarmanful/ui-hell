<script lang='ts'>
  import * as FormPrimitive from 'formsnap'

  import { cn } from '$lib/utils.js'

  type $$Props = FormPrimitive.FieldErrorsProps & {
    errorClasses?: string | undefined | null
  }

  let className: $$Props['class']
  export { className as class }
  export let errorClasses: $$Props['class']
</script>

<FormPrimitive.FieldErrors
  class={cn('text-destructive text-sm font-medium', className)}
  {...$$restProps}
  let:errorAttrs
  let:errors
  let:fieldErrorsAttrs
>
  <slot {errorAttrs} {errors} {fieldErrorsAttrs}>
    {#each errors as error}
      <div {...errorAttrs} class={cn(errorClasses)}>{error}</div>
    {/each}
  </slot>
</FormPrimitive.FieldErrors>
