<template>
  <section class="cardCep w-full min-h-full bg-slate-50">
    <!-- list -->
    <article>
      <div v-for="(zipCode, i) in state.zipCodeCard" :key="i">
        <!-- ItemCep -->
        <ItemCep :detailed="true" :zipCode="zipCode" />
      </div>
    </article>
  </section>
</template>

<script>
import { useStore } from "vuex";
import ItemCep from "@/components/ItemCep.vue";
export default {
  components: { ItemCep },
  setup() {
    // data
    const { state } = useStore();
    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped></style>
