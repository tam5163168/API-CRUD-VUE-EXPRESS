<template>
  <main class="w-full flex-grow p-4">
    <!-- <h1 class="text-3xl text-black pb-6">Dashboard</h1> -->
    <Breadcrumb :crumbs="crumbs" />
    <Card-User></Card-User>
  </main>
</template>

<script>
export default {
  components: {
    Breadcrumb: () => import("@/components/Breadcrumb.vue"),
    CardUser: () => import("@/components/Cards/CardUser.vue"),
  },
  data() {
    return {
      users: null,
      crumbs: [
        { to: "/home", text: "Home" },
        { to: "/user", text: "User" },
      ],
    };
  },
};
</script>

<style>
</style>