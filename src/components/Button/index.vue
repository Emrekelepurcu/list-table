<template>
  <button type="button" :id="buttonName" :class="variants" v-bind="$attrs">
    <slot />
  </button>
</template>

<script>
import './_button.scss'
export default {
  name: 'button',
  props: {
    isDefaultClass: {
      type: Boolean,
      default: true
    },
    buttonName: {
      type: String,
      default: ''
    },
    transparent: { type: Boolean },
    noBorder: { type: Boolean },
    primary: { type: Boolean },
    secondary: { type: Boolean }
  },
  computed: {
    variants() {
      return {
        btn: this.isDefaultClass,
        [`btn-primary`]: this.primary,
        [`btn-secondary`]: this.secondary,
        [`btn-transparent`]: this.transparent,
        [`btn-no-border`]: this.noBorder
      }
    }
  }
}
</script>
