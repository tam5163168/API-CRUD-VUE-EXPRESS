<template>
  <div
    class="fixed top-0 left-0 bottom-0 right-0 w-full p-10 min-h-screen flex items-center justify-center"
    style="background-color: rgba(0, 0, 0, 0.3)"
    v-if="isLoading"
  >
    <div class="md:animate-spin">
      <div
        class="h-16 w-16 bg-opacity-50 rounded-full flex items-center justify-center"
      >
        <span class="text-5xl">⌛</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({ isLoading: (state) => state.isLoading }),
  },
};
</script>

<style lang="scss" scoped>
</style>