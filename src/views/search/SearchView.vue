<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="10" class="font-weight-bold subtitle-2 py-0 mt-5">
          최근 검색어
        </v-col>
        <v-col cols="1" class="pl-2 pt-0 mt-4">
          <v-menu transition="slide-y-transition" bottom :offset-y="true">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-if="closeBtnShow"
                icon
                small
                @click="closeBtnShow = false"
              >
                <v-icon color="success">mdi-check-underline </v-icon>
              </v-btn>
              <v-btn v-else icon v-bind="attrs" v-on="on" small>
                <!-- <v-icon>mdi-cog-outline </v-icon> -->
                <!-- <v-icon>mdi-tune-variant </v-icon> -->
                <v-icon>mdi-tune</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, i) in schTermSettings" :key="i">
                <v-list-item-title @click="action(item.action)">{{
                  item.title
                }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <!-- <v-icon>mdi-dots-vertical</v-icon> -->
        </v-col>
        <v-col cols="1" class="px-0"> </v-col>
      </v-row>
      <v-row justify="space-around">
        <v-col cols="12" class="pt-0">
          <v-sheet elevation="0" class="pt-0 pb-2">
            <v-chip-group>
              <v-chip
                v-for="schTerm in rcntSrchTerms"
                :key="schTerm.id"
                close-icon="mdi-close"
                :close="closeBtnShow"
              >
                {{ schTerm.word }}
              </v-chip>
            </v-chip-group>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="11" class="font-weight-bold subtitle-2 py-0 mt-5">
          추천 검색어
        </v-col>
      </v-row>
      <v-row justify="space-around">
        <v-col cols="12">
          <v-sheet elevation="0" class="pt-1 pb-2">
            <v-chip-group column active-class="primary--text">
              <v-chip v-for="schTerm in rcmmSrchTerms" :key="schTerm.id">
                {{ schTerm.word }}
              </v-chip>
            </v-chip-group>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      closeBtnShow: false,
      rcntSrchTerms: [
        { id: 1, word: '닭가슴살120g' },
        { id: 2, word: '치킨' },
        { id: 3, word: 'vue' },
        { id: 4, word: 'vuetify' },
        { id: 5, word: '부스터' },
        { id: 6, word: '시트룰린' },
        { id: 7, word: '무릎' },
      ],
      rcmmSrchTerms: [
        { id: 1, word: '빵' },
        { id: 2, word: '시리얼' },
        { id: 3, word: '체다치즈' },
        { id: 4, word: '우유' },
        { id: 5, word: '계란' },
        { id: 6, word: '마우스' },
        { id: 7, word: '식용유' },
        { id: 8, word: '모짜렐라 치즈' },
        { id: 9, word: '모니터' },
        { id: 10, word: '커피' },
        { id: 11, word: '청소기' },
      ],
      schTermSettings: [
        {
          title: '선택 삭제',
          action: 'select',
          // action: ()=> {
          //   this.closeBtnShow = true;
          // },
        },
        { title: '전체 삭제', action: 'all' },
        { title: '자동저장 끄기', action: 'auto' },
      ],
    }),
    methods: {
      action(type) {
        switch (type) {
          case 'select':
            this.closeBtnShow = true;
            break;
          case 'all':
            alert('전체삭제!');
            break;
          case 'auto':
            alert('자동설정 끄시겠습니까?');
            break;
          default:
            console.log('정의되지 않은 명령입니다.');
            break;
        }
      },
    },
  };
</script>

<style></style>
