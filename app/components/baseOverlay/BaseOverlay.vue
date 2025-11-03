<template>
  <Transition  name="fade">
    <div class="base-overlay" v-if="isOpen">
      <slot />
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  isOpen: boolean;
}>();

</script>

<style lang="scss" scoped>
.base-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(6px);
  background-color: #0009;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>