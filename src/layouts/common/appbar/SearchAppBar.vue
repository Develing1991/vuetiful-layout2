<template>
  <v-card id="commonSearchAppbar">
    <v-app-bar app color="white elevation-1">
      <v-container fluid>
        <v-row justify="center" align="center">
          <v-col cols="1" class="px-0">
            <v-icon class="mt-1" @click="$router.go(-1)">mdi-arrow-left</v-icon>
            <!-- >mdi-chevron-left -->
          </v-col>
          <v-col :cols="isProductRoute ? 9 : 10" class="px-0">
            <v-text-field
              hide-details
              outlined
              class="px-1"
              dense
              color="111"
              placeholder="검색어 입력"
              v-model="searchTerm"
              @keydown.enter="doSearch()"
              @focus="focusSearchInput()"
            >
              <v-icon
                slot="append"
                :class="{ 'd-none': hasText }"
                @click="removeSearchTerm()"
              >
                mdi-close-circle
              </v-icon>
            </v-text-field>
          </v-col>
          <!-- 상품리스트뷰 홈, 찜리스 아이콘 -->

          <template v-if="isProductRoute">
            <v-col cols="1" class="px-0 pl-1">
              <v-btn icon @click="$router.push({ name: 'MainView' })" small>
                <v-icon class="pt-1">mdi-home-outline</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="1" class="px-0 pl-1">
              <v-btn icon @click="$router.push({ name: 'WishView' })" small>
                <v-icon class="pt-1">mdi-cart-heart</v-icon>
              </v-btn>
            </v-col>
          </template>
          <!-- 검색뷰 검색 아이콘 -->
          <template v-else>
            <v-col cols="1" class="px-0">
              <v-btn icon @click="doSearch()">
                <v-icon class="pt-1 pr-2">mdi-magnify</v-icon>
              </v-btn>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-app-bar>
  </v-card>
</template>

<script>
  export default {
    name: 'CommonSearchAppBar',
    data() {
      return {
        searchTerm: '',
      };
    },
    computed: {
      hasText() {
        return !(this.searchTerm.length > 0);
      },
      isProductRoute() {
        return (
          this.$route.name === 'ProductDetail' ||
          this.$route.name === 'ProductList'
        );
      },
    },
    methods: {
      removeSearchTerm() {
        this.searchTerm = '';
      },
      doSearch() {
        this.$router.push({
          name: 'ProductList', //path:'/product/list' 이건 안먹힘 (공식문서참조)
          params: { searchTerm: this.searchTerm },
        });
      },
      focusSearchInput() {
        switch (this.$route.name) {
          case 'SearchView': //검색뷰에서 인풋에 포커스 시 최근검색 뷰로
            this.$router.push({ name: 'SearchRcntView' });
            break;
          case 'ProductList': //상품리스트 뷰에서 인풋에 포커스 시 뒤로가기 -1 (최근검색 뷰로)
            this.$router.go(-1);
            break;
          default:
            break;
        }
      },
    },
    mounted() {
      //this.$refs.SearchInput.focus();
      console.log(this.$route);
      // console.log(this.$route.params.searchTerm ?? '');

      //searchTerm 은 state에서 관리하는게 좋음
      this.searchTerm = this.$route.params.searchTerm ?? '';
    },
  };
</script>

<style></style>
