<template>
  <Transition  name="slide">
  <div class="base-popup-wrap" v-if="popupStore.getActivePopup.value.popupName === PopupName.Test" @click.self="popupStore.closePopup()">
    <div  :class="['base-popup']">
      {{isLoading}}
      <template v-if="isLoading">
        <AppLoader/>
      </template>

      <template v-else>
        <div class="base-popup__header">
          <slot name="header"/>
        </div>
        <div class="base-popup__content">
          <slot name="content"/>
        </div>
        <div class="base-popup__footer">
          <slot name="footer"/>
        </div>
      </template>

    </div>
  </div>
  </Transition>
</template>

<script setup lang="ts">
import {usePopupStore} from "~/composables/popupStore/usePopupStore";
import {PopupName} from "~/composables/popupStore/types";
import AppLoader from "~/components/AppLoader.vue";

const props = defineProps<{
  isLoading?: boolean;
}>()
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

.base-popup {
  background: #fff;
  min-height: 180px;
  width: 100%;
}
</style>