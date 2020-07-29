<template>
  <header>
    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-tabs dark>
        <v-tab
          v-for="(menuItem, index) in menuItems"
          :key="index"
          :to="menuItem.url"
        >{{ menuItem.name }}</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary fixed>
      <v-list-item-group>
        <v-list-item v-for="(menuItem, index) in menuItems" :key="index" :to="menuItem.url">
          <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
        </v-list-item>
        <br />
        <h3>SNS</h3>
        <hr />
        <v-list-item
          v-for="(snsItem_owlgoodhouse, index) in snsItems_owlgoodhouse"
          :key="index"
          :href="snsItem_owlgoodhouse.url"
          target="_blank"
        >
          <v-list-item-title>{{ snsItem_owlgoodhouse.name }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-navigation-drawer>
  </header>
</template>
 
<script>
import constants from "../common/constants";

export default {
  data() {
    return {
      title: "owl good house",
      drawer: false,
      menuItems: constants.menuItems,
      snsItems_owlgoodhouse: constants.snsItems_owlgoodhouse
    };
  }
};
</script>
 
<style lang="scss" scoped>
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}

.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}

.v-tabs {
  display: none;

  @include display_pc {
    display: block !important;
  }
}
</style>