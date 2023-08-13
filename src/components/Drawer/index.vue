<template>
  <div class="drawer-container">
    <div class="drawer-wrapper">
      <div class="drawer-content">
        <div class="drawer-content-header">
          <div class="drawer-content-header-close" @click="closeAction">X</div>
          <div class="drawer-content-header-title">
            <slot name="drawerTitle"></slot>
          </div>
        </div>
        <div class="drawer-content-body">
          <slot name="drawerBody"></slot>
        </div>
        <div class="drawer-content-footer">
          <slot name="drawerFooter"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},

  methods: {
    closeAction() {
      console.log('closeeee')
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss" scoped>
.drawer {
  &-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--z-index-infinity);
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: flex-end;
  }

  &-wrapper {
    position: absolute;
    height: 100%;
    background-color: var(--color-white);
    padding: 0 30px;
  }

  &-content {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 100%;

    @media only screen and (max-width: 600px) {
      width: 100%;
    }

    &-header {
      font-size: var(--font-size-xl);
      min-height: 70px;
      display: flex;
      align-items: center;
      &-close {
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: var(--font-size-xl);
        cursor: pointer;
      }
    }

    &-footer {
      display: flex;
      justify-content: center;
      margin-top: auto;
      margin-bottom: 15px;
    }
  }
}
</style>
