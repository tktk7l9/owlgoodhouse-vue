<template>
  <section class="biography">
    <v-container fluid fill-height class="home-hero__content">
      <v-row class="fill-height" align="center" justify="center">
        <template v-for="(item, i) in items">
          <v-col :key="i">
            <v-card class="mx-auto" width="300" tile>
              <v-list :flat="flat" :nav="nav" :avatar="avatar">
                <v-list-item-group>
                  <v-list-item :inactive="inactive">
                    <v-list-item-avatar v-if="avatar">
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title v-html="item.name"></v-list-item-title>
                      <v-list-item-subtitle
                        v-for="(introduction, i) in item.introductions"
                        :key="i"
                      >{{ introduction }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
              <v-list-item
                v-for="(snsItem, index) in item.snsItems"
                :key="index"
                :href="snsItem.url"
                target="_blank"
                text
              >
                <v-icon left>{{ snsItem.icon }}</v-icon>
                <span>{{ snsItem.account }}</span>
              </v-list-item>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import constants from "../common/constants";

export default {
  data: () => ({
    items: [
      {
        avatar:
          "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-19/s320x320/47037777_1269115109896273_5301016866297217024_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_ohc=l7LtoCvVlt8AX9jELbI&oh=1ed502aa7b5a210a7be2251cbe4f7c94&oe=5F4192CC",
        name: "owl good house",
        snsItems: constants.snsItems_owlgoodhouse,
        introductions: [
          "owl good = all good",
          "= なんでも良い👍",
          "🦉Happy Funky Trippy",
          ".",
          ".",
          ".",
          "."
        ]
      },
      {
        avatar:
          "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-19/s320x320/66634660_730118867408250_6956012763541929984_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_ohc=5GgSfqrMR-QAX8qkUT4&oh=64b6f4ef52917a7ad26f7cbc7e42adee&oe=5F42CEC9",
        name: "Mutsumi Ishihara",
        snsItems: constants.snsItems_mutsu,
        introductions: [
          "🎞owl good house",
          "@owl.good.house",
          "🎵UNERI @unerimusic",
          "🕺脊髄ブレイカーズ/CONIS/",
          "🤼‍♀️久我山レスリング部",
          ".",
          "."
        ]
      },
      {
        avatar:
          "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-19/s320x320/84303156_512990182694314_47546335938740224_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_ohc=RFew0Rv9fdsAX8-iCHR&oh=3924122976d972eaf79bf5680dfa32c7&oe=5F40AA22",
        name: "Kazuki Minami / なんくそ",
        snsItems: constants.snsItems_nankuso,
        introductions: [
          "🕺@owl.good.house",
          "🎹@unerimusic",
          ".",
          ".",
          ".",
          ".",
          "."
        ]
      },
      {
        avatar:
          "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-19/s320x320/13277688_1739911332923066_611654953_a.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_ohc=XQFz4ulAyBUAX9WrvxF&oh=d4a385d61c3bb84cbd2aac9f6965f1ed&oe=5F3F293D",
        name: "ちった × Citta",
        snsItems: constants.snsItems_citta,
        introductions: [
          "笑顔でアメリカチャリンコ横断",
          "達成🌞 NY ☞ LA 2014.8.16-10.16",
          "D-mc 16th / 脊髄",
          "りきまる 店長",
          "owl good house",
          "LINEスタンプ",
          "濃ゆく濃ゆく"
        ]
      }
    ],
    flat: true,
    inactive: false,
    nav: true,
    avatar: true
  })
};
</script>

<style lang="scss" scoped>
.biography {
  background: url("../assets/images/profile.jpg");
  background-size: cover;
  background-position: center center;
  widows: 100%;
  height: 100vh;

  &-text {
    text-align: start;
    font-size: 20px;
    font-weight: bold;

    @include display_pc {
      font-size: 10px;
    }
  }
}
.v-card {
  opacity: 0.8;
}
</style>