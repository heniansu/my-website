<template>
  <v-app-bar app absolute elevate-on-scroll class="indigo lighten-1">
    <v-layout justify-center>
      <v-container>
        <v-layout>
          <v-toolbar-title class="toolbar-title" @click="redirectToHome()">
            <div
              :class="{
                'text-h4 font-weight-thin white--text':
                  $vuetify.breakpoint.smAndUp,
                'text-h6 font-weight-thin white--text':
                  $vuetify.breakpoint.smAndDown,
              }"
            >
              Henian Su
            </div>
          </v-toolbar-title>

          <v-spacer> </v-spacer>

          <div class="hidden-sm-and-down">
            <v-tabs
              v-model="activeTab"
              optional
              :background-color="backgroundColour"
              :color="tabColour"
            >
              <v-tab
                v-for="(link, i) in links"
                :key="i"
                :ripple="false"
                class="subtitle font-weight-thin white--text"
                @click="$router.push({ path: `/${link.path}` })"
              >
                {{ link.title }}
              </v-tab>
            </v-tabs>
          </div>

          <div class="hidden-md-and-up">
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="grey" text v-bind="attrs" v-on="on">
                  <v-icon right>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list class="indigo lighten-1">
                <v-list-item
                  v-for="(link, i) in links"
                  :key="i"
                  @click="$router.push({ path: `/${link.path}` })"
                >
                  <v-list-item-title
                    class="subtitle font-weight-thin white--text text-uppercase"
                    >{{ link.title }}</v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-layout>
      </v-container>
    </v-layout>
  </v-app-bar>
</template>

<script>
import { ROUTE_NAME } from "@/router/constants";
export default {
  data() {
    return {
      ROUTE_NAME,
      links: [
        { title: "About", path: ROUTE_NAME.ABOUT },
        // { title: "Blog", path: ROUTE_NAME.BLOG },
      ],
      activeTab: null,
      backgroundColour: "#5c6bc0",
      tabColour: "#ffffff",
    };
  },
  methods: {
    redirectToHome() {
      // Set activeTab to null so tabs aren't highlghted
      this.activeTab = null;
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss">
.toolbar-title {
  cursor: pointer;
  // TODO toolbar-title gets pushed up when v-tabs are added
  padding-top: 4px;
}
.v-tab::before {
  background-color: transparent !important;
}
</style>
