<template>
  <v-card>
    <v-app-bar app color="white elevation-1">
      <v-container fluid>
        <v-row justify="center" align="center">
          <v-col cols="1" class="px-0"> </v-col>
          <v-col cols="10" class="px-0"> </v-col>
          <v-col cols="1" class="px-0">
            <v-btn icon>
              <v-icon class="mt-1" @click="$router.go(-1)">mdi-close</v-icon>
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
    // data() {
    //   return {
    //     searchText: '',
    //   };
    // },
    // computed: {
    //   hasText() {
    //     return !(this.searchText.length > 0);
    //   },
    // },
    // methods: {
    //   removeSearchText() {
    //     this.searchText = '';
    //   },
    //   doSearch() {
    //     this.$router.push({
    //       name: 'ProductList', //path:'/product/list' 이건 안먹힘 (공식문서참조)
    //       params: { searchText: this.searchText },
    //     });
    //   },
    // },
    // mounted() {
    //   this.$refs.SearchInput.focus();
    // },
  };
</script>

<style scoped></style>
