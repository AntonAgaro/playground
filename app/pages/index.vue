<template>
  <div class="index-page">
    <h1>Nuxt Playground</h1>
    <button @click="showPopup">OpenPopup</button>
    <TestPopup/>
  </div>
</template>

<script setup lang="ts">
import {usePopupStore} from "~/composables/popupStore/usePopupStore";
import {PopupName} from "~/composables/popupStore/types";
import TestPopup from "~/components/popups/TestPopup.vue";

const popupStore = usePopupStore()
function showPopup() {
popupStore.showPopup(PopupName.Test)
  console.log(popupStore.getActivePopup.value)
}
</script>

<style scoped lang="scss">

</style>