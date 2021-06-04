<template>
  <aside
    class="bg-sidebar overflow-x-hidden h-screen w-56 fixed height-full top-0 left-0 sm:block shadow-xl"
  >
    <div class="p-6">
      <a
        href="index.html"
        class="text-white text-3xl font-semibold uppercase hover:text-gray-300"
        >Admin</a
      >
    </div>
    <nav class="text-white text-base font-semibold pt-3">
      <router-link
        to="/dashboard"
        v-slot="{ href, navigate, isActive }"
        class="flex items-center active-nav-link text-white py-4 pl-6 nav-item"
      >
        <a
          :href="href"
          class="text-xs uppercase py-3 font-bold block"
          :class="[
            isActive
              ? 'text-green-500 hover:text-green-500'
              : 'text-blue-400 hover:text-blue-600',
          ]"
          @click="navigate"
          style="font-weight:700"
        >
          <i
            class="fas fa-tachometer-alt mr-3"
            :class="[isActive ? 'opacity-75' : 'text-blue-300']"
          ></i>
          Bảng điều khiển
        </a>
      </router-link>
      <router-link
        to="/users"
        v-slot="{ href, navigate, isActive }"
        class="flex items-center active-nav-link text-white py-4 pl-6 nav-item"
      >
        <a
          :href="href"
          class="text-xs uppercase py-3 font-bold block"
          :class="[
            isActive
              ? 'text-green-500 hover:text-green-500'
              : 'text-blue-400 hover:text-blue-600',
          ]"
          @click="navigate"
          style="font-weight:700"
        >
          <i
            class="fas fa-tachometer-alt mr-3"
            :class="[isActive ? 'opacity-75' : 'text-blue-300']"
          ></i>
          Quản lý người dùng
        </a>
      </router-link>
      <router-link
        to="/product"
        v-slot="{ href, navigate, isActive }"
        class="flex items-center active-nav-link text-white py-4 pl-6 nav-item"
      >
        <a
          :href="href"
          class="text-xs uppercase py-3 font-bold block"
          :class="[
            isActive
              ? 'text-green-500 hover:text-green-500'
              : 'text-blue-400 hover:text-blue-600',
          ]"
          @click="navigate"
          style="font-weight:700"
        >
          <i
            class="fas fa-tachometer-alt mr-3"
            :class="[isActive ? 'opacity-75' : 'text-blue-300']"
          ></i>
          Quản lý sản phẩm
        </a>
      </router-link>
      <router-link
        to="/create"
        v-slot="{ href, navigate, isActive }"
        class="flex items-center active-nav-link text-white py-4 pl-6 nav-item"
      >
        <a
          :href="href"
          class="text-xs uppercase py-3 font-bold block"
          :class="[
            isActive
              ? 'text-green-500 hover:text-green-500'
              : 'text-blue-400 hover:text-blue-600',
          ]"
          @click="navigate"
          style="font-weight:700"
        >
          <i
            class="fas fa-tachometer-alt mr-3"
            :class="[isActive ? 'opacity-75' : 'text-blue-300']"
          ></i>
          Tạo tài khoản
        </a>
      </router-link>
    </nav>
    <a
      href="#"
      class="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4"
    >
      <i class="fas fa-arrow-circle-up mr-3"></i>
      Upgrade to Pro!
    </a>
  </aside>
</template>

<script>
export default {};
</script>

<style>
</style>