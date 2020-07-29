<template>
  <section class="film">
    <v-container fluid>
      <h2>- owl good film -</h2>
      <v-row class="film">
        <v-col>
          <v-row justify="center" cols="12" sm="6" md="6" lg="6" xl="6">
            <div v-for="(videoItem, index) in videoItems" :key="index" class="d-flex child-flex">
              <youtube :video-id="videoItem.videoId" target="_blank" />
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import filmContents from "../common/filmContents";
import Vue from "vue";
import VueYoutube from "vue-youtube";

Vue.use(VueYoutube);

export default {
  data() {
    return {
      videoItems: filmContents.videoItems
    };
  }
};
</script>
<style lang="scss" scoped>
.film__contents {
  margin: 20px;
  justify-content: center;
}
</style>