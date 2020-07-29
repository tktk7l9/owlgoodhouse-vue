<template>
  <section class="news">
    <v-container>
      <v-row class="home-news__contents">
        <v-col class="home-news__contents-img">
          <v-flex xs12>
            <Timeline
              :id="user_id"
              sourceType="profile"
              :options="{ tweetLimit: '5' , theme: 'dark' }"
            />
          </v-flex>
        </v-col>
        <v-col class="home-news__contents-img">
          <v-flex xs12>
            <Timeline
              :id="user_id"
              sourceType="profile"
              :options="{ tweetLimit: '5', theme: 'dark' }"
            />
          </v-flex>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import { Timeline } from "vue-tweet-embed";
export default {
  components: {
    Timeline
  },
  data: function() {
    return {
      user_id: "owlgoodhouse"
    };
  }
};
</script>