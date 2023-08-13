<template>
  <div class="table-wrapper">
    <div class="table-wrapper-shadow"></div>
    <div class="table-wrapper-container">
      <Header :fields="fields" :widthCalc="widthCalc" />
      <Body :fields="fields" :fieldData="fieldData" :widthCalc="widthCalc">
        <template v-for="(field, index) in scopedFilterData" #[field.scopeRender]="data">
          <slot :name="field.scopeRender" :rowData="data.rowData" :rowIndex="data.rowIndex"></slot>
        </template>
      </Body>
    </div>
  </div>
</template>
<script>
import { Header, Body } from './components'
export default {
  components: { Header, Body },
  props: {
    fields: {
      type: Object,
      default: () => []
    },
    fieldData: {
      type: Object,
      default: () => []
    }
  },

  data() {
    return {
      totalCustomWidth: this.fields.reduce((prev, curr) => (curr.width ? prev + curr.width : prev), 0)
    }
  },

  computed: {
    scopedFilterData() {
      return this.fields.filter((i) => i.hasOwnProperty('scopeRender') || i.scopeRender)
    }
  },

  methods: {
    widthCalc(column) {
      const columnWidth = column.width ? column.width + 'px' : 'max-content'
      return {
        width: columnWidth,
        'min-width': columnWidth
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.table-wrapper {
  position: relative;
  overflow: hidden;
  & * {
    box-sizing: border-box;
  }

  &-container {
    overflow-x: auto;
    overflow-y: hidden;
  }
}
</style>
