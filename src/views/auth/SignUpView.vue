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
            color="teal lighten-2"
            editable
          >
          </v-stepper-step>
          <!-- <v-divider
            v-if="term.step !== terms.length"
            :key="`divkey-${term.step}`"
          ></v-divider> -->
        </template>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content
          class="px-2"
          v-for="term in terms"
          :key="term.id"
          :step="term.step"
        >
          <v-list
            class="mb-2 py-0 rounded-xl"
            outlined
            v-for="confirm in confirmAgrees"
            :key="confirm.conf_tit_id"
          >
            <v-subheader
              class="teal lighten-2 rounded-t-xl white--text font-weight-bold pt-1"
              >{{ confirm.title
              }}<span class="red--text ml-2"
                >({{ confirm.required ? '필수' : '선택' }})</span
              ></v-subheader
            >
            <div
              v-for="(conf, index) in confirm.conf_list"
              :key="conf.conf_sub_id"
            >
              <v-list-item :ripple="false">
                <template>
                  <v-list-item-content>
                    <v-checkbox
                      v-model="ex4"
                      color="red"
                      value="red"
                      :label="conf.title"
                      hide-details
                    ></v-checkbox>
                    <!-- <v-list-item-title>{{ item.title }}</v-list-item-title> -->
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-icon v-if="conf.isContent">mdi-chevron-right</v-icon>
                  </v-list-item-action>
                </template>
                <!-- <v-divider v-if="index + 1 !== conf.length"></v-divider> -->
              </v-list-item>
              <v-divider
                v-if="index + 1 !== confirm.conf_list.length"
              ></v-divider>
            </div>
          </v-list>

          <v-btn color="primary" @click="nextStep(term.step)"> Continue </v-btn>

          <v-btn text> Cancel </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        pageStep: 1,
        steps: 5,
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
            title: '이용동의',
            required: true,
            conf_list: [
              {
                conf_sub_id: 1,
                title: '이용약관 및 개인정보 수집 및 이용에 모두 동의합니다.',
                isChecked: false,
                isContent: false,
              },
              {
                conf_sub_id: 2,
                title:
                  '만 14세 이상입니다. (만 14세 미만은 회원가입이 제한됩니다.)',
                isChecked: false,
                isContent: false,
              },
              {
                conf_sub_id: 3,
                title: '이용약관 동의',
                isChecked: false,
                isContent: true,
              },
              {
                conf_sub_id: 4,
                title: '개인정보 수집 및 이용 동의서',
                isChecked: false,
                isContent: true,
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
