<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <!-- <ProductItem :self-max-width="1000" height="700" /> -->
        <v-card class="mx-auto">
          <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate />
          </template>

          <!-- <v-img
            src="https://dliveimg.kbnc.co.kr/shop/upload/title/309/0000000000685971653262694385_title.png"
          ></v-img> -->
          <v-carousel
            :show-arrows="false"
            delimiter-icon="mdi-circle-medium"
            :hide-delimiter-background="true"
            height="430"
          >
            <v-carousel-item
              v-for="(item, i) in images"
              :key="i"
              :src="item.src"
            />
          </v-carousel>

          <v-card-title
            >[경희 한방바이오] 쏘팔 청춘파워 코사놀(1,000mg x 30캡슐 x
            2박스)</v-card-title
          >

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              />

              <div class="grey--text ms-4">4.5 (413)</div>
            </v-row>

            <div class="my-4">
              <span class="text-h6 font-weight-bold red--text mr-2">83%</span>
              <span class="text-h5 font-weight-bold black--text mr-2"
                >19,900원</span
              >
              <span class="text-decoration-line-through">120,000원</span>
            </div>

            <div>추가설명</div>
          </v-card-text>

          <v-divider class="mx-4 mb-3" />

          <v-tabs fixed-tabs background-color="primary" dark v-model="tab">
            <v-tabs-slider color="white" />
            <v-tab v-for="item in items" :key="item.name">
              {{ item.name }}
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in items" :key="item.name">
              <v-card flat class="mb-16">
                <!-- <v-card-text v-text="item.text"></v-card-text> -->
                <template v-if="item.tab_dv === 'image'">
                  <v-img :src="item.url" />
                </template>
                <template v-else>
                  <v-card-text class="mb-10" v-text="item.text" />
                </template>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
        <!-- 하단 푸터 픽스 -->
        <v-footer v-bind="localAttrs" fluid class="px-0" app>
          <v-card width="100%" class="grey lighten-3 text-center" outlined>
            <v-card-text class="white--text">
              <v-row justify="center" align="center">
                <v-col cols="2">
                  <v-icon size="24px" :color="false ? 'grey' : 'red'">{{
                    false ? 'mdi-heart-outline' : 'mdi-heart'
                  }}</v-icon>
                  <!-- <v-icon>mdi-heart</v-icon> -->
                </v-col>
                <!-- <v-col class="px-2">
                  <v-btn
                    text-center
                    large
                    outlined
                    width="100%"
                    color="primary"
                  >
                    선물하기
                  </v-btn>
                </v-col> -->
                <v-col class="px-2 py-1">
                  <ButtonCmp
                    color="primary"
                    class="font-weight-bold"
                    width="100%"
                    large
                  >
                    구매하기
                  </ButtonCmp>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-footer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import ButtonCmp from '@/components/ButtonCmp.vue';
  export default {
    components: {
      ButtonCmp,
    },
    data: () => ({
      tab: null,
      items: [
        {
          name: '상품설명',
          tab_dv: 'image',
          url: 'https://img.welfareplus.com/img/dtl/00309/w/3093119_0.jpg',
        },
        { name: 'Q&A', tab_dv: 'Question', text: '888882' },
      ],
      images: [
        {
          src1: 'https://dliveimg.kbnc.co.kr/shop/upload/title/309/0000000000685971653262694385_title.png',
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src1: 'https://dliveimg.kbnc.co.kr/shop/upload/title/309/0000000000685971653262694385_title.png',
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src1: 'https://dliveimg.kbnc.co.kr/shop/upload/title/309/0000000000685971653262694385_title.png',
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src1: 'https://dliveimg.kbnc.co.kr/shop/upload/title/309/0000000000685971653262694385_title.png',
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }),
    computed: {
      localAttrs() {
        const attrs = {};
        attrs.fixed = true;
        return attrs;
      },
    },
  };
</script>

<style scoped>
  .v-btn--icon.v-size--small {
    height: 14px !important;
    width: 14px !important;
  }
</style>
