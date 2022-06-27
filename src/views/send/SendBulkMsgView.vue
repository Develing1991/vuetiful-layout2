<template>
  <v-container>
    <ValidationObserver ref="observer">
      <v-card outlined class="rounded-lg pa-2">
        상품정보~~
        <v-list class="rounded-lg py-0">
          <v-list-item class="px-2">
            <v-list-item-content class="pb-0">
              <ValidationProvider v-slot="{ errors }" name="mem_id">
                <v-text-field
                  v-model="phoneNumber"
                  :error-messages="errors"
                  label="전화번호 입력"
                  placeholder="받으실 분의 휴대폰 번호를 입력해주세요."
                  :solo="false"
                  outlined
                  dense
                />
              </ValidationProvider>
            </v-list-item-content>
            <v-list-item-action class="mb-7 ml-2">
              <ButtonCmp
                color="orange"
                width="100%"
                btnTxtClass="text-subtitle-1 white--text"
                @click="addPhoneNumber"
              >
                추가
              </ButtonCmp>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <!-- 수신자번호 목록 -->
        <v-list class="rounded-t-lg mx-2 mt-2 py-0">
          <v-list-item class="px-0">
            <v-list-item-content class="font-weight-bold py-0">
              수신자번호 목록
            </v-list-item-content>
            <v-list-item-content class="py-0" />
            <v-list-item-action
              ><ButtonCmp
                color="orange"
                width="100%"
                small
                btnTxtClass="text-subtitle-1 white--text"
              >
                연락처</ButtonCmp
              ></v-list-item-action
            >
          </v-list-item>
        </v-list>

        <v-list outlined class="py-0 overflow-y-auto mx-2" max-height="240">
          <v-list-item-group>
            <template v-for="(item, index) in phoneNumberList">
              <v-list-item :key="item.title">
                <template>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.name" />
                  </v-list-item-content>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.phoneNumber" />
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-icon color="red darken-3">
                      mdi-trash-can-outline
                    </v-icon>
                  </v-list-item-action>
                </template>
              </v-list-item>

              <v-divider :key="index" />
            </template>
          </v-list-item-group>
        </v-list>
        <v-list
          outlined
          class="grey lighten-1 rounded-b-lg mx-2"
          v-if="phoneNumberList.length > 0"
        >
          <v-list-item>
            <v-list-item-content class="font-weight-bold">
              수신자
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title>
                <span class="font-weight-bold orange--text">5</span> 명
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action> 5 / 50 </v-list-item-action>
          </v-list-item>
        </v-list>
        <!-- 수신자번호 목록 -->

        <!-- 발송메시지 만들기 -->
        <v-list class="rounded-t-lg mx-2 mt-5 py-0">
          <v-list-item class="px-0">
            <v-list-item-content class="font-weight-bold py-0">
              발송메시지 만들기
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list>
          <v-row class="px-2">
            <v-col cols="6">
              <SendMsgDialogCmp>
                <ButtonCmp
                  outlined
                  color="grey"
                  elevation="0"
                  width="100%"
                  large
                  btnTxtClass="font-weight-bold black--text"
                >
                  발송문구 불러오기
                </ButtonCmp>
              </SendMsgDialogCmp>
            </v-col>
            <v-col cols="6">
              <ButtonCmp
                outlined
                color="grey"
                elevation="0"
                width="100%"
                large
                btnTxtClass="font-weight-bold black--text"
              >
                최근 발송문구 불러오기
              </ButtonCmp>
            </v-col>
          </v-row>
        </v-list>
        <!-- 발송메시지 만들기 -->
        <!-- 데이터 -->
        <v-list class="rounded-t-lg mx-2 mt-5 py-0">
          <v-list-item class="px-0">
            <v-list-item-content class="font-weight-bold py-0">
              프로모션명
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="px-0">
            <v-list-item-content class="py-0">
              <ValidationProvider v-slot="{ errors }" name="mem_id">
                <v-text-field
                  :error-messages="errors"
                  placeholder="관리용 제목을 입력해주세요."
                  :solo="false"
                  outlined
                  dense
                />
              </ValidationProvider>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="px-0">
            <v-list-item-content class="font-weight-bold py-0">
              제목
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="px-0">
            <v-list-item-content class="py-0">
              <ValidationProvider v-slot="{ errors }" name="mem_id">
                <v-text-field
                  :error-messages="errors"
                  placeholder="제목을 입력해주세요."
                  :solo="false"
                  outlined
                  dense
                />
              </ValidationProvider>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="px-0">
            <v-list-item-content class="font-weight-bold py-0">
              내용
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="px-0">
            <v-list-item-content class="py-0">
              <ValidationProvider v-slot="{ errors }" name="mem_id">
                <v-textarea
                  outlined
                  auto-grow
                  name="input-7-4"
                  placeholder="내용을 입력해주세요."
                  :error-messages="errors"
                />
              </ValidationProvider>
            </v-list-item-content>
          </v-list-item>
          <ButtonCmp
            color="orange"
            width="100%"
            btnTxtClass="text-subtitle-1 white--text"
          >
            전송
          </ButtonCmp>
        </v-list>

        <!-- 데이터 -->
      </v-card>
    </ValidationObserver>
  </v-container>
</template>

<script>
  import { required, digits, max, regex } from 'vee-validate/dist/rules';
  import ButtonCmp from '@/components/ButtonCmp.vue';
  import SendMsgDialogCmp from '@/components/dialog/SendMsgDialogCmp.vue';
  //import TextFieldCmp from '@/components/TextFieldCmp.vue';
  import {
    extend,
    ValidationObserver,
    ValidationProvider,
    setInteractionMode,
  } from 'vee-validate';
  setInteractionMode('eager');

  extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  });

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  });

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  });

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  });
  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
      ButtonCmp,
      SendMsgDialogCmp,
    },
    data() {
      return {
        phoneNumber: '',
        phoneNumberList: [],
      };
    },

    methods: {
      addPhoneNumber() {
        this.phoneNumberList.push({
          id: 0,
          name: '수신자',
          phoneNumber: this.phoneNumber,
        });
      },
    },
  };
</script>

<style></style>
