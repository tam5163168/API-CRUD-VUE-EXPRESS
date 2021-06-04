<template>
  <main class="w-full flex-grow p-4">
    <!-- <h1 class="text-3xl text-black pb-6">Dashboard</h1> -->
    <Breadcrumb :crumbs="crumbs" />
    <Create-User></Create-User>
  </main>
</template>

<script>
export default {
  components: {
    Breadcrumb: () => import("@/components/Breadcrumb.vue"),
    CreateUser: () => import("@/components/CreateUser.vue"),
  },
  data() {
    return {
      users: null,
      crumbs: [
        { to: "/home", text: "Home" },
        { to: "/create", text: "Create" },
      ],
    };
  },
};
</script>

<style>
</style>