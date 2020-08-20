<template>
  <v-layout align-center> 
  <div class="home mx-auto">
    <h1 class="primary--text">Bienvenido al sistema</h1>
  </div>
  </v-layout>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
