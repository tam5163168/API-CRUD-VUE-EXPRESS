<template>
  <div id="app">
    <router-view />
    <LoadingOverlay />
    <DialogMessage />
  </div>
</template>

<script>
import LoadingOverlay from "@/components/Common/LoadingOverLay";
import DialogMessage from "@/components/Common/DialogMessage";

export default {
  components: {
    LoadingOverlay,
    DialogMessage,
  },
  // watch: {
  //   $route(from, to) {
  //     console.log(from);
  //     console.log(to);
  //   },
  // },
  created() {
    this.setLoadingStatus(false);
    this.showDialogMess({ status: false, mess: "" });
  },
};
</script>


<style>
#app {
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #1f2937;
}
</style>
