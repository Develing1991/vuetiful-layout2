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
            <v-icon class="mt-1" @click="$router.push({ path: '/' })"
              >mdi-arrow-left</v-icon
            >
            <!-- >mdi-chevron-left -->
          </v-col>
          <v-col cols="10" class="px-0">
            <v-text-field
              outlined
              class="px-1 pt-7"
              dense
              color="111"
              ref="SearchInput"
              placeholder="검색어 입력"
              v-model="searchText"
              @keydown.enter="doSearch()"
            >
              <v-icon
                slot="append"
                :class="{ 'd-none': hasText }"
                @click="removeSearchText()"
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
      this.$refs.SearchInput.focus();
    },
  };
</script>

<style></style>
