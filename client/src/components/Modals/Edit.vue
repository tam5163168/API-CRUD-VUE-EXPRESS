<template>
  <div v-if="showModal" class="fixed w-full h-full top-0 left-0 z-50">
    <div
      id="app"
      class="antialiased min-h-screen w-full h-full bg-gray-900 pt-8 pb-12"
      style="background-color: rgba(0, 0, 0, 0.3)"
    >
      <transition
        enter-active-class="transition duration-300 ease-out transform"
        enter-class="scale-95 opacity-0"
        enter-to-class="scale-100 opacity-100"
        leave-active-class="transition duration-150 ease-in transform"
        leave-class="scale-100 opacity-100"
        leave-to-class="scale-95 opacity-0"
      >
        <!-- Modal container -->
        <div v-if="showModal" class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Card container -->
          <form
            class="px-8 py-6 space-y-6 overflow-hidden bg-white rounded-md shadow-lg transition duration-300 ease-in-out transform"
          >
            <!-- Card heading -->
            <div class="flex justify-between">
              <div class="space-y-1">
                <h2 class="font-bold text-gray-900">Chỉnh sửa người dùng</h2>
              </div>
              <div>
                <button
                  type="button"
                  class="flex flex-col items-center text-gray-400 hover:text-gray-500 transition duration-150 ease-in-out"
                  @click="toggleModal()"
                >
                  <svg
                    class="w-7 h-7"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span
                    class="text-xs font-semibold text-center leading-3 uppercase"
                    >Thoát</span
                  >
                </button>
              </div>
            </div>
            <!-- Flow options -->
            <div class="space-y-6">
              <div class="space-y-4">
                <div class="flex items-center">
                  <label class="flex-1 mr-2 block space-y-2">
                    <span
                      class="block text-xs font-bold leading-4 tracking-wide uppercase text-gray-600"
                      >Tên</span
                    >
                    <input
                      id="fullName"
                      :value="user.fullName"
                      type="text"
                      placeholder="Name your flow"
                      class="max-w-md w-full form-input p-2 text-gray-900 rounded placeholder-gray-400 sm:text-sm sm:leading-5 border border-gray-700"
                    />
                  </label>
                  <label class="flex-1 block space-y-2">
                    <span
                      class="block text-xs font-bold leading-4 tracking-wide uppercase text-gray-600"
                      >Email</span
                    >
                    <input
                      id="email"
                      :value="user.email"
                      type="text"
                      placeholder="Name your flow"
                      class="max-w-md p-2 border border-gray-700 w-full form-input text-gray-900 rounded placeholder-gray-400 sm:text-sm sm:leading-5"
                    />
                  </label>
                </div>
                <div class="flex items-center">
                  <label class="flex-1 mr-2 block space-y-2">
                    <span
                      class="block text-xs font-bold leading-4 tracking-wide uppercase text-gray-600"
                      >Số điện thoại</span
                    >
                    <input
                      id="phone"
                      :value="user.phone"
                      type="text"
                      placeholder="Name your flow"
                      class="max-w-md w-full form-input text-gray-900 rounded placeholder-gray-400 sm:text-sm sm:leading-5"
                    />
                  </label>
                </div>

                <div class="flex items-center">
                  <label class="flex-1 mr-2 block space-y-2">
                    <span
                      class="block text-xs font-bold leading-4 tracking-wide uppercase text-gray-600"
                      >Hành động</span
                    >
                    <select
                      id="active"
                      name=""
                      class="text-gray-900 border border-gray-400 p-2 text-base rounded-lg"
                    >
                      <option value="1">Hoạt động</option>
                      <option value="2">Đình chỉ</option>
                      <option value="3">Nghỉ việc</option>
                    </select>
                  </label>
                  <label class="flex-1 mr-2 block space-y-2">
                    <span
                      class="block text-xs font-bold leading-4 tracking-wide uppercase text-gray-600"
                      >Vai trò</span
                    >
                    <select
                      id="role"
                      name=""
                      class="text-gray-900 border border-gray-400 p-2 text-base rounded-lg"
                    >
                      <option value="ADMIN">ADMIN</option>
                      <option value="ACCOUNT">ACCOUNT</option>
                    </select>
                  </label>
                </div>
              </div>
              <div class="flex items-center">
                <label class="flex-1 mr-2 block space-y-2">
                  <span
                    class="block text-xs font-bold leading-4 tracking-wide uppercase text-gray-600"
                    >Hỉnh ảnh</span
                  >
                  <cld-image
                    :publicId="user.avatar"
                    class="rounded-sm w-24 object-cover h-14"
                    crop="scale"
                  />
                </label>
              </div>
            </div>
            <input
              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-green-800 border-gray-200"
              type="file"
              ref="file"
              style="display: none"
              accept="image/"
              @change="onFileSelected($event)"
              id="imgInp"
            />
            <button
              class="avatar p-2.5 bg-blue-400 rounded-md text-base"
              @click.prevent="$refs.file.click()"
            >
              Chọn avatar của bạn
            </button>
            <img id="frame2" class="w-24 h-14 object-cover" />
            <div
              class="max-w-md grid grid-flow-row sm:grid-cols-2 gap-3 sm:gap-6"
            >
              <button
                type="button"
                class="px-4 py-3 border border-gray-200 rounded text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-600 transition duration-300 ease-in-out"
                @click="toggleModal()"
              >
                Hủy bỏ
              </button>
              <button
                type="button"
                class="px-4 py-3 border border-transparent rounded text-white bg-indigo-600 hover:bg-indigo-500 transition duration-300 ease-in-out"
                @click="updateUser(user._id)"
              >
                Lưu
              </button>
            </div>
          </form>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../main";
import axios from "axios";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      selectedFile: null,
      showModal: false,
      user: null,
      advancedSettings: false,
      flowType: {
        selected: "",
        options: [
          {
            id: 1,
            name: "Auto",
            advanced: false,
          },
          {
            id: 2,
            name: "URL",
            advanced: false,
          },
          {
            id: 3,
            name: "Manual",
            advanced: true,
          },
        ],
      },
    };
  },
  created() {
    eventBus.$on("clickEdit", (user, modal) => {
      this.showModal = !modal;
      this.user = user;
      console.log(this.user);
    });
  },
  methods: {
    ...mapActions(["updateUserAPI"]),
    onFileSelected(e) {
      this.selectedFile = e.target.files[0];
      console.log(document.getElementById("frame2"));
      document.getElementById("frame2").src = URL.createObjectURL(
        this.selectedFile
      );
    },
    async updateUser(id) {
      if (this.selectedFile) {
        var formData = new FormData();
        formData.append("file", this.selectedFile);
        formData.append("upload_preset", "DemoUpload");
        let requestObj = {
          url: `https://api.cloudinary.com/v1_1/tamdeptrai123/image/upload`,
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: formData,
        };
        const response = await axios(requestObj);
        this.user.avatar = response.data.public_id;
        console.log(this.user.avatar);
      }
      const fullName = document.querySelector("#fullName").value;
      const email = document.querySelector("#email").value;
      const phone = document.querySelector("#phone").value;
      const role = document.querySelector("#role").value;
      const active = document.querySelector("#active").value;
      const avatar = this.user.avatar;
      const dataUser = {
        id: id,
        fullName: fullName,
        email: email,
        phone: phone,
        active: active,
        role: role,
        avatar: avatar,
      };
      this.setLoadingStatus(true);
      await this.updateUserAPI(dataUser);
      this.setLoadingStatus(false);
      this.$router.go();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style scoped>
html {
  font-family: "Inter", sans-serif;
}
</style>
