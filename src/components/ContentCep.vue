<template>
  <section class="w-full md:h-full flex flex-wrap">
    <!-- SearchCep -->
    <article class="w-full md:w-2/4 px-6 py-5">
      <!-- search -->
      <header>
        <h4 class="text-purple-500 text-lg font-medium">Busca de CEP's</h4>
        <div class="flex gap-4 flex-wrap sm:flex-nowrap mt-3">
          <!-- input -->
          <label class="w-full">
            <input
              v-model="input"
              class="w-full border-2 rounded-md text-sm pl-3 m-0 mb-3 sm:mr-2 sm:mb-0 focus:border-purple-700"
              type="text"
              placeholder="Insira o CEP"
            />
            <span
              v-if="error"
              v-text="error"
              class="text-red-500 text-xs font-medium ml-3"
            ></span>
          </label>
          <!-- button -->

          <Button @click="add" class="w-fit">
            Adicionar Endereço
            <i class="bi bi-plus-lg"></i>
          </Button>
        </div>
      </header>
      <!-- list -->
      <article class="mt-8">
        <div v-for="info in list">
          <ItemCep :info="info" />
        </div>
      </article>

      <aside class="mt-5 md:m-0 md:fixed bottom-5 right-1/2">
        <!-- button -->
        <Button @click="generate">Gerar endereços</Button>
      </aside>
    </article>

    <!-- CardCep -->
    <article class="w-full md:w-2/4 px-6 py-5 bg-slate-50">
      <!-- list -->
      <article>
        <div v-for="(info, zipcode) in generated">
          <ItemCep @remove="remove" :zipcode="zipcode" :info="info" detailed />
        </div>
      </article>
    </article>
  </section>
</template>
<script setup>
import { ref, reactive, computed } from "vue";
import { ZipcodeService } from "../service/zipcode";
import { setStorage, getStorage } from "../service/storage";

import Button from "./Button.vue";
import ItemCep from "./ItemCep.vue";

// computed
const list = computed(() => service.list);

// data
const LABEL_STORAGE = "viacep";
const service = reactive(new ZipcodeService(getStorage(LABEL_STORAGE)));
const input = ref("");
const generated = ref({});
const error = ref("");

// methods
async function add() {
  try {
    await service.add(input.value);
    setStorage(LABEL_STORAGE, service.get());
    reset();
  } catch (e) {
    error.value = e.message;
  }
}
function reset() {
  input.value = "";
  error.value = "";
}
function generate() {
  generated.value = { ...service.get() };
}
function remove(zipcode) {
  service.remove(zipcode);
  generate();
  setStorage(LABEL_STORAGE, service.get());
}
</script>

<style scoped>
input {
  height: 40px;
  outline: none !important;
}
</style>
