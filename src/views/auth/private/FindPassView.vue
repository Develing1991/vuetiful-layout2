<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card outlined>
          <v-card-title class="mb-2"> 비밀번호 찾기 </v-card-title>
          <v-card-subtitle class="pb-0">
            회원 비밀번호는 암호화 저장되어 분실 시 찾아드릴 수 없는 정보입니다.
          </v-card-subtitle>
          <v-card-subtitle class="pt-0">
            등록된 회원정보 확인을 통해 비밀번호를 재설정 하실 수 있습니다.
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
                name="이메일"
                :rules="{ required: true, email: true }"
              >
                <v-text-field
                  v-model="email"
                  label="이메일"
                  solo
                  outlined
                  dense
                  :error-messages="errors"
                />
              </ValidationProvider>
              <v-row>
                <v-col cols="6">
                  <v-btn
                    class="teal"
                    outlined
                    dark
                    width="100%"
                    large
                    @click="sendPhone"
                    >휴대폰으로 받기</v-btn
                  >
                </v-col>
                <v-col cols="6">
                  <v-btn
                    class="teal"
                    outlined
                    dark
                    width="100%"
                    large
                    @click="sendEmail"
                    >이메일로 받기</v-btn
                  >
                </v-col>
              </v-row>
            </ValidationObserver>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';

  import { email, required, numeric } from 'vee-validate/dist/rules';
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

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    created() {},
    data() {
      return {
        name: '',
        email: '',
      };
    },
    methods: {
      sendPhone() {
        this.$refs.observer2.validate();
      },
      sendEmail() {
        this.$refs.observer2.validate();
      },
    },
  };
</script>

<style></style>
