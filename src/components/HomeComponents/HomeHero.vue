<template>
  <section class="home-hero">
    <v-container fluid fill-height class="home-hero__content">
      <!-- src="https://tech-dig.jp/wp/wp-content/uploads/2018/05/test.mp4" -->
      <!-- <video src="../../assets/video/home-hero.mp4" autoplay playsinline muted loop></video> -->
      <v-row>
        <v-col class="home-hero__content-text">
          <v-btn text href="https://tktk7l9.github.io/breakout-game/index.html" target="_blank"></v-btn>
          <p>{{ name }}</p>
          <p>{{ subtitle }}</p>
          <v-btn text v-model="drawer">
            <v-list-item
              v-for="(snsItem_owlgoodhouse, index) in snsItems_owlgoodhouse"
              :key="index"
              :href="snsItem_owlgoodhouse.url"
              target="_blank"
            >
              <v-icon large color="#fff">{{ snsItem_owlgoodhouse.icon }}</v-icon>
            </v-list-item>
          </v-btn>
          <v-btn text href="../contact">
            <v-icon large color="#fff">mdi-email</v-icon>
          </v-btn>
          <p></p>
          <v-btn
            text
            href="https://www.instagram.com/p/J72Ldyq6pq/?utm_source=ig_web_copy_link"
            target="_blank"
          ></v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import constants from "../../common/constants";

export default {
  data() {
    return {
      name: "owl good house",
      subtitle: "総合エンターテインメント＆リラックス研究所",
      drawer: false,
      snsItems_owlgoodhouse: constants.snsItems_owlgoodhouse
    };
  }
};
</script>

<style lang="scss" scoped>
.video__container {
  position: relative;
}
video {
  width: 100%;
}
.home-hero__content {
  background: url("../../assets/images/materials/owlgoodhouse-space.jpg");
  background-size: cover;
  background-position: center center;
  widows: 100%;
  height: 50vh;

  @include display_pc {
    height: 100vh;
  }

  &-text {
    color: white;
    text-align: center;
    font-size: 28px;
    font-weight: bold;

    @include display_pc {
      font-size: 40px;
    }
  }
}
</style>