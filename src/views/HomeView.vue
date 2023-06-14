<template>
  <div class="home">
    <ChatMain />
  </div>
</template>

<script>
// @ is an alias to /src
// import ChatHome from "@/components/ChatHome.vue";
import ChatMain from "@/components/ChatMain.vue";

export default {
  name: "HomeView",
  components: {
    ChatMain,
  },
};
</script>
