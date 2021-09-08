<template>
  <v-app>
    <Navbar />
    <v-main style="background-color: white">
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    Footer,
    Navbar,
  },
};
</script>
