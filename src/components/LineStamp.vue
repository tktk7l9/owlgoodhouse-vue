<template>
  <section class="lineStamp">
    <v-container fluid>
      <v-row justify="center">
        <template v-for="(lineStampItem, index) in lineStampItems">
          <v-col :key="index" class="d-flex child-flex" cols="12" sm="6" md="5" lg="4" xl="4">
            <v-card class="mx-auto" :href="lineStampItem.url" target="_blank">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="headline">{{ lineStampItem.name }}</v-list-item-title>
                  <v-list-item-subtitle>by {{ lineStampItem.author }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-img :src="lineStampItem.img" :lazy-src="lineStampItem.img">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import lineStampConstants from "../common/lineStampContents";

export default {
  data() {
    return {
      lineStampItems: lineStampConstants.lineStampItems
    };
  }
};
</script>