<template>
  <div class="input-container">
    <label :for="idName" v-if="labelName" class="label color-secondary">{{ labelName }}</label>
    <div class="input-wrapper">
      <input class="txt" ref="inputRef" type="text" />
      <div v-show="error" class="input-wrapper-error">
        <div class="error-text">
          {{ errorText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCurrencyInput } from 'vue-currency-input'

export default {
  name: 'CurrencyInput',
  props: {
    modelValue: Number,
    options: Object,
    value: {
      default: null
    },
    idName: {
      type: String,
      default: 'custom-input'
    },
    labelName: {
      type: String,
      default: ''
    },
    error: {
      type: Boolean,
      default: false
    },
    errorText: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const { inputRef } = useCurrencyInput(props.options)
    return { inputRef }
  }
}
</script>

<style lang="scss" scoped>
.input-container {
  display: flex;
  align-items: center;
}

.input-wrapper {
  width: 100%;
  position: relative;

  &-error {
    margin-top: 4px;
    height: 20px;

    .error-text {
      position: absolute;
      color: var(--color-danger);
    }
  }
}
.txt {
  width: 96%;
  outline: none;
  border: 1px solid #cfdade;
  border-radius: var(--border-radius-small);
  height: 40px;
  padding-left: 10px;
  &:focus {
    border-color: var(--color-primary) !important;
  }
  &.danger {
    border-color: var(--color-danger);
  }
}

.label {
  color: var(--color-black);
  margin-right: 15px;
  min-width: 70px;
  display: flex;
  justify-content: flex-start;
}
</style>
