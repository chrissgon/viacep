<template>
  <section class="searchCep">
    <AlertMessage ref="alert" />
    <!-- search -->
    <header>
      <h4 class="text-purple-500 text-lg font-medium">Busca de CEP's</h4>
      <div class="flex flex-wrap sm:flex-nowrap mt-3">
        <!-- input -->
        <input
          v-model="modelZipCode"
          class="w-full lg:w-3/5 border-2 rounded-md text-sm pl-3 m-0 mb-3 sm:mr-2 sm:mb-0 focus:border-purple-700"
          type="text"
          placeholder="Insira o CEP"
        />
        <!-- button -->
        <Button
          class="lg:w-2/5"
          :label="'Adicionar Endereço'"
          :icon="'plus-lg'"
          @click="searchZipCode"
        />
      </div>
    </header>
    <!-- list -->
    <article class="mt-8">
      <div v-for="(zipCode, i) in state.zipCode" :key="i">
        <ItemCep :zipCode="zipCode" />
      </div>
    </article>

    <aside class="mt-5 md:m-0 md:fixed bottom-5 right-1/2">
      <!-- button -->
      <Button :label="'Gerar endereços'" @click="generateAddress" />
    </aside>
  </section>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import AlertMessage from "@/components/AlertMessage.vue";
import ItemCep from "@/components/ItemCep.vue";
import Button from "./ButtonPrimary.vue";
export default {
  components: { AlertMessage, ItemCep, Button },
  setup() {
    // data
    const { dispatch, commit, state } = useStore();
    const alert = ref(null);
    const modelZipCode = ref("");

    // methods
    const searchZipCode = async () => {
      const success = await dispatch(
        "searchZipCode",
        modelZipCode.value.trim()
      );

      if (!success) {
        alert.value.show(false, "Erro ao buscar o CEP");
      }
    };

    const generateAddress = () => {
      commit("generateAddress");
    };

    return {
      state,

      alert,
      modelZipCode,

      searchZipCode,
      generateAddress,
    };
  },
};
</script>

<style lang="scss" scoped>
input {
  height: 40px;
  outline: none !important;
}
</style>
