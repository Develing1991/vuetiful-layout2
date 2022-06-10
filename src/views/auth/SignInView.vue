<template>
  <v-container class="px-3">
    <v-row justify="space-around" class="px-0">
      <v-col cols="11" class="px-0">
        <div
          style="text-align: center"
          class="font-weight-bold text-h4 mb-3 mt-3"
        >
          LOG IN
        </div>
        <!-- <div>
          <v-img
            class="mx-auto"
            src="https://bos.kkulcon.com/static/assets/img/common/logo_main.png"
            height="55"
            width="114"
          >
          </v-img>
        </div> -->

        <div class="mt-5">
          <ValidationObserver>
            <v-form>
              <ValidationProvider
                name="이메일"
                rules="required|email"
                v-slot="{ errors }"
              >
                <v-text-field
                  color="teal"
                  v-model="email"
                  label="이메일"
                  prepend-inner-icon="mdi-email-outline"
                  outlined
                  dense
                  :error-messages="errors"
                />
              </ValidationProvider>
              <ValidationProvider
                name="비밀번호"
                rules="required"
                v-slot="{ errors }"
              >
                <!-- v-slot="{ errors, invalid }" -->
                <!-- :hide-details="!invalid" -->
                <v-text-field
                  v-model="password"
                  color="teal"
                  label="비밀번호"
                  prepend-inner-icon="mdi-lock-outline"
                  :append-icon="
                    password.length > 0
                      ? showPass
                        ? 'mdi-eye'
                        : 'mdi-eye-off'
                      : ''
                  "
                  :type="showPass ? 'text' : 'password'"
                  @click:append="showPass = !showPass"
                  outlined
                  dense
                  :error-messages="errors"
                />
              </ValidationProvider>
              <v-checkbox
                v-model="checkEmailSave"
                label="이메일 저장 또는 자동로그인 둘중 하나로 ㄱㄱ"
                color="teal"
                value="Y"
                class="mt-0"
                hide-details
              />

              <!-- :disabled="invalid" -->
              <v-btn type="submit" class="mt-5" color="teal" width="100%" large>
                <div class="text-subtitle-1 white--text">로그인</div>
              </v-btn>
            </v-form>
          </ValidationObserver>
          <v-btn
            type="submit"
            class="mt-5"
            color="teal"
            width="100%"
            outlined
            large
            @click="$router.push({ name: 'SignUpTermsView' })"
          >
            <div class="text-subtitle-1">회원가입</div>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-breadcrumbs
          :items="breadcrumbs"
          style="justify-content: center"
          class="px-0"
        >
          <template v-slot:divider> | </template>
        </v-breadcrumbs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
  import { email, required } from 'vee-validate/dist/rules';
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

  export default {
    data() {
      return {
        showPass: false,
        email: '',
        password: '',
        checkEmailSave: '',
        breadcrumbs: [
          // {
          //   text: '회원가입',
          //   disabled: false,
          //   to: 'breadcrumbs_dashboard',
          //   //href: 'breadcrumbs_dashboard',
          // },
          {
            text: '아이디 찾기',
            disabled: false,
            to: 'find-id',
          },
          {
            text: '비밀번호 재설정',
            disabled: false,
            to: 'find-pass',
          },
        ],
        // rules: {
        //   required: (value) => !!value || 'Required.',
        //   min: (v) => v.length >= 8 || 'Min 8 characters',
        //   emailMatch: () => `The email and password you entered don't match`,
        // },
      };
    },

    components: {
      ValidationProvider,
      ValidationObserver,
    },
  };
</script>

<style></style>
