<template>
  <section>
    <!-- NavBar -->
    <NavBar class="z-10" />
    <!-- HeaderBar -->
    <HeaderBar class="z-20" />
    <main class="md:h-screen z-0 sm:pt-16 sm:pl-16">
      <!-- ContentCep -->
      <ContentCep />
    </main>
  </section>
</template>

<script setup>
import HeaderBar from "./components/HeaderBar.vue";
import NavBar from "./components/NavBar.vue";
import ContentCep from "./components/ContentCep.vue";
</script>

<style scoped></style>
