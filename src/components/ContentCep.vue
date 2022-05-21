<template>
  <section class="contentCep h-full flex flex-wrap w-full">
    <!-- SearchCep -->
    <article class="w-full md:w-2/4">
      <SearchCep class="px-6 py-5" />
    </article>
    <!-- CardCep -->
    <article class="w-full md:w-2/4">
      <CardCep class="px-6 py-5" />
    </article>
  </section>
</template>

<script>
import SearchCep from "./SearchCep.vue";
import CardCep from "./CardCep.vue";
export default {
  components: { SearchCep, CardCep },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
