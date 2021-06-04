<template>
  <div>
    <div class="w-full mt-12">
      <div class="flex items-center justify-between">
        <div class="relative flex items-center">
          <div class="mr-2">
            <select
              name=""
              id=""
              class="px-2 py-2 rounded-lg text-lg border border-gray-900 border-solid"
              v-model.number="selectedActive"
            >
              <option disabled value="">Trạng thái</option>
              <option value="">Tất cả</option>
              <option value="1">Đang hoạt động</option>
              <option value="2">Đình chỉ</option>
              <option value="3">Nghỉ việc</option>
            </select>
          </div>
          <div>
            <div class="p-4 flex items-center relative">
              <input
                class="p-2 rounded-lg border border-gray-900"
                type="text"
                v-model="searchQuery"
                @keyup.enter="submitSearch()"
                placeholder="Tìm kiếm email..."
              />
              <button
                class="p-2 absolute right-5"
                @click="reset()"
                v-if="searchQuery.length > 0"
              >
                <span
                  class="iconify"
                  data-icon="oi:delete"
                  data-inline="false"
                ></span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <router-link
            to="/create"
            class="p-2 rounded-lg text-lg border border-gray-900 border-solid"
            >Create User</router-link
          >
        </div>
      </div>
    </div>
    <div class="w-full mt-12">
      <div class="bg-white overflow-auto">
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                #
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Hình ảnh
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Tên
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Điện thoại
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Vai Trò
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Hoạt động
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in userFilter" :key="user[index]">
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
              >
                {{ index + 1 }}
              </td>
              <td
                class="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2 text-left flex items-center"
              >
                <cld-image
                  :publicId="user.avatar"
                  class="rounded-full w-14 object-cover h-14 mx-auto"
                  crop="scale"
                />
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
              >
                <span class="capitalize">{{ user.fullName }}</span>
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
              >
                <span>{{ user.email.toLowerCase() }}</span>
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
              >
                <span>{{ user.phone }}</span>
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
              >
                <span>{{ user.role }}</span>
              </td>
              <td
                class="relative border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
              >
                <span :class="userActiveColor[user.active]">{{
                  userActive[user.active]
                }}</span>
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
              >
                <div class="w-16 h-12 flex items-center justify-between">
                  <button class="text-gray-300" @click="editUser(user)">
                    <span
                      class="iconify text-2xl hover:text-green-400"
                      data-icon="clarity:edit-line"
                      data-inline="false"
                    ></span>
                  </button>
                  <button class="text-gray-300" @click="delUser(user._id)">
                    <span
                      class="iconify text-2xl hover:text-red-400"
                      data-icon="feather:trash-2"
                      data-inline="false"
                    ></span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Del :users="users" @deleteU="deleteU"></Del>
    <Edit></Edit>
  </div>
</template>

<script>
import axios from "axios";
import { eventBus } from "../../main";
import { mapActions } from "vuex";
export default {
  components: {
    Del: () => import("@/components/Modals/Del"),
    Edit: () => import("@/components/Modals/Edit"),
  },
  data() {
    return {
      users: [],
      searchQuery: "",
      selectedActive: "",
      selectedType: "",
      searchVisible: false,
      userActive: {
        1: "Đang hoạt động",
        2: "Đình chỉ",
        3: "Nghỉ việc",
      },
      userActiveColor: {
        1: "bg-green-400 p-2 rounded-full ",
        2: "bg-yellow-400 p-2 rounded-full",
        3: "bg-red-400 p-2 rounded-full",
      },
    };
  },
  computed: {
    userFilter() {
      let filterActive = this.selectedActive;
      if (filterActive) {
        return this.users.filter((item) => {
          let filtered = true;
          if (filterActive && filterActive > 0) {
            console.log(filtered);
            filtered = item.active == filterActive;
            console.log(item.active == filterActive);
          }
          return filtered;
        });
      } else if (this.searchQuery) {
        return this.users.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((x) => item.email.toLowerCase().includes(x));
        });
      } else {
        return this.users;
      }
    },
  },
  created() {
    axios
      .get(`http://localhost:3000/user`)
      .then((response) => (this.users = response.data))
      .catch((err) => console.log(err));
  },
  // watch: {
  //   searchQuery: (val) => {
  //     console.log(val);
  //   },
  // },
  methods: {
    ...mapActions(["deleteUser"]),
    delUser(id, modal = false) {
      eventBus.$emit("delUser", id, modal);
    },
    editUser(user, modal = false) {
      eventBus.$emit("clickEdit", user, modal);
    },
    deleteU(id) {
      this.deleteUser(id)
        .then(() => (this.users = this.users.filter((x) => x._id !== id)))
        .catch((err) => console.log(err));
    },
    submitSearch() {
      if (this.searchQuery.length > 0) {
        this.users = this.users.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((x) => item.email.toLowerCase().includes(x));
        });
      } else {
        return this.users;
      }
      console.log(this.searchQuery);
    },
    reset() {
      this.searchQuery = "";
    },
  },
};
</script>

<style>
</style>