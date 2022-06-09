<template>
  <div>
    <v-stepper v-model="pageStep">
      <v-stepper-header style="justify-content: start" class="elevation-1">
        <template v-for="term in terms">
          <v-stepper-step
            :class="{ 'px-1': true, 'pl-2': term.id === 1 }"
            :key="term.id"
            :complete="term.isConfirm"
            :step="term.step"
            color="teal "
            editable
          />
          <!-- <v-divider
            v-if="term.step !== terms.length"
            :key="`divkey-${term.step}`"
          ></v-divider> -->
        </template>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content
          class="px-2 pt-0"
          v-for="term in terms"
          :key="term.id"
          :step="term.step"
        >
          <template v-if="pageStep === 1">
            <v-list
              class="mt-4 mb-2 py-0 rounded-lg"
              outlined
              v-for="confirm in confirmAgrees"
              :key="confirm.conf_tit_id"
            >
              <v-subheader
                class="teal rounded-t-lg white--text font-weight-bold pt-1"
                >서비스 약관
              </v-subheader>

              <div>
                <v-list-item :ripple="false">
                  <template>
                    <v-list-item-content>
                      <v-checkbox
                        class="mt-0"
                        color="teal"
                        label="전체 약관에 동의"
                        hide-details
                      />
                      <!-- <v-list-item-title>{{ item.title }}</v-list-item-title> -->
                    </v-list-item-content>
                  </template>
                </v-list-item>
                <v-divider />
                <v-list-item :ripple="false">
                  <template>
                    <v-list-item-content>
                      <v-checkbox
                        v-model="checkboxes"
                        class="mt-0"
                        color="teal"
                        :value="1"
                        label="[필수] 만 14세 이상입니다"
                        hide-details
                      />
                    </v-list-item-content>
                  </template>
                </v-list-item>
                <v-divider />
                <v-list-item :ripple="false">
                  <template>
                    <v-list-item-content>
                      <v-checkbox
                        v-model="checkboxes"
                        class="mt-0"
                        color="teal"
                        :value="2"
                        label="[필수] 쿠팡 이용약관 동의"
                        hide-details
                      />
                    </v-list-item-content>
                    <v-list-item-action @click="showTerms(2)">
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-list-item-action>
                  </template>
                </v-list-item>
                <v-divider />
                <v-list-item :ripple="false">
                  <template>
                    <v-list-item-content>
                      <v-checkbox
                        v-model="checkboxes"
                        class="mt-0"
                        color="teal"
                        :value="3"
                        label="[필수] 전자금융거래 이용약관 동의"
                        hide-details
                      />
                    </v-list-item-content>
                    <v-list-item-action @click="showTerms(3)">
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-list-item-action>
                  </template>
                </v-list-item>
                <v-divider />
                <v-list-item :ripple="false">
                  <template>
                    <v-list-item-content>
                      <v-checkbox
                        v-model="checkboxes"
                        class="mt-0"
                        color="teal"
                        :value="4"
                        label="[필수] 개인정보 수집 및 이용 동의"
                        hide-details
                      />
                    </v-list-item-content>
                    <v-list-item-action @click="showTerms(4)">
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-list-item-action>
                  </template>
                </v-list-item>
                <v-divider />
                <v-list-item :ripple="false">
                  <template>
                    <v-list-item-content>
                      <v-checkbox
                        v-model="checkboxes"
                        class="mt-0"
                        color="teal"
                        :value="5"
                        label="[필수] 개인정보 제3자 제공 동의"
                        hide-details
                      />
                    </v-list-item-content>
                    <v-list-item-action @click="showTerms(5)">
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-list-item-action>
                  </template>
                </v-list-item>
                <v-divider />
                <v-list-item :ripple="false">
                  <template>
                    <v-list-item-content>
                      <v-checkbox
                        v-model="checkboxes"
                        class="mt-0"
                        color="teal"
                        :value="6"
                        label="[선택] 광고성 목적의 개인정보 수집 및 이용 동의"
                        hide-details
                      />
                    </v-list-item-content>
                    <v-list-item-action @click="showTerms(6)">
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-list-item-action>
                  </template>
                </v-list-item>
                <v-divider />
                <v-list-item :ripple="false">
                  <template>
                    <v-list-item-content>
                      <v-checkbox
                        v-model="checkboxes"
                        class="mt-0"
                        color="teal"
                        :value="7"
                        label="[선택] 광고성 정보 수신 동의"
                        hide-details
                        @click="parentCheck(7)"
                      />
                    </v-list-item-content>
                    <v-list-item-action @click="showTerms(7)">
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-list-item-action>
                  </template>
                </v-list-item>
                <v-divider />

                <v-list class="pl-6 pt-0">
                  <v-list-item :ripple="false">
                    <v-list-item-content class="py-0">
                      <v-checkbox
                        v-model="checkboxes_child"
                        :value="1"
                        class="mt-0 pt-0"
                        color="teal"
                        label="[선택] 이메일 수신 동의"
                        hide-details
                        @click="childCheck(1)"
                      />
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item :ripple="false">
                    <v-list-item-content class="py-0">
                      <v-checkbox
                        v-model="checkboxes_child"
                        :value="2"
                        class="mt-0 pt-0"
                        color="teal"
                        label="[선택] SMS,MMS 수신 동의"
                        hide-details
                        @click="childCheck(2)"
                      />
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item :ripple="false">
                    <v-list-item-content class="py-0">
                      <v-checkbox
                        v-model="checkboxes_child"
                        :value="3"
                        class="mt-0 pt-0"
                        color="teal"
                        label="[선택] 앱 푸시 수신 동의"
                        hide-details
                        @click="childCheck(3)"
                      />
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <!-- <v-list-item :ripple="false">
                  <template>
                    <v-list-item-content>
                      <v-checkbox
                        color="teal"
                        class="mt-0"
                        :value="conf.conf_sub_id"
                        v-model="checkboxes"
                        :label="conf.title"
                        hide-details
                      />
                      
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-icon v-if="conf.hasMoreView">mdi-chevron-right</v-icon>
                    </v-list-item-action>
                  </template>
                </v-list-item>
                <v-divider v-if="index + 1 !== confirm.conf_list.length" /> -->
              </div>
            </v-list>
          </template>
          <template v-if="pageStep === 2"> 회원가입폼 </template>
          <template v-if="pageStep === 3"> 회원가입 완료~ </template>

          <v-btn
            type="submit"
            class="mt-5"
            color="teal "
            width="100%"
            large
            @click="nextStep(term.step)"
          >
            <div class="text-subtitle-1 white--text">동의하고 가입하기</div>
          </v-btn>
          <!-- {{ checkboxes }} -->
        </v-stepper-content>
      </v-stepper-items>
      <TermsDialogCmp
        :dialog="dialog"
        :termsNumber="termsNumber"
        @agree="agreeTerms"
        @close="dialog = false"
      />
    </v-stepper>
  </div>
