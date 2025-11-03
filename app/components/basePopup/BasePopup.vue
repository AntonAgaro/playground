<template>
  <BaseOverlay :isOpen="popupStore.getActivePopup.value.popupName === PopupName.Test" @click.self="popupStore.closePopup()"/>
  <div></div>
  <div></div>
  <div></div>

</template>

<script setup lang="ts">
import {usePopupStore} from "~/composables/popupStore/usePopupStore";
import {PopupName} from "~/composables/popupStore/types";

const popupStore = usePopupStore()
</script>

<style scoped>

</style>