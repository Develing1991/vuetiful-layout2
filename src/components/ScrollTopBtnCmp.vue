<template>
  <v-fab-transition>
    <transition name="slide-fade">
      <v-btn
        v-if="scrollShow"
        color="grey lighten-3 "
        elevation="3"
        :style="`margin-bottom:${this.$vuetify.application.top + 10}px`"
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
</template>

<script>
  export default {
    props: {
      scrollShow: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      scrollTop() {
        const options = {
          duration: 50, //this.duration,
          offset: 0, //this.offset,
          easing: 'linear', //this.easing, easeInOutCubic
        };
        const target = document.querySelector('#parentAppbar');

        this.$vuetify.goTo(target, options);
      },
    },
  };
</script>

<style></style>
