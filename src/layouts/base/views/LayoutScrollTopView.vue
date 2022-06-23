<template>
  <v-main>
    <router-view />
    <TransitionCmp>
      <ButtonCmp
        @click="scrollTop"
        v-show="scrollShow"
        color="grey lighten-3"
        fab
        small
        fixed
        bottom
        right
        :ripple="false"
        :style="`margin-bottom:${this.$vuetify.application.top + 10}px`"
      >
        <v-icon>mdi-chevron-up</v-icon>
      </ButtonCmp>
    </TransitionCmp>
  </v-main>
</template>

<script>
  import ButtonCmp from '@/components/ButtonCmp.vue';
  import TransitionCmp from '@/components/TransitionCmp.vue';
  export default {
    name: 'LayoutScrollTopView',
    components: {
      ButtonCmp,
      TransitionCmp,
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
      },
      scrollTop() {
        const options = {
          duration: 50, //this.duration,
          offset: 0, //this.offset,
          easing: 'linear', //this.easing, easeInOutCubic
        };
        const target = document.querySelector('#app');

        this.$vuetify.goTo(target, options);
      },
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
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
