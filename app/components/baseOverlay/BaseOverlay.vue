<template>
    <div class="base-overlay">
      <slot />
    </div>
</template>

<script setup lang="ts">
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
</style>