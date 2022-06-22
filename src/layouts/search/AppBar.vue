<template>
  <SearchAppBar @snackbar_on="doSearch">
    <template slot="SearchAppbarRight">
      <v-icon class="ml-2" @click="doSearch">mdi-magnify</v-icon>
    </template>
  </SearchAppBar>
</template>

<script>
  import SearchAppBar from '@/layouts/base/appbars/SearchAppBar';
  import { mapGetters } from 'vuex';

  export default {
    components: {
      SearchAppBar,
    },
    data() {
      return {};
    },
    computed: {
      ...mapGetters({
        GET_KEYWORD_IS_BLANK: 'GET_KEYWORD_IS_BLANK',
      }),
    },
    methods: {
      doSearch() {
        if (this.GET_KEYWORD_IS_BLANK) {
          this.$emit('snackbar_on', true);
          return;
        }
        this.$router.push({
          name: 'ProductList', //path:'/product/list' 이건 안먹힘 (공식문서참조)
          params: { keyword: this.GET_KEYWORD },
        });
      },
    },
  };
</script>
