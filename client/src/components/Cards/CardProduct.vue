<template>
  <tr>
    <td class="px-5 py-5 bg-white text-sm flex items-center">
      <input type="checkbox" v-model="checkbox" class="mr-2" />

      <span>{{ item.product }}</span>
    </td>
    <td v-if="checkbox" class="px-5 py-5 bg-white text-sm">
      <img :src="item.image" />
    </td>
    <td v-if="checkbox" class="px-5 py-5 bg-white text-sm">
      <select
        name=""
        id=""
        class="text-gray-900"
        @change="changePrice($event, item.id)"
      >
        <option value="" selected disabled>Chọn chất liệu</option>
        <option
          v-for="(info, i) in item.infoProduct"
          :key="'A' + i"
          :value="info.material"
        >
          {{ info.material }}
        </option>
      </select>
    </td>
    <td v-if="checkbox" class="px-5 py-5 bg-white text-sm">{{ item.unit }}</td>
    <td v-if="checkMaterial" class="px-5 py-5 bg-white text-sm">
      <input
        v-model.number="quantity"
        type="number"
        min="1"
        @change="changeNumber(item.id)"
      />
    </td>
    <td v-if="checkMaterial" class="px-5 py-5 bg-white text-sm">
      {{ price | moneyFormat }}
    </td>
    <td v-if="checkMaterial">
      <span>{{ total | moneyFormat }} đ</span>
    </td>
  </tr>
</template>

<script>
import { eventBus } from "../../main.js";
export default {
  data() {
    return {
      checkbox: false,
      quantity: 1,
      checkMaterial: false,
      price: 0,
      total: 0,
    };
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: null,
    },
  },
  methods: {
    changePrice(event, id) {
      this.checkMaterial = true;
      const valueRight = this.item.infoProduct.find(
        (y) => y.material === event.target.value
      );
      this.price = valueRight.price;
      this.total = this.quantity * this.price;
      eventBus.$emit("totalProduct", this.total, id);
    },
    changeNumber(id) {
      this.total = this.quantity * this.price;
      eventBus.$emit("totalProduct", this.total, id);
    },
  },
};
</script>

<style>
</style>