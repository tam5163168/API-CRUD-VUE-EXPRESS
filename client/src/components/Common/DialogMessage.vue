<template>
  <div>
    <div
      class="fixed top-0 left-0 bottom-0 right-0 w-full h-screen flex items-center justify-center overflow-hidden"
      style="background-color: rgba(0, 0, 0, 0.3)"
      id="dialog"
      v-if="dialogMess.status"
      @click="closeModal($event)"
    >
      <div class="animate-pulse h-28 bg-white rounded-lg" style="width: 500px">
        <h3 class="text-xl p-4 h-2/4 bg-gray-200 rounded-t-lg">Thông báo</h3>
        <div class="p-4 h-2/4">
          <p>{{ dialogMess.mess }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      dialogMess: (state) => state.dialogMess,
    }),
  },
  methods: {
    closeModal(event) {
      if (!(document.querySelector("#dialog") == event.target) === false)
        return (this.dialogMess.status = false);
    },
  },
};
</script>

<style scoped>
.js-is-hidden {
  display: none;
}
</style>