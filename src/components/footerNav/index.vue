<template>
  <div class="footer">
    <footer class="footer-nav">
      <nav class="nav">
        <router-link
          v-for="(item,index) in navArray"
          :key="index"
          :to="item.port"
          tag="div"
          class="nav-item"
          active-class="active"
          :class="item.port.substring(1)"
        >
          <i></i>
          <span>{{item.name}}</span>
        </router-link>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  name: "footerNav",
  data() {
    return {
      navArray: [
        {
          name: "首页",
          port: "/home"
        },
        {
          name: "分类",
          port: "/classify"
        },
        {
          name: "购物车",
          port: "/car"
        },
        {
          name: "我的",
          port: "/mine"
        }
      ]
    };
  },
  components: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {}
};
</script>

<style lang='stylus' scoped>
.footer {
  widtHeight(100%, 50px);
  position: fixed;
  bottom: 0;

  .footer-nav {
    setTopBorder();
    widtHeight(100%, 100%);

    .nav {
      widtHeight(100%, 100%);
      display: flex;

      .nav-item {
        flex: 1;
        juzhong();
      }

      .active {
        color: text-active-color;
      }
    }
  }
}
</style>