<template>
  <v-main>
    <v-container class="mt-5">
      <v-layout wrap>
        <v-flex xs12>
          <div class="text-h4 font-weight-thin" id="aboutMe">
            About Me
          </div>
        </v-flex>
        <v-flex xs12 mt-5>
          <div class="body-1">{{ aboutMeText }}</div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      aboutMeText:
        "I currently work for Aerogility, a company that uses agent-based modelling to deliver maintenance forecasts for teams working in the global aviation industry.",
    };
  },
};
</script>
