<template>
  <div class="page">
    <v-header></v-header>
    <v-tab :currentPage="currentPage"></v-tab>
    <div>rank</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {
  },
  data() {
    return {
      currentPage: 'rank'
    };
  },
  onLoad() {
    this.getList();
  },
  methods: {
    getList() {
      
    }
  }
};
</script>


<style lang="scss" scoped>

</style>
