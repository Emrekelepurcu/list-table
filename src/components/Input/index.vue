<template>
  <div class="input-container">
    <label :for="idName" v-if="labelName" class="label color-secondary">{{ labelName }}</label>
    <div class="input-wrapper">
      <input
        :type="inputType"
        :class="inputClass"
        :id="idName"
        :name="idName"
        :value="value"
        :checked="checked"
        :readonly="readonly"
        :disabled="disabled"
        autocomplete="off"
        @input="submitInput($event)"
        @blur="blurInput($event)"
      />
      <div v-show="error" class="input-wrapper-error">
        <div class="error-text">
          {{ errorText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'customInput',
  props: {
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
    },
    inputType: {
      type: String,
      default: 'text'
    },
    checked: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    inputClass() {
      return {
        danger: this.error,
        txt: this.inputType === 'text' || this.inputType === 'number',
        checkedInputs: this.inputType === 'checkbox' || this.inputType === 'radio'
      }
    }
  },
  methods: {
    submitInput(event) {
      this.inputAction(event)
    },

    blurInput(event) {
      this.inputAction(event, 'blurInput')
    },

    inputAction(event, eventName = 'submitInput') {
      if (this.inputType === 'checkbox') {
        this.$emit(eventName, event.target.value, event.target.checked)
      } else {
        if (this.inputType === 'number') {
          this.$emit(eventName, Number(event.target.value))
        } else {
          this.$emit(eventName, event.target.value)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.input-container {
  display: flex;
  align-items: center;
}

input:disabled {
  background: rgba(128, 128, 128, 0.163) !important;
  color: rgb(128, 128, 128);
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
  width: 100%;
  outline: none;
  border-radius: var(--border-radius-small);
  border: 1px solid #cfdade;

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

.checkedInputs {
  width: 20px;
  height: 20px;
}
</style>
