<template>
  <section class="art">
    <v-container fluid>
      <v-row>
        <v-col
          v-for="(artItem, index) in artItems"
          :key="index"
          class="d-flex child-flex"
          cols="12"
          sm="6"
          md="6"
          lg="4"
          xl="4"
        >
          <v-card flat tile class="d-flex">
            <v-img
              :src="artItem.img"
              :lazy-src="artItem.img"
              aspect-ratio="1"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import artConstants from "../common/artContents";

export default {
  data() {
    return {
      artItems: artConstants.artItems
    };
  }
};
</script>

<style lang="scss" scoped>
</style>