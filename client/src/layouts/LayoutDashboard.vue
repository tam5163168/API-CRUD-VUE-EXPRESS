<template>
  <div class="container mx-auto">
    <div class="bg-gray-100 font-family-karla flex" style="height: 1000px">
      <Aside />

      <div class="w-full flex flex-col h-screen" style="margin-left: 224px">
        <!-- Desktop Header -->
        <Header />
        <div class="w-full border-t flex flex-col">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Header: () => import("@/components/Header.vue"),
    Aside: () => import("@/components/Aside.vue"),
  },
  data() {
    return {
      crumbs: [
        { to: "/home", text: "Home" },
        { to: "/component", text: "Component" },
        { to: "/breadcrumb", text: "Breadcrumb" },
      ],
      isRender: false,
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  methods: {
    ...mapActions(["logout"]),
    async logoutUser() {
      localStorage.removeItem("setToken");
      localStorage.removeItem("setUser");
      localStorage.removeItem("isUserLogin");
      localStorage.removeItem("setRole");
      await this.logout();
      this.$router.go(0);
    },
  },
  created() {
    if (this.isAuthenticated) this.isRender = true;
    else return this.$router.push("/login");
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Karla:400,700&display=swap");
.font-family-karla {
  font-family: karla;
}
.bg-sidebar {
  background: #3d68ff;
}
.cta-btn {
  color: #3d68ff;
}
.upgrade-btn {
  background: #1947ee;
}
.upgrade-btn:hover {
  background: #0038fd;
}
.active-nav-link {
  background: #1947ee;
}
.nav-item:hover {
  background: #1947ee;
}
.account-link:hover {
  background: #3d68ff;
}
</style>