</template>
<script>
  import TermsDialogCmp from '@/components/dialog/TermsDialogCmp.vue';
  export default {
    components: {
      TermsDialogCmp,
    },
    data() {
      return {
        dialog: false,
        termsNumber: 0,
        pageStep: 1,
        steps: 5,
        checkboxes: [],
        checkboxes_child: [],
        terms: [
          {
            id: 1,
            isConfirm: false,
            content: '약관내용1',
            step: 1,
          },
          {
            id: 2,
            isConfirm: false,
            content: '약관내용2',
            step: 2,
          },
          {
            id: 3,
            isConfirm: false,
            content: '약관내용3',
            step: 3,
          },
        ],
        confirmAgrees: [
          {
            conf_tit_id: 1,
            title: '서비스약관',
            required: true,
            conf_list: [
              {
                conf_sub_id: 1,
                title:
                  '만 14세 이상입니다. (만 14세 미만은 회원가입이 제한됩니다.)',
                hasMoreView: false,
              },
              {
                conf_sub_id: 2,
                title: '이용약관 동의',
                hasMoreView: true,
              },
              {
                conf_sub_id: 3,
                title: '개인정보 수집 및 이용 동의서',
                hasMoreView: true,
              },
            ],
          },
        ],
      };
    },

    watch: {
      steps(val) {
        if (this.e1 > val) {
          this.e1 = val;
        }
      },
    },

    methods: {
      nextStep(n) {
        if (n === this.steps) {
          //this.e1 = 1;
          //아무것도 안함
        } else {
          this.pageStep = this.pageStep + 1;
          //this.e1 = n + 1;
        }
      },
      showTerms(termsNumber) {
        this.termsNumber = termsNumber;
        this.dialog = true;
      },
      agreeTerms(n) {
        this.dialog = false;
        this.checkboxes.push(n);
        console.log(n);
        this.parentCheck(n);
      },
      childCheck(n) {
        console.log(n);
        if (this.checkboxes_child.length === 3) {
          this.checkboxes.push(7);
        } else {
          this.checkboxes = this.checkboxes.filter((e) => e !== 7);
        }
      },
      parentCheck(n) {
        if (n === 7) {
          if (this.checkboxes.includes(n)) {
            this.checkboxes_child = [];
            this.checkboxes_child = [1, 2, 3];
          } else {
            this.checkboxes_child = [];
          }
        }
      },
    },
  };
</script>
<style scoped>
  .v-list-item__title,
  .v-list-item__subtitle {
    flex: 1 1 100%;
    overflow: visible;
    text-overflow: initial;
    white-space: normal;
  }
</style>
