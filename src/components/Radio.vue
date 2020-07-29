<template>
  <section class="radio">
    <v-container fluid>
      <h2>- tide FM 毎週水曜12時Liveから配信 -</h2>
      <v-row class="radio__contents">
        <v-col>
          <v-row justify="center" cols="12" sm="6" md="6" lg="6" xl="6">
            <div v-for="(videoItem, index) in videoItems" :key="index" class="d-flex child-flex">
              <youtube :video-id="videoItem.videoId" target="_blank" />
            </div>
          </v-row>
        </v-col>
      </v-row>
      <h2>- Spotify -</h2>
      <v-row class="radio__contents">
        <v-col>
          <v-card class="mx-auto">
            <iframe
              src="https://open.spotify.com/embed-podcast/episode/7zOkCwJavRIHSUmQwJXlcC"
              width="100%"
              height="232"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </v-card>
          <v-card class="mx-auto">
            <iframe
              src="https://open.spotify.com/embed-podcast/episode/0vq0bNUyIv1PgAlx4lYU6I"
              width="100%"
              height="232"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import radioContents from "../common/radioContents";
import Vue from "vue";
import VueYoutube from "vue-youtube";

Vue.use(VueYoutube);

export default {
  data() {
    return {
      videoItems: radioContents.videoItems,
      radioItems: radioContents.radioItems
    };
  }
};
</script>
<style lang="scss" scoped>
.radio__contents {
  margin: 20px;
  justify-content: center;
}
</style>