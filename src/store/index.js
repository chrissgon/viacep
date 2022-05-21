import { createStore } from "vuex";
import { setZipCode, getZipCode, delZipCode } from "@/mixins/storage";

export default createStore({
  state: {
    zipCode: getZipCode(),
    zipCodeCard: {},
  },
  getters: {},
  mutations: {
    updateList(state) {
      state.zipCode = getZipCode();
    },
    generateAddress(state) {
      state.zipCodeCard = getZipCode();
    },
  },
  actions: {
    async searchZipCode({ commit }, zipCode) {
      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${zipCode}/json/`
        );
        const info = await response.json();

        if (info.erro) return false;

        setZipCode({ [zipCode]: info });

        commit("updateList");

        return true;
      } catch {
        return false;
      }
    },

    removeZipCode({ commit }, zipCode) {
      delZipCode(zipCode);
      commit("updateList");
      commit("generateAddress");
    },
  },
  modules: {},
});
