<template>
  <section class="shop">
    <AppBackgroundHolder :title="title" />
    <h2>Comming soon...</h2>
  </section>
</template>
<script>
import AppBackgroundHolder from "./AppBackgroundHolder.vue";

export default {
  data() {
    return {
      title: "Shop"
    };
  },
  components: {
    AppBackgroundHolder
  }
};
</script>