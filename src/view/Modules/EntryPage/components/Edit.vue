<template>
  <Drawer @close="closeDrawerAction">
    <template #drawerTitle>EDIT</template>
    <template #drawerBody>
      <div class="edit-container m-top-25">
        <Input labelName="ID" inputType="text" :value="editData.id" :disabled="true" :readonly="true" />
      </div>
      <div class="edit-container m-top-25">
        <Input labelName="CARID" inputType="text" :value="editData.carId" :disabled="true" :readonly="true" />
      </div>
      <div class="edit-container m-top-25">
        <Input
          inputType="number"
          labelName="HP"
          :value="editData.hp"
          :error="hpValidation.error"
          :errorText="hpValidation.errorText"
          @submitInput="
            (value) => {
              inputAction(value, 'hp')
            }
          "
        />
      </div>
      <div class="edit-container m-top-25">
        <CurrencyInput
          v-if="editData.price !== undefined"
          v-model="editData.price"
          labelName="Price"
          :error="priceValidation.error"
          :errorText="priceValidation.errorText"
          :options="{
            currency: currencySettings.currencyType,
            locale: currencySettings.convertedCountry,
            hideCurrencySymbolOnFocus: false,
            hideGroupingSeparatorOnFocus: false,
            hideNegligibleDecimalDigitsOnFocus: false
          }"
        />
      </div>
      <div class="edit-container m-top-25">
        <Input
          inputType="checkbox"
          labelName="In Stock"
          value="inStock"
          :checked="editData.inStock"
          @submitInput="
            (value, checked) => {
              inputAction(checked, 'inStock')
            }
          "
        />
      </div>
      <div class="edit-container color-settings radios m-top-25">
        <label class="label color-black color-settings-label"> Color Settings </label>
        <div class="color-settings-colors">
          <Input
            class="m-top-10"
            v-for="colors in colorData"
            inputType="radio"
            :labelName="colors.colorName"
            :value="colors.key"
            :checked="colors.key === editData.color"
            @submitInput="
              (value) => {
                inputAction(value, 'color')
              }
            "
          />
        </div>
      </div>
    </template>
    <template #drawerFooter>
      <div class="edit-footer-container">
        <Button class="drawer-button m-right-10" primary @click="closeDrawerAction">Cancel</Button>
        <Button :disabled="validations" class="drawer-button m-left-10" primary @click="editAction">Save</Button>
      </div>
    </template>
  </Drawer>
</template>
<script>
import { Button, Drawer, Input, CurrencyInput } from '@components'
import { colorData } from './constants'
import { currencySettings } from '@constants'

export default {
  components: { Drawer, Input, CurrencyInput, Button },

  data() {
    return {
      editData: {},
      colorData,
      currencySettings
    }
  },

  props: {
    selectedData: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    validations() {
      return this.hpValidation.error || this.priceValidation.error
    },

    hpValidation() {
      return {
        error: !this.editData.hp || this.editData.hp < 100 || this.editData.hp > 550,
        errorText: !this.editData.hp
          ? 'HP cannot be empty'
          : this.editData.hp < 100 || this.editData.hp > 550
          ? 'HP need to be range of 100-550'
          : ''
      }
    },

    priceValidation() {
      return {
        error: !this.editData.price,
        errorText: !this.editData.price ? 'Price cannot be empty' : ''
      }
    }
  },

  methods: {
    closeDrawerAction(status = false) {
      this.$emit('close', status)
    },

    closeDrawerActions(status = false) {
      console.log('testttt')
    },

    inputAction(value, key) {
      if (!key) return
      this.editData[key] = value
    },

    editAction() {
      this.$emit('editAction', this.editData)
    }
  },

  mounted() {
    this.editData = { ...this.selectedData }
  }
}
</script>
<style lang="scss" scoped>
.edit-container {
  &.radios {
    display: flex;
    flex-wrap: wrap;
  }
}

.edit-footer-container {
  display: flex;
  width: 100%;
  .drawer-button {
    width: 50%;
  }
}

.color-settings {
  &-colors {
    display: flex;
    flex-wrap: wrap;
    .input-container {
      margin-left: 20px;
    }
  }
}
</style>
