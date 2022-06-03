<template>
  <v-card id="productAppBar">
    <!-- <v-app-bar app color="white elevation-1">
      <v-text-field> </v-text-field>
      <v-icon class="px-3">mdi-magnify</v-icon>
    </v-app-bar> -->
    <v-app-bar app color="white elevation-1">
      <v-container fluid>
        <v-row justify="center" align="center">
          <v-col cols="1" class="px-0">
            <v-icon class="mt-1" @click="$router.go(-1)">mdi-arrow-left</v-icon>
            <!-- >mdi-chevron-left -->
          </v-col>
          <v-col cols="9" class="px-0">
            <v-text-field
              outlined
              class="px-1 pt-7"
              dense
              color="111"
              placeholder="검색어 입력"
              v-model="searchText"
              @keydown.enter="doSearch()"
            >
              <v-icon
                slot="append"
                :class="{ closeIcon: hasText }"
                @click="removeSearchText()"
              >
                mdi-close-circle
              </v-icon>
            </v-text-field>
          </v-col>

          <v-col cols="1" class="px-0 pl-1">
            <v-btn icon @click="$router.push({ path: '/' })" small>
              <v-icon class="pt-1">mdi-home-outline</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="1" class="px-0 pl-1">
            <v-btn icon @click="$router.push({ path: '/wish' })" small>
              <v-icon class="pt-1">mdi-cart-heart</v-icon>
              <!-- <v-icon class="pt-1">mdi-heart-outline</v-icon> -->
              <!-- <v-icon class="pt-1">mdi-hand-heart-outline</v-icon> -->
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </v-card>
</template>

<script>
  export default {
    name: 'SearchAppBar',
    data() {
      return {
        searchText: '',
      };
    },
    computed: {
      hasText() {
        return !(this.searchText.length > 0);
      },
    },
    methods: {
      removeSearchText() {
        this.searchText = '';
      },
      doSearch() {
        this.$router.push({
          name: 'ProductList', //path:'/product/list' 이건 안먹힘 (공식문서참조)
          params: { searchText: this.searchText },
        });
      },
    },
    mounted() {
      //this.$refs.SearchInput.focus();
    },
  };
</script>

<style scoped>
  .closeIcon {
    visibility: hidden;
  }
</style>
