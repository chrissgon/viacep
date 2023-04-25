<template>
  <article class="itemCep">
    <!-- detailed -->
    <aside
      v-if="detailed"
      class="detailed flex flex-nowrap items-center my-5 bg-white roundend-md p-3"
    >
      <!-- icon -->
      <i class="text-2xl text-purple-700 mr-5 bi bi-geo-alt-fill"></i>
      <!-- info -->
      <div class="info w-full">
        <h4 class="text-lg font-medium">{{ info.logradouro }}</h4>
        <header class="flex">
          <span class="text-sm">{{ info.localidade }}, {{ info.uf }} </span>
          <span class="text-sm text-purple-600 ml-1"> - {{ info.cep }}</span>
        </header>
      </div>

      <!-- button -->
      <div
        class="action ml-5 p-5 px-3 bg-slate-50 cursor-pointer"
        @click="remove"
      >
        <i class="text-lg text-red-500 bi bi-trash-fill"></i>
      </div>
    </aside>
    <!-- simple -->
    <aside v-else class="simple flex items-center my-5">
      <!-- icon -->
      <i class="text-2xl text-purple-700 mr-5 bi bi-geo-alt-fill"></i>
      <!-- info -->
      <p class="font-bold">
        CEP <span class="text-slate-400">{{ info.cep }}</span>
      </p>
    </aside>
  </article>
</template>

<script setup>
const props = defineProps({
  zipcode: String,
  info: Object,
  detailed: Boolean,
});

// emits
const emit = defineEmits(["remove"]);

// methods
function remove() {
  emit("remove", props.zipcode);
}
</script>

<style scoped></style>
