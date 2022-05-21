<template>
  <div
    class="alert flex justify-center items-center absolute top-0 left-0 bg-white p-0"
    :class="{ visible: visible, success: success, fail: !success }"
  >
    <i
      class="mr-2 bi"
      :class="success ? 'bi-check-circle-fill' : 'bi-x-circle-fill'"
    ></i>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  setup() {
    // data
    const timeout = ref(0);
    const visible = ref(false);
    const success = ref(false);
    const message = ref("mensagem de teste");
    const isVisible = computed(() => visible.value);

    // methods
    const show = (Success, Message) => {
      if (isVisible.value) {
        hide();

        setTimeout(() => {
          show(Success, Message);
        }, 100);
        return;
      }

      visible.value = true;
      success.value = Success;
      message.value = Message;

      clearTimeout(timeout.value);
      timeout.value = setTimeout(() => {
        hide();
      }, 5000);
    };

    const hide = () => {
      visible.value = false;
    };

    return {
      visible,
      success,
      message,

      show,
    };
  },
};
</script>

<style lang="scss" scoped>
.alert {
  display: none;
  user-select: none;

  transform: translate(-50%, 50px);

  border-radius: 5px;

  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);

  padding: 10px 20px;
  margin-left: 50%;

  &.visible {
    display: flex;
    animation: alert 5s ease;
  }

  &.success {
    color: green;
  }
  &.fail {
    color: red;
  }
}

@keyframes alert {
  0% {
    opacity: 0;
    transform: translate(-50%, 50px);
  }
  5% {
    opacity: 1;
    transform: translate(-50%, 60px);
  }
  95% {
    opacity: 1;
    transform: translate(-50%, 60px);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, 50px);
  }
}
</style>
