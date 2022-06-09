<template>
  <v-container>
    <v-row>
      <v-carousel
        v-model="model"
        height="200"
        hide-delimiters
        hide-delimiter-background
        class="mt-1"
        cycle
        :show-arrows="false"
        @change="crsl_cnt = $event + 1"
      >
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
        <div
          class="white--text rounded-pill black text-no-wrap px-3 py-1 text-body-2"
          rounded
          small
          style="position: absolute; right: 5px; bottom: 15px"
        >
          {{ crsl_cnt }} / {{ colors.length }}
        </div>
      </v-carousel>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card
          class="mx-auto my-2"
          tile
          elevation="2"
          v-for="i in 12"
          :key="i"
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          />

          <v-card-title class="text-subtitle-2">
            알록패치 싱글 근육통 통증완화 의료기기 적외선 조사기, 엘립시스 적용
            하이
          </v-card-title>

          <v-card-subtitle class="pb-0">
            <div>
              <div class="text-caption">
                45%, <span class="text-decoration-line-through">10,000원</span>
              </div>
              <span class="red--text text-subtitle-1 font-weight-bold"
                >5,500원</span
              >
            </div>
          </v-card-subtitle>

          <v-card-actions class="pt-0">
            <v-spacer />

            <v-btn icon color="red">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <!-- <ScrollTopBtnCmp :scrollShow="scrollShow" /> -->
  </v-container>
</template>

<script>
  //  import ScrollTopBtnCmp from '@/components/ScrollTopBtnCmp.vue';
  export default {
    name: 'MainView',
    // components: {
    //   ScrollTopBtnCmp,
    // },
    data() {
      return {
        crsl_cnt: 1,
        model: 0,
        colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
      };
    },
  };
</script>
