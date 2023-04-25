<template>
  <nav
    class="navBar overflow-y-auto h-screen fixed hidden sm:flex flex-col justify-between items-center sm:pt-20 bg-slate-100"
  >
    <div>
      <div
        class="w-full flex justify-center items-center px-5 py-3 pt-0 cursor-pointer"
      >
        <i class="text-lg text-slate-400 bi bi-search"></i>
      </div>
      <div
        class="w-full flex justify-center items-center px-5 py-3 cursor-pointer"
      >
        <i class="text-lg text-slate-400 bi bi-folder"></i>
      </div>
    </div>

    <div class="p-4 py-3 mb-3 cursor-pointer rounded-md bg-slate-800">
      <i class="text-white bi bi-sliders"></i>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
.navBar {
  max-width: 65px;
  min-width: 65px;
}
</style>
