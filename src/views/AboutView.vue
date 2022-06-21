<template>
  <div>
    <div>
      <BtnTest
        color="teal"
        width="100%"
        large
        class="mt-5"
        btnTxtClass="text-subtitle-1 white--text"
      >
        로그인
      </BtnTest>
    </div>
    <div>
      <BtnTest
        color="teal"
        width="100%"
        large
        class="mt-5"
        outlined
        btnTxtClass="text-subtitle-1"
      >
        회원가입
      </BtnTest>
    </div>
    <div>
      <BtnTest class="secondary"> 조회하기 </BtnTest>
    </div>
    <div>
      <BtnTest class="primary lighten-1" width="100%" large> 구매하기 </BtnTest>
    </div>
    <div>
      <BtnTest color="secondary" outlined x-small :ripple="false">
        삭제
      </BtnTest>
      <BtnTest class="ml-2" color="primary" outlined x-small :ripple="false">
        구매하기
      </BtnTest>
    </div>
    <div>
      <BtnTest
        color="grey lighten-3"
        fab
        small
        fixed
        bottom
        right
        :ripple="false"
      >
        <div><v-icon>mdi-chevron-up</v-icon></div>
      </BtnTest>
    </div>

    <!-- signIn -->
    <div>
      <v-btn type="submit" class="mt-5" color="teal" width="100%" large>
        <div class="text-subtitle-1 white--text">로그인</div>
      </v-btn>
      <v-btn
        type="submit"
        class="mt-5"
        color="teal"
        width="100%"
        outlined
        large
      >
        <div class="text-subtitle-1">회원가입</div>
      </v-btn>
    </div>
    <!-- signup-terms -->
    <div>
      <v-btn type="submit" class="mt-5" color="teal " width="100%" large>
        <div class="text-subtitle-1 white--text">동의하고 가입하기</div>
      </v-btn>
    </div>
    <!-- signup-biz -->
    <div>
      <v-btn class="secondary" :disabled="invalid">조회하기</v-btn>
      <v-btn
        class="mt-3 mb-3 teal"
        width="100%"
        type="submit"
        large
        :disabled="dbizCheck"
      >
        <div class="text-subtitle-1 white--text">확인</div>
      </v-btn>
    </div>

    <!-- signup -->
    <div>
      <v-btn class="secondary">중복체크</v-btn>
      <v-btn class="secondary">인증번호 받기</v-btn>
      <v-btn class="secondary">인증번호 확인</v-btn>
      <v-btn
        class="mt-3 mb-3 teal"
        width="100%"
        type="submit"
        large
        :disabled="invalid"
      >
        <div class="text-subtitle-1 white--text">회원가입</div>
      </v-btn>
    </div>

    <!-- find-id -->
    <div>
      <v-btn class="teal" outlined dark width="100%" large>휴대폰 인증</v-btn>
      <v-btn color="teal" outlined dark width="100%" large>전송</v-btn>
      <v-btn class="teal" outlined dark width="100%" large>확인</v-btn>
    </div>
    <!-- find-pass -->
    <div>
      <v-btn class="teal" outlined dark width="100%" large
        >휴대폰으로 받기</v-btn
      >
      <v-btn class="teal" outlined dark width="100%" large>이메일로 받기</v-btn>
    </div>

    <!-- product/detail/12 -->
    <div>
      <v-btn
        color="primary"
        text-center
        large
        dark
        width="100%"
        class="font-weight-bold text-body-2"
      >
        구매하기
      </v-btn>
    </div>

    <!-- wish/view -->
    <div>
      <v-btn color="secondary" dark outlined x-small :ripple="false"
        >삭제</v-btn
      >
      <v-btn class="ml-2" color="primary" dark outlined x-small :ripple="false"
        >구매하기</v-btn
      >
    </div>
  </div>
</template>

<script>
  import BtnTest from '@/views/BtnTest.vue';
  export default {
    components: {
      BtnTest,
    },
  };
</script>

<style></style>
