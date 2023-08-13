<template>
  <div class="table-header">
    <div
      class="table-header-row"
      v-for="(field, index) in fields"
      :key="field.key + index"
      :id="field.key + index"
      :style="widthCalc(field)"
    >
      {{ field.title }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    fields: {
      type: Array,
      default: () => []
    },
    widthCalc: {
      type: Function,
      default: () => {}
    }
  }
}
</script>
<style lang="scss" scoped>
$table-color: #eaf1fe;

.table-header {
  & * {
    box-sizing: border-box;
  }
  display: flex;
  border-left: 1px solid $table-color;
  &-row {
    border-right: 1px solid $table-color;
    border-bottom: 1px solid $table-color;
    border-top: 1px solid $table-color;
    padding: 5px;
    background: #eaf1fe;
    font-weight: 600;
  }
}
</style>
