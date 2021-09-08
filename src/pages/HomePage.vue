<template>
  <v-main>
    <v-container class="mt-5">
      <v-layout wrap>
        <v-flex xs12>
          <div class="text-h4 font-weight-thin" id="welcome">
            Welcome to my website!
          </div>
        </v-flex>
        <v-flex xs12 mt-5>
          <div class="body-1">{{ aboutText }}</div>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xs12 mt-5>
          <div class="body-1">{{ aboutWebsite }}</div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      aboutText:
        "I created this website in hope that it will serve as some kind of journal for me to keep track of stuff I try out.",
      aboutWebsite: "This website is written using Vue.js with Vuetify.",
    };
  },
};
</script>
