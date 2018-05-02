<template>
  <div class="container">
    <component :is="currentView"></component>
  </div>
</template>
<script>
import Vue from 'vue';

export default {
  name: 'HelloWorld',
  data() {
    return {
      currentView: '',
    };
  },
  created() {
    console.log(2);
    this.setCurrent();
  },
  methods: {
    setCurrent() {
      const names = this.$route.params.name;
      const component = Vue.component(names);
      console.log(component);
      if (component) {
        this.currentView = component;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
