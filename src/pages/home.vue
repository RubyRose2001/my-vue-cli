<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="jian">按钮-</button>
    <input
      v-model="val"
      type="text"
    >
    <button @click="add">按钮+</button>
    <button @click="jump">跳</button>
  </div>
</template>
<script>
import { home } from '../api/index';
import { mapMutations, mapGetters } from 'vuex';
import * as types from '@/store/types';
// console.log(globalConfig);

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '我是首页',
      val: '',
      opt: {
        json: 2,
        p: 3,
        sid: '1469_21117_26182_22075',
        req: 2,
        csor: 3,
        cb: 'jQuery110202833047158101678_1524725995275',
        _: new Date() * 1,
      },
    };
  },
  computed: {
    ...mapGetters([
      'number'
    ]),
  },
  created() {
    this.val = this.number;
    console.log(navigator.browserLanguage, navigator.systemLanguage, navigator.userLanguage);
  },
  methods: {
    jian() {
      this.val -= 1;
      const num = this.val < 0 ? 0 : this.val;
      this.setNumber(num);
    },
    jump() {
      const a = [{
        path: '/first',
        name: 'first',
        component: resolve => require(['./first.vue'], resolve),
        // component: resolve => require(['./First-24378769.js'], resolve),
        meta: {
          title: '另一页',
        },
      }];
      this.$router.addRoutes(a);
      // setTimeout(() => {
      //   this.$router.push('/first');
      // }, 1000);
      this.$router.push({
        path: '/first',
        params: {
          name: 'first',
        },
      });
    },
    add() {
      home().then((res) => {
        console.log(res);
      });
      this.val += 1;
      this.setNumber(this.val);
    },
    ...mapMutations({
      'setNumber': types.NUMBER,
    }),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
