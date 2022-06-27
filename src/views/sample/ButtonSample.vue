<template>
  <div>
    <div>
      <ButtonCmp
        color="teal"
        width="100%"
        large
        class="mt-5"
        btnTxtClass="text-subtitle-1 white--text"
      >
        로그인
      </ButtonCmp>
    </div>
    <div>
      <ButtonCmp
        color="teal"
        width="100%"
        large
        class="mt-5"
        btnTxtClass="white--text"
      >
        로그인
      </ButtonCmp>
    </div>
    <div>
      <ButtonCmp
        color="teal"
        width="100%"
        large
        class="mt-5"
        outlined
        btnTxtClass="text-subtitle-1"
      >
        회원가입
      </ButtonCmp>
    </div>
    <div>
      <ButtonCmp color="secondary"> 조회하기 </ButtonCmp>
      <ButtonCmp color="secondary" disabled> 조회하기 </ButtonCmp>
    </div>
    <div>
      <ButtonCmp color="secondary" class="float-right" disabled>
        조회하기
      </ButtonCmp>
      <ButtonCmp color="secondary" class="float-right"> 조회하기 </ButtonCmp>
    </div>
    <div>
      <ButtonCmp color="primary lighten-1" width="100%" large>
        구매하기
      </ButtonCmp>
    </div>
    <div>
      <ButtonCmp color="primary" class="font-weight-bold" width="100%" large>
        구매하기
      </ButtonCmp>
    </div>
    <div>
      <ButtonCmp color="secondary" outlined x-small :ripple="false">
        삭제
      </ButtonCmp>
      <ButtonCmp color="primary" class="ml-2" outlined x-small :ripple="false">
        구매하기
      </ButtonCmp>
    </div>
    <div>
      <ButtonCmp
        color="grey lighten-3"
        fab
        small
        fixed
        bottom
        right
        :ripple="false"
      >
        <div><v-icon>mdi-chevron-up</v-icon></div>
      </ButtonCmp>
    </div>
    <div>
      <ButtonCmp
        color="orange"
        fab
        fixed
        bottom
        left
        btnTxtClass="white--text"
        elevation="5"
      >
        <v-icon>mdi-plus</v-icon>
      </ButtonCmp>
    </div>
  </div>
</template>

<script>
  import ButtonCmp from '@/components/ButtonCmp.vue';
  export default {
    components: {
      ButtonCmp,
    },
  };
</script>

<style></style>
