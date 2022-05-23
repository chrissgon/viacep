<template>
  <section
    class="headerBar w-full max-h-full sm:max-h-16 sm:fixed flex flex-col-reverse sm:flex-row items-center sm:justify-between px-2 text-white whitespace-nowrap bg-purple-700"
  >
    <!-- title -->
    <article class="title w-full max-w-sm flex py-2 sm:py-0 mt-3 sm:mt-0">
      <img class="px-2" src="@/assets/logo.svg" alt="Logo ViaCep" />

      <div
        class="w-full flex flex-col justify-center px-3 py-1 ml-3 border-2 leading-none rounded-md"
      >
        <h4 class="text-sm">Pirituba - São Paulo</h4>
        <span class="text-xs text-slate-200">VTEX</span>
      </div>
    </article>
    <!-- info -->
    <aside class="info flex justify-end items-center">
      <!-- notifications -->
      <i
        class="notifications text-lg leading-none p-5 border-r-2 cursor-pointer bi bi-bell"
      ></i>

      <!-- user -->
      <div class="flex items-center ml-5 cursor-pointer">
        <h4 class="text-sm font-medium whitespace-nowrap">Olá, Christopher</h4>
        <div
          class="flex justify-center items-center p-2 px-3 rounded-full ml-3"
          style="background: rgba(255, 255, 255, 0.5)"
        >
          <i class="bi bi-person"></i>
        </div>
      </div>
    </aside>
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.headerBar {
  .title img {
    width: 55px;
  }

  .info {
    max-height: 65px;
  }

  .notifications {
    border-color: rgba(255, 255, 255, 0.2);
  }
}
</style>
