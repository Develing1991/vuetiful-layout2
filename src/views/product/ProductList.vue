<template>
  <!-- <v-container fluid>
    <ProductItem />
  </v-container> -->
  <v-container>
    <ProductItem v-for="i in 32" :key="i" />

    <v-fab-transition>
      <transition name="slide-fade">
        <v-btn
          v-if="this.scrollShow"
          color="grey lighten-3"
          fab
          small
          fixed
          bottom
          right
          :ripple="false"
          @click="scrollTop"
        >
          <div><v-icon>mdi-chevron-up</v-icon></div>
        </v-btn>
      </transition>
    </v-fab-transition>
  </v-container>
</template>

<script>
  import ProductItem from '@/views/product/ProductItem.vue';
  export default {
    name: 'ProductList',
    components: {
      ProductItem,
    },
    data() {
      return {
        scrollShow: false,
      };
    },
    methods: {
      scrollTop() {
        const options = {
          duration: 50, //this.duration,
          offset: 0, //this.offset,
          easing: 'linear', //this.easing, easeInOutCubic
        };
        // id="commonSearchAppbar"는 /layout/common/appbar/SearchAppbar.vue에 있음
        const target = document.querySelector('#commonSearchAppbar');
        this.$vuetify.goTo(target, options);
      },
      handleScroll() {
        const scrollPosition =
          window.scrollY || document.documentElement.scrollTop;
        this.scrollShow = scrollPosition > 400 ? true : false;
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
