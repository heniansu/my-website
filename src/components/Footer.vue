<template>
  <v-footer app absolute class="indigo lighten-1">
    <v-layout justify-center>
      <v-container>
        <v-layout>
          <div class="font-weight-thin white--text">
            Site last updated: September 2021
          </div>

          <v-spacer></v-spacer>
          <div class="hidden-sm-and-down">
            <v-btn
              v-for="icon in icons"
              :key="icon.id"
              class="mx-4 white--text"
              icon
              :href="icon.path"
            >
              <v-icon size="24px">
                {{ icon.logo }}
              </v-icon>
            </v-btn>
          </div>
          <div class="hidden-md-and-up">
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="grey" text v-bind="attrs" v-on="on">
                  <v-icon right>mdi-chevron-up</v-icon>
                </v-btn>
              </template>
              <v-list class="indigo lighten-1">
                <v-list-item
                  v-for="icon in icons"
                  :key="icon.id"
                  :href="icon.path"
                >
                  <v-list-item-icon class="mx-4 justify">
                    <v-icon size="24px" color="white">
                      {{ icon.logo }}
                    </v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-layout>
      </v-container>
    </v-layout>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: [
      { id: "Github", logo: "mdi-github", path: "https://github.com/heniansu" },
      // {
      //   id: "Linkedin",
      //   logo: "mdi-linkedin",
      //   path: "https://www.linkedin.com/in/henian-su-56340a194",
      // },
    ],
  }),
};
</script>
