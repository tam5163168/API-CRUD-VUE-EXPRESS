<template>
  <header class="w-full items-center bg-white py-2 px-6 hidden sm:flex">
    <div class="w-1/2"></div>
    <div class="relative w-1/2 flex justify-end">
      <button
        v-click-outside="hide"
        @click="toggle()"
        class="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
      >
        <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" />
      </button>
      <div
        v-if="opened"
        class="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16"
      >
        <a href="#" class="block px-4 py-2 account-link hover:text-white"
          >Account</a
        >
        <a href="#" class="block px-4 py-2 account-link hover:text-white"
          >Support</a
        >
        <a
          class="block px-4 py-2 account-link hover:text-white cursor-pointer"
          @click="logoutUser"
        >
          Sign Out
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import ClickOutside from "vue-click-outside";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      opened: false,
    };
  },
  methods: {
    ...mapActions(["logout"]),
    async logoutUser() {
      localStorage.removeItem("setToken");
      localStorage.removeItem("setUser");
      localStorage.removeItem("isUserLogin");
      localStorage.removeItem("setRole");
      await this.logout();
      this.$router.go(0);
    },
    toggle() {
      this.opened = true;
    },

    hide() {
      this.opened = false;
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style>
</style>