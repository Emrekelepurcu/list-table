<template>
  <div class="d-flex f-direction-column justify-center empty-state m-top-20 m-bottom-20">
    <h2 id="empty-state-title" class="color-secondary font-weight-bolder">{{ title }}</h2>
    <p id="empty-state-desc" class="color-primary font-weight-bolder m-top-15">{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: 'empty-state',
  props: {
    title: {
      type: String,
      default: 'Data Empty'
    },
    desc: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.empty-state {
  text-align: center;
}
</style>
