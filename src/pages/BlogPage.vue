<template>
  <v-main>
    <v-container class="mt-5">
      <v-layout wrap>
        <v-flex xs12>
          <div class="text-h4 font-weight-bold" id="blog">
            Blog
          </div>
        </v-flex>
        <v-flex xs12 mt-5>
          <div class="body-1">{{ blogText }}</div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      blogText: "Work in progress",
    };
  },
};
</script>
