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

<style></style>
