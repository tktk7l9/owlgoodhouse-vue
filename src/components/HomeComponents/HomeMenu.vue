<template>
  <v-container fluid>
    <v-row class="fill-height" align="center" justify="center">
      <template v-for="(homeMenuItem, i) in homeMenuItems">
        <v-col :key="i" cols="12" md="4">
          <v-hover v-slot:default="{ hover }">
            <v-card
              :to="homeMenuItem.url"
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-img :src="homeMenuItem.img" height="225px">
                <v-card-title class="title white--text">
                  <v-row class="fill-height flex-column" justify="space-between">
                    <p class="mt-4 subheading text-center">{{ homeMenuItem.name }}</p>
                  </v-row>
                </v-card-title>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>
<script>
import constants from "../../common/constants";

export default {
  data: () => ({
    homeMenuItems: constants.homeMenuItems,
    transparent: "rgba(255, 255, 255, 0)"
  })
};
</script>
<style lang="scss" scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}
</style>