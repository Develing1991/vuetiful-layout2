<template>
  <v-main>
    <router-view />
    <ScrollTopBtnCmp :scrollShow="scrollShow" />
  </v-main>
</template>

<script>
  import ScrollTopBtnCmp from '@/components/ScrollTopBtnCmp.vue';
  export default {
    name: 'CommonView',
    components: {
      ScrollTopBtnCmp,
    },
    data() {
      return {
        scrollShow: false,
      };
    },
    methods: {
      handleScroll() {
        const scrollPosition =
          window.scrollY || document.documentElement.scrollTop;
        this.scrollShow = scrollPosition > 200 ? true : false;
        //console.log(this.scrollShow);
      },
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
      console.log(this.$route);
    },
  };
</script>

<style>
  /* https://vuetifyjs.com/en/features/breakpoints/#breakpoint-service  mixin찾아서 활용해서 appbar, view, footer 적용하기 리사이즈*/
  .isDesktop {
    max-width: 720px !important;
    margin: 0 auto !important;
    border: 1px solid #eee;
    box-sizing: border-box;
  }
</style>
