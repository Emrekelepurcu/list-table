<template>
  <div class="table-container" v-if="carData.length && !loading">
    <Table :fields="fields" :fieldData="carData">
      <template #carColor="data">
        <div class="color-type-box">
          {{ validColorChecker({ color: data.rowData.color }) ? data.rowData.color : 'Invalid Color Type' }}
          <div class="color-type-box-color" :style="{ backgroundColor: data.rowData.color }"></div>
        </div>
      </template>
      <template #price="data">
        {{ formatCurrency({ number: data.rowData.price }) }}
      </template>
      <template #inStock="data">
        {{ data.rowData.inStock ? 'In stock' : 'Out of stock' }}
      </template>
      <template #edit="data">
        <Button primary @click="editDrawerAction(data.rowData)">Edit</Button>
      </template>
    </Table>
    <Edit v-if="drawerStatus" :selectedData="selectedData" @close="closeDrawerAction(false)" @editAction="editAction" />
  </div>
  <div class="loading" v-else-if="loading">Loading...</div>
  <EmptyState v-else />
</template>
<script>
import { Table, Button, Drawer, Input, EmptyState } from '@components'
import Edit from './components/Edit'

import { getCarList } from '@services/carListServices'
import { fields } from './constants'

import { formatCurrency } from '@utils/currencyFormatter'
import { validColorChecker } from '@utils/validColorChecker'

export default {
  components: { Table, Button, Drawer, Input, Edit, EmptyState },
  data() {
    return {
      drawerStatus: false,
      loading: false,
      formatCurrency,
      validColorChecker,
      fields,
      selectedData: {},
      carData: []
    }
  },
  methods: {
    editDrawerAction(data) {
      if (!data) return
      this.selectedData = { ...data }
      this.closeDrawerAction(true)
    },

    closeDrawerAction(status = false) {
      this.drawerStatus = status

      if (!status) {
        this.selectedData = {}
      }
    },

    colorValidChecker(color) {
      const c = new Option().style
      c.color = color
      return c.color === color
    },

    editAction(editedData) {
      let editData = this.carData.find((i) => i.id === editedData.id)
      Object.assign(editData, editedData)
      this.closeDrawerAction()
    }
  },
  async mounted() {
    this.loading = true
    const carDataList = await getCarList()
    if (carDataList.status === 200) this.carData = carDataList?.data?.carList
    this.loading = false
  }
}
</script>
<style lang="scss" scoped>
.table-container {
  width: 100%;
  display: flex;
    align-items: center;
    justify-content: center;

  .color-type-box {
    display: flex;
    width: 100%;

    &-color {
      height: 20px;
      width: 20px;
      border-radius: 100%;
      margin-left: 5px;
    }
  }
}
</style>
