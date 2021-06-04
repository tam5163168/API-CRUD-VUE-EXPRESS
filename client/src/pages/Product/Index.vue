<template>
  <main class="w-full flex-grow p-4">
    <!-- <h1 class="text-3xl text-black pb-6">Dashboard</h1> -->
    <Breadcrumb :crumbs="crumbs" />
    <div class="w-full mt-12">
      <div class="bg-white overflow-auto">
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Sản phẩm
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Hình ảnh
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Chất Liệu
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Đơn vị
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Số lượng
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Đơn giá
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Tổng tiền
              </th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, index) in items">
              <Card-Product :item="item" :key="index"></Card-Product>
            </template>
          </tbody>
        </table>
        <div class="flex items-center justify-between pt-4">
          <div class="flex">
            <button
              type="button"
              @click="totalitemProduct"
              class="p-4 mr-2 bg-blue-400 hover:bg-blue-600"
            >
              Tính tổng
            </button>
            <button
              type="button"
              class="p-4 bg-red-400 hover:bg-red-500"
              @click="deleteAll()"
            >
              Xóa hết
            </button>
          </div>

          <div class="flex items-center">
            <span class="text-4xl text-yellow-400 mr-1">{{
              total | moneyFormat
            }}</span>
            <span class="text-3xl text-yellow-600">đ</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { eventBus } from "../../main";
export default {
  components: {
    Breadcrumb: () => import("@/components/Breadcrumb.vue"),
    CardProduct: () => import("@/components/Cards/CardProduct.vue"),
  },
  data() {
    return {
      price: 0,
      selected: "",
      showInfo: false,
      showTotal: false,
      totalAll: 0,
      total: 0,
      itemTotal: [],
      roomPrices: {},
      crumbs: [
        { to: "/home", text: "Home" },
        { to: "/product", text: "Product" },
      ],
      items: [
        {
          id: 1,
          product: "Bàn học",
          image: require("@/assets/img/table.jpg"),
          unit: "md",
          infoProduct: [
            // { material: "Chọn chất liệu", price: 0, quantity: 0 },
            {
              material: "Thùng và cánh MDF phủ Melamin",
              price: 2200000,
              quantity: 1,
            },
            {
              material: "Thùng melamin cánh Acrylic",
              price: 2800000,
              quantity: 1,
            },
            {
              material: "Thùng melamin không cánh",
              price: 2350000,
              quantity: 1,
            },
          ],
        },
        {
          id: 2,
          product: "Giá sách",
          image: require("@/assets/img/book.jpg"),
          unit: "m2",
          infoProduct: [
            // { material: "Chọn chất liệu", price: 0, quantity: 0 },
            {
              material: "Gỗ melamin",
              price: 1800000,
              quantity: 1,
            },
            {
              material: "Gỗ tú",
              price: 3200000,
              quantity: 1,
            },
            {
              material: "Gỗ thủy",
              price: 2050000,
              quantity: 1,
            },
          ],
        },
      ],
    };
  },

  created() {
    eventBus.$on("totalProduct", (total, id) => {
      this.roomPrices[id] = total;
      console.log(this.roomPrices);
    });
  },
  methods: {
    totalitemProduct() {
      this.showTotal = true;
      this.total = Object.values(this.roomPrices).reduce(
        (roomPrice, totalPrice) => roomPrice + totalPrice,
        0
      );
    },
  },
};
</script>

<style>
</style>