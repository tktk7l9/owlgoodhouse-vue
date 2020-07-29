<template>
  <section class="home">
    <HomeHero />
    <HomeMenu />
    <!-- <HomeNews />
    <HomeFilm />
    <HomeMusic />
    <HomeArt />
    <HomeRadio />
    <HomeLineStamp />
    <HomeShop />-->
  </section>
</template>
<script>
import HomeHero from "./HomeComponents/HomeHero.vue";
import HomeMenu from "./HomeComponents/HomeMenu.vue";
// import HomeNews from "./HomeComponents/HomeNews.vue";
// import HomeFilm from "./HomeComponents/HomeFilm.vue";
// import HomeMusic from "./HomeComponents/HomeMusic.vue";
// import HomeArt from "./HomeComponents/HomeArt";
// import HomeRadio from "./HomeComponents/HomeRadio.vue";
// import HomeLineStamp from "./HomeComponents/HomeLineStamp.vue";
// import HomeShop from "./HomeComponents/HomeShop.vue";

export default {
  components: {
    HomeHero,
    HomeMenu
    // HomeNews,
    // HomeFilm,
    // HomeMusic,
    // HomeArt,
    // HomeRadio,
    // HomeLineStamp,
    // HomeShop
  }
};
</script>
<style lang="scss" scoped>
.home {
  padding-bottom: 50px;
}
</style>