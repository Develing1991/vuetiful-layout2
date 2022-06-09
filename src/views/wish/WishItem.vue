<template>
  <div>
    <v-list three-line>
      <v-list-item
        @click="
          $router.push({
            name: 'ProductDetail',
            params: { id: '12' },
          })
        "
      >
        <v-list-item-avatar tile size="90" color="grey">
          <v-img
            src="https://thumbnail6.coupangcdn.com/thumbnails/remote/300x300ex/image/product/image/vendoritem/2019/02/11/3186737276/e4f9115d-ff6d-406c-8e9e-52382c5b0abc.jpg"
          />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-subtitle class="font-weight-bold mb-2 text-caption">
            알록패치 싱글 근육통 통증완화 의료기기 적외선 조사기, 엘립시스 적용
            하이ㅋ
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <v-btn text class="text-caption red white--text" x-small>
              45% 할인</v-btn
            >
            <span
              class="text-caption text-decoration-line-through ml-2 grey--text"
            >
              10,000원
            </span>
          </v-list-item-subtitle>
          <v-list-item-subtitle class="font-weight-bold mb-1">
            <span class="black--text text-subtitle-2">5,500원</span>
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <v-btn
              color="secondary"
              dark
              outlined
              x-small
              @click.stop="deleteWish"
              :ripple="false"
              >삭제</v-btn
            >
            <v-btn
              class="ml-2"
              color="primary"
              dark
              outlined
              x-small
              @click.stop="buyWish"
              :ripple="false"
              >구매하기</v-btn
            >
          </v-list-item-subtitle>
          <!-- v-list-item-title -->
        </v-list-item-content>

        <!-- <v-list-item-icon @click="aa">
          <v-icon :color="true ? 'red' : 'grey'">
            {{ true ? 'mdi-heart' : 'mdi-heart-outline' }}
          </v-icon>
        </v-list-item-icon> -->
      </v-list-item>
    </v-list>

    <v-divider />
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      deleteWish() {
        console.log('위시 삭제');
      },
      buyWish() {
        console.log('위시 구매하기');
      },
    },
  };
</script>

<style></style>
