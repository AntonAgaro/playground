<template>
  <Transition  name="slide">
  <div
      class="base-popup-wrap"
       v-if="popupStore.getActivePopup.value.popupName === PopupName.Test" @click.self="popupStore.closePopup()"
  >

      <div  :class="['base-popup']" >
        <SmoothHeightTransition>

            <template v-if="isLoading">
              <AppLoader/>
            </template>

            <template v-else>
              <div class="base-popup__header">
                <slot name="header"/>
              </div>
              <div class="base-popup__content" :style="{ paddingBottom: mobileKeyboardHeight + 'px' }">
                <slot name="content"/>
              </div>
              <div class="base-popup__footer">
                <slot name="footer"/>
              </div>
            </template>



        </SmoothHeightTransition>
      </div>

  </div>
  </Transition>
</template>

<script setup lang="ts">
import {usePopupStore} from "~/composables/popupStore/usePopupStore";
import {PopupName} from "~/composables/popupStore/types";
import AppLoader from "~/components/AppLoader.vue";
import useVisualViewportDiff from "~/composables/useVisualViewportDiff";

const props = defineProps<{
  isLoading?: boolean;
}>()

const popupStore = usePopupStore()

//TODO - только на мобилке (а может только на ios)
const mobileKeyboardHeight = useVisualViewportDiff();

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
  align-items: flex-end;

  @media (min-width: 743px) {
    align-items: center;
  }
}

.base-popup {
  background: #fff;
  min-height: 180px;
  width: 100%;

  @media (min-width: 743px) {
    min-width: 320px;
    max-width: 768px;
  }
}
</style>