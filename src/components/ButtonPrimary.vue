<template>
  <button
    class="button w-full whitespace-nowrap leading-none text-white text-sm font-medium rounded-md bg-purple-700"
  >
    <i v-if="existIcon" class="bi font-bold mr-2" :class="`bi-${icon}`"></i>
    <span>{{ label }}</span>
  </button>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    label: String,
    icon: {
      type: String,
      default: () => "",
    },
  },
  setup(props) {
    // computed
    const existIcon = computed(() => props.icon !== "");

    return { existIcon };
  },
};
</script>

<style lang="scss" scoped>
.button {
  height: 40px;
  padding: 0 15px;
}
</style>
