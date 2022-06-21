<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card outlined>
          <v-card-title class="mb-2"> 본인 확인 </v-card-title>
          <v-card-subtitle> 인증수단을 선택해주세요. </v-card-subtitle>
          <v-card-text>
            <ButtonCmp
              color="teal"
              width="100%"
              large
              class="mt-5"
              btnTxtClass="white--text"
            >
              휴대폰 인증
            </ButtonCmp>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card outlined>
          <v-card-title class="mb-2">
            회원정보에 등록된 휴대폰 번호
          </v-card-title>
          <v-card-subtitle>
            회원정보에 등록된 휴대폰 번호 회원정보에 등록된 휴대폰 번호가
            생각나지 않으시면 위의 본인 확인을 통해 아이디(이메일)를 찾아
            주세요.
          </v-card-subtitle>

          <v-card-text>
            <ValidationObserver ref="observer2">
              <ValidationProvider
                v-slot="{ errors }"
                name="이름"
                :rules="{ required: true }"
              >
                <v-text-field
                  v-model="name"
                  label="이름"
                  outlined
                  solo
                  dense
                  :error-messages="errors"
                />
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors }"
                name="휴대폰번호"
                :rules="{ required: true, numeric: true }"
              >
                <v-text-field
                  v-model="phoneNumber"
                  label="휴대폰번호"
                  solo
                  outlined
                  dense
                  :error-messages="errors"
                />
              </ValidationProvider>
              <ButtonCmp
                color="teal"
                width="100%"
                large
                class="mt-5"
                outlined
                @click="sendMsg"
              >
                전송
              </ButtonCmp>
            </ValidationObserver>
          </v-card-text>

          <template v-if="showAuthNumber">
            <v-divider />
            <v-card-text>
              <ValidationObserver ref="observer3">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="인증번호"
                  :rules="{ numeric: true, is: clickBtn && confirmation }"
                >
                  <v-text-field
                    v-model="authNumber"
                    label="인증번호"
                    outlined
                    solo
                    dense
                    :error-messages="errors"
                    @keydown="clickBtn = false"
                  />
                </ValidationProvider>
                <ButtonCmp
                  color="teal"
                  width="100%"
                  large
                  class="mt-5"
                  btnTxtClass="white--text"
                  @click="confirmAuthNumber"
                >
                  확인
                </ButtonCmp>
              </ValidationObserver>
            </v-card-text>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
  import { email, required, numeric, is } from 'vee-validate/dist/rules';
  import ButtonCmp from '@/components/ButtonCmp.vue';
  // extend('max', () => {
  //   ...max
  //   console.log('hi');
  // });
  extend('email', {
    ...email,
    message: '{_field_}형식이 올바르지 않습니다.',
  });
  extend('required', {
    ...required,
    message: '{_field_}을(를) 입력해 주세요.',
  });
  extend('numeric', {
    ...numeric,
    message: '{_field_} 입력오류',
  });
  extend('is', {
    ...is,
  });

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
      ButtonCmp,
    },
    created() {},
    data() {
      return {
        name: '',
        phoneNumber: '',
        showAuthNumber: false,
        authNumber: null,
        confirmation: '',
        clickBtn: false,
      };
    },
    methods: {
      sendMsg() {
        this.$refs.observer2.validate();
        //인증번호 전송~
        const timer = setTimeout(() => {
          this.confirmation = '1234'; //인증번호 받아와서 셋팅
          this.showAuthNumber = true;
          clearTimeout(timer);
        }, 2000);
      },
      confirmAuthNumber() {
        this.clickBtn = true;
        console.log(`인증번호 확인 api 전송 : ${this.authNumber}`);
      },
    },
  };
</script>

<style></style>
