<template>
  <v-card>
    <!-- <v-app-bar app color="white elevation-1">
      <v-text-field> </v-text-field>
      <v-icon class="px-3">mdi-magnify</v-icon>
    </v-app-bar> -->
    <v-app-bar app color="white elevation-1">
      <v-container fluid>
        <v-row justify="center" align="center">
          <v-col cols="1" class="px-0">
            <v-icon class="mt-1" @click="sSearchBack">mdi-arrow-left</v-icon>
            <!-- >mdi-chevron-left -->
          </v-col>
          <v-col cols="10" class="px-0">
            <v-text-field
              hide-details
              outlined
              class="px-1"
              dense
              color="111"
              placeholder="검색어 입력"
              v-model="searchTerm"
              @keydown.enter="doSearch()"
              @focus="isGoRcntView()"
            >
              <!-- @blur="$router.go(-1)" -->
              <!-- @focus="$router.push({ path: '/search/rcnt' })"
              @blur="$router.push({ name: 'SearchView' })" -->
              <v-icon
                slot="append"
                :class="{ 'd-none': hasText }"
                @click="removeSearchTerm()"
              >
                mdi-close-circle
              </v-icon>
            </v-text-field>
          </v-col>
          <v-col cols="1" class="px-0">
            <v-btn icon @click="doSearch()">
              <v-icon class="pt-1 pr-2">mdi-magnify</v-icon>
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
        searchTerm: '',
      };
    },
    computed: {
      hasText() {
        return !(this.searchTerm.length > 0);
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
      sSearchBack() {
        this.searchTerm = '';
        this.$router.go(-1);
        // this.$router.push({ path: '/search' });
      },
      isGoRcntView() {
        //자기자신일경우는 아무 동작안함
        if (this.$route.name !== 'SearchRcntView') {
          this.$router.push({ path: '/search/rcnt' });
        }
      },
    },
    mounted() {
      //this.$refs.SearchInput.focus();
    },
  };
</script>

<style></style>
