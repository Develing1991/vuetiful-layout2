<template>
  <div>
    <WishItem v-for="i in 32" :key="i" />
    <ScrollTopBtnCmp :scrollShow="scrollShow" />
  </div>
</template>

<script>
  import WishItem from '@/views/wish/WishItem.vue';
  import ScrollTopBtnCmp from '@/components/ScrollTopBtnCmp.vue';
  export default {
    name: 'WishList',
    components: {
      WishItem,
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
      console.log(this.$route.params.searchTerm ?? ''); //nullish
    },
  };
</script>

<style>
  .slide-fade-enter-active {
    transition: all 0.5s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(10px);
    opacity: 0;
  }
</style>
