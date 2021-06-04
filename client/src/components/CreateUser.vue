<template>
  <div
    class="max-w-xl px-8 py-8 border-0 shadow-lg rounded-xl h-4/4 bg-white mx-auto mt-16"
  >
    <h1 class="text-2xl font-bold pb-8">Create New User</h1>
    <hr class="mb-5" />
    <div class="px-6">
      <form ref="formCreate">
        <div class="mb-5 w-full relative z-0">
          <input
            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-green-800 border-gray-200"
            placeholder="Full name "
            name="user_full_name"
            type="text"
            v-model.trim="dataUser.fullName"
          />
        </div>
        <div class="mb-5 w-full relative z-0">
          <input
            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-green-800 border-gray-200"
            placeholder="Email"
            name="email"
            type="email"
            v-model="dataUser.email"
          />
        </div>
        <div class="mb-5 w-full relative z-0">
          <input
            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-green-800 border-gray-200"
            placeholder="Password"
            name="password"
            type="password"
            v-model="dataUser.password"
          />
        </div>
        <div class="mb-5 w-full relative z-0">
          <input
            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-green-800 border-gray-200"
            placeholder="0788849647"
            name="phone"
            type="number"
            v-model="dataUser.phone"
          />
        </div>

        <div class="mb-5 w-full relative z-0">
          <select
            name=""
            id=""
            class="p-2 rounded-lg border border-gray-700 border-solid"
            v-model.number="dataUser.active"
          >
            <option value="" disabled>Select Active</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div class="mb-5 w-full relative z-0">
          <select
            name=""
            id=""
            class="p-2 rounded-lg border border-gray-700 border-solid"
            v-model="dataUser.role"
          >
            <option value="" disabled>Select Role</option>
            <option value="ADMIN">ADMIN</option>
            <option value="ACCOUNT">ACCOUNT</option>
          </select>
        </div>
        <div class="mb-5 w-full relative z-0">
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
            @click.prevent="handleFile()"
          >
            Chọn avatar của bạn
          </button>
          <img src="" alt="" id="frame" />
        </div>
        <div class="w-full mt-10 mb-5">
          <button
            @click.prevent="onLoad()"
            class="w-full px-10 bg-blue-400 text-center rounded-lg p-2 text-lg"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      selectedFile: null,
      dataUser: {
        fullName: "",
        email: "",
        password: "",
        phone: null,
        active: "",
        role: "",
        avatar: "",
      },
    };
  },
  methods: {
    ...mapActions(["createUser"]),
    handleFile() {
      this.$refs.file.click();
    },
    onFileSelected(e) {
      this.selectedFile = e.target.files[0];
      console.log(document.getElementById("frame"));
      document.getElementById("frame").src = URL.createObjectURL(
        this.selectedFile
      );
    },
    async onLoad() {
      console.log(this.$refs);
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
      const responseAvatar = await axios(requestObj)
      this.dataUser.avatar = responseAvatar.data.public_id;
      this.setLoadingStatus(true);
      const response = await this.createUser(this.dataUser);
      this.setLoadingStatus(false);
      if (this.checkResponse(response)) {
        this.$refs.formCreate.reset();
        setTimeout(() => {
          this.$router.push("dashboard");
        }, 3000);
        return this.showDialogMess({
          status: true,
          mess: "Tạo admin thành công",
        });
      } else {
        return this.showDialogMess({
          status: true,
          mess: response.error.response.data.error,
        });
      }
    },
  },
  mounted() {},
};
</script>

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>