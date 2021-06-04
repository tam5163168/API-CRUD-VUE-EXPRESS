<template>
  <LayoutMain>
    <div
      class="mx-auto lg:mx-0 min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      v-if="awesome"
    >
      <div class="max-w-md w-full space-y-8">
        <div>
          <img
            class="mx-auto h-12 w-auto"
            src="@/assets/logo.png"
            alt="Workflow"
          />
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Or
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-400"
              @click="awesome = !awesome"
            >
              start your <span>Sign up</span> free trial
            </a>
          </p>
        </div>

        <form
          class="mt-8 space-y-6"
          action="#"
          ref="loginForm"
          @submit.prevent="handleActionLogin()"
        >
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none rounded-none relative block w-full h-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                v-model="dataLogin.email"
              />
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none rounded-none relative block w-full h-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                v-model="dataLogin.password"
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <a
                href="#"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <!-- Heroicon name: solid/lock-closed -->
                <svg
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
    <div
      class="mx-auto lg:mx-0 min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      v-else
    >
      <div class="max-w-md w-full space-y-8">
        <div>
          <img
            class="mx-auto h-12 w-auto"
            src="@/assets/logo.png"
            alt="Workflow"
          />
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up
          </h2>
        </div>
        <form
          class="mt-8 space-y-6"
          action="#"
          method="POST"
          ref="registerForm"
          @submit.prevent="handleActionRegister()"
        >
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="fullname-address" class="sr-only">Fullname</label>
              <input
                id="fullname-address"
                name="fullname"
                type="fullname"
                autocomplete="fullname"
                required
                class="appearance-none rounded-none relative block w-full h-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Fullname address"
                style="margin-bottom: 5px"
                v-model="dataRegister.fullName"
              />
            </div>
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none rounded-none relative block w-full h-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                style="margin-bottom: 5px"
                v-model="dataRegister.email"
              />
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none rounded-none relative block w-full h-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                v-model="dataRegister.password"
              />
            </div>
          </div>

          <div class="flex items-center justify-center">
            <div class="text-sm">
              <p
                href="#"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                <span class="text-indigo-300 cursor-auto"
                  >Bạn đã có tài khoản?</span
                >
                <span class="cursor-pointer" @click="awesome = !awesome"
                  >Đăng nhập</span
                >
              </p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <!-- Heroicon name: solid/lock-closed -->
                <svg
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  </LayoutMain>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    LayoutMain: () => import("@/layouts/LayoutMain"),
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  data() {
    return {
      awesome: true,
      dataLogin: {
        email: "",
        password: "",
      },
      dataRegister: {
        fullName: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions(["login", "register"]),
    async handleActionLogin() {
      this.setLoadingStatus(true);
      const response = await this.login(this.dataLogin);
      this.setLoadingStatus(false);
      if (!response.ok)
        return this.showDialogMess({
          status: true,
          mess: "Lỗi hệ thống",
        });
      console.log(response);
      localStorage.setItem("setToken", response.data.token);
      localStorage.setItem("setUser", response.data.userInfo.fullName);
      localStorage.setItem("isUserLogin", true);
      localStorage.setItem("setRole", response.data.userInfo.role);
      if (this.checkResponse(response)) {
        return this.$router.push("/dashboard");
      }
      return this.$router.push("/login");
    },

    async handleActionRegister() {
      const response = await this.register(this.dataRegister);
      if (this.checkResponse(response)) {
        return alert(`Đăng ký tài khoản thành công`);
      }
    },
  },
  mounted() {
    if (this.isAuthenticated) {
      return this.$router.push("/dashboard");
    }
  },
};
</script>

<style lang="scss" scoped>
</style>