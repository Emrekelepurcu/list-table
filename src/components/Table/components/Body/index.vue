<template>
  <div class="table-body">
    <div class="table-body-row" v-for="(data, index) in fieldData" :key="index">
      <div
        class="table-body-row-cell"
        v-for="(field, fieldIndex) in fields"
        :key="field.key + index + fieldIndex"
        :id="field.key + index + fieldIndex"
        :style="widthCalc(field)"
      >
        <div v-if="field.scopeRender">
          <slot :name="field.scopeRender" :rowData="data" :rowIndex="index"></slot>
        </div>
        <div v-else>
          {{ data[field.key] || '-' }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    fieldData: {
      type: Array,
      default: () => []
    },
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
.table-body {
  & * {
    box-sizing: border-box;
  }
  &-row {
    display: flex;
    border-left: 1px solid #00000017;
    &-cell {
      display: flex;
      border-right: 1px solid #00000017;
      border-bottom: 1px solid #00000017;
      word-break: break-all;
      padding: 9px 10px;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
