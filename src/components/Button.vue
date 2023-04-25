<template>
  <button
    class="button w-full whitespace-nowrap leading-none text-white text-sm font-medium rounded-md bg-purple-700"
  >
    <slot></slot>
  </button>
</template>

<script setup>
</script>

<style scoped>
.button {
  height: 40px;
  padding: 0 15px;
}
</style>
