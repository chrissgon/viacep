<template>
  <section style="height: 100vh">
    <!-- NavBar -->
    <NavBar class="z-10" />
    <!-- HeaderBar -->
    <HeaderBar class="z-20" />
    <main class="h-full z-0 sm:pt-16 sm:pl-16">
      <!-- ContentCep -->
      <ContentCep />
    </main>
  </section>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import NavBar from "@/components/NavBar.vue";
import ContentCep from "@/components/ContentCep.vue";
export default {
  components: { HeaderBar, NavBar, ContentCep },
  name: "App",
};
</script>

<style lang="scss"></style>
