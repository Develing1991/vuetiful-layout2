<template>
  <v-card color="white">
    <v-tabs
      height="700"
      vertical
      hide-slider
      background-color="transparent"
      color="white"
      active-class="primary"
    >
      <v-tab
        class="px-1"
        style="justify-content: left"
        v-for="category in categories"
        :key="category.id"
      >
        <v-icon left> mdi-account </v-icon>
        {{ category.name }}
      </v-tab>

      <!-- style="border-left: 1px solid rgba(0, 0, 0, 0.12)" -->

      <v-tab-item v-for="category in categories" :key="category.id">
        <v-list class="mb-2 py-0" dense>
          <div v-for="brand in category.brands" :key="brand.brand_cd">
            <v-list-item ripple>
              <template>
                <v-list-item-content>
                  <v-list-item-title>{{ brand.name }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-icon>mdi-chevron-right</v-icon>
                </v-list-item-action>
              </template>
            </v-list-item>
            <v-divider></v-divider>
          </div>
        </v-list>
      </v-tab-item>
      <!-- <v-tab class="px-1" style="justify-content: left" v-for="i in 2" :key="i">
        <v-icon left> mdi-account </v-icon>
        스타벅스
      </v-tab>

      <v-tab-item
        style="border-left: 1px solid rgba(0, 0, 0, 0.12)"
        v-for="i in 2"
        :key="i"
      >
        <v-list class="mb-2 py-0" dense>
          <div v-for="item in others" :key="item.id">
            <v-list-item ripple>
              <template>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-icon>mdi-chevron-right</v-icon>
                </v-list-item-action>
              </template>
            </v-list-item>
            <v-divider></v-divider>
          </div>
        </v-list>
      </v-tab-item> -->
    </v-tabs>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
        categories: [
          {
            id: 1,
            name: '커피',
            logo: '',
            brands: [
              { brand_cd: 'a1', name: '스타벅스' },
              { brand_cd: 'a2', name: '스무디킹' },
              { brand_cd: 'a3', name: '이디아' },
              { brand_cd: 'a4', name: '쥬시' },
            ],
          },
          {
            id: 2,
            name: '치킨',
            logo: '',
            brands: [
              { brand_cd: 'b1', name: '교촌치킨' },
              { brand_cd: 'b2', name: 'BBQ' },
              { brand_cd: 'b3', name: 'BHC' },
            ],
          },
          {
            id: 3,
            name: '편의점',
            logo: '',
            brands: [
              { brand_cd: 'c1', name: 'CU' },
              { brand_cd: 'c2', name: 'GS25' },
              { brand_cd: 'c3', name: '세븐일레븐' },
            ],
          },
        ],
        others: [
          { id: 1, title: '공지사항' },
          { id: 2, title: '이벤트' },
          { id: 3, title: '고객센터' },
          { id: 4, title: '환경설정' },
          { id: 5, title: '약관 및 정책' },
        ],
      };
    },
    mounted() {
      //console.log(document.getElementsByClassName('v-tabs-items'));
      console.log(this.$vuetify);
      document.getElementsByClassName('v-tabs-items')[0].style.borderLeft =
        '1px solid rgba(0, 0, 0, 0.12)';
    },
  };
</script>
<style></style>
