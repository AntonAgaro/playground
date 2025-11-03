<template>
  <BaseOverlay :isOpen="popupStore.getActivePopup.value.popupName === PopupName.Test" />
  <Transition  name="slide">
  <div class="base-popup-wrap" v-if="popupStore.getActivePopup.value.popupName === PopupName.Test" @click.self="popupStore.closePopup()">
    <div   :class="['base-popup']">
      <div class="base-popup__header">
        <slot name="header"/>
      </div>
      <div class="base-popup__content">
        <slot name="content"/>
      </div>
      <div class="base-popup__footer">
        <slot name="footer"/>
      </div>
    </div>
  </div>
  </Transition>
</template>

<script setup lang="ts">
import {usePopupStore} from "~/composables/popupStore/usePopupStore";
import {PopupName} from "~/composables/popupStore/types";

const popupStore = usePopupStore()
</script>

<style lang="scss" scoped>
.base-popup-wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999999;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 743px) {
    align-items: flex-end;
  }
}

.slide-enter-active,
.slide-leave-active {
  @media (max-width: 743px) {
    transform: translateY(0);
    transition: all 0.3s ease;
  }

}

.slide-enter-from,
.slide-leave-to {
  @media (max-width: 743px) {
    transform: translateY(100%);
  }
}

.base-popup {
  background: #fff;
  min-height: 180px;
  width: 100%;
}
</style>