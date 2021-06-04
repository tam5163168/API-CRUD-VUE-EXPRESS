<template>
  <!-- <nav class="">
    <ol class="breadcrumb flex items-center justify-center">
      <li v-for="(crumb, index) in crumbs" :key="index" class="items-center">
        <a
          href=""
          class="p-2 border border-solid border-gray-900"
          :class="{ disabled: isLast(index) }"
        >
          {{ crumb }}
        </a>
      </li>
    </ol>
  </nav> -->
  <!-- <nav class="container">
  <ol class="list-reset py-4 pl-4 rounded flex bg-grey-light text-grey">
    <li class="px-2"><a href="#" class="no-underline text-indigo">Home</a></li>
    <li>/</li>
    <li class="px-2"><a href="#" class="no-underline text-indigo">Library</a></li>
    <li>/</li>
    <li class="px-2">Data</li>
  </ol>
</nav> -->
  <nav>
    <ol class="flex text-gray-500 text-sm lg:text-base">
      <li
        class="inline-flex items-center"
        v-for="(crumb, index) in crumbs"
        :key="index"
      >
        <a :href="crumb.to" :class="{ disabled: isLast(index) }">{{
          crumb.text
        }}</a>
        <svg
          class="h-5 w-auto text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          :class="{ none: isLast(index) }"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    crumbs: {
      type: Array,
      required: true,
    },
  },
  methods: {
    isLast(index) {
      return index === this.crumbs.length - 1;
    },
  },
};
</script>

<style scoped>
.disabled {
  color: blue;
  pointer-events: none;
}
.none {
  display: none;
}
.breadcrumb {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.37rem;
}
</style>