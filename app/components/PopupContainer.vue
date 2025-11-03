<template>
  <Transition  name="fade">
  <BaseOverlay v-if="isAnyOpen" />
  </Transition>

  <Transition  name="slide">
    <component
        v-if="activePopupComponent"
        :is="activePopupComponent"
        :key="popupStore.getActivePopup.value.popupName"
    />
  </Transition>

</template>

<script setup lang="ts">
import {PopupName} from "~/composables/popupStore/types";
import {usePopupStore} from "~/composables/popupStore/usePopupStore";

const popupStore = usePopupStore()

const isAnyOpen = computed(() => !!popupStore.getActivePopup.value?.popupName)

// Мапим имя попапа на ленивый импорт
const popupComponents: Partial<Record<PopupName, Component>> = {
  [PopupName.Test]: defineAsyncComponent(() => import('~/components/popups/TestPopup.vue'))
};

const activePopupComponent = computed(() => {
  const active = popupStore.getActivePopup.value?.popupName;
  return active ? popupComponents[active] : null;
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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

</style>