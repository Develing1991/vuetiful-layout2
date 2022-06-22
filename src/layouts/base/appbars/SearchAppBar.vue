<template>
  <DefaultAppBar>
    <!-- left -->
    <template slot="DefaultAppbarLeft">
      <slot name="SearchAppbarLeft">
        <v-icon class="mt-1" @click="$router.go(-1)">mdi-arrow-left</v-icon>
      </slot>
    </template>
    <!-- center -->
    <template slot="DefaultAppbarCenter">
      <slot name="SearchAppbarCenter">
        <v-text-field
          hide-details
          outlined
          class="px-1 ml-3"
          dense
          color="111"
          placeholder="검색어 입력"
          :value="GET_KEYWORD"
          @input="(value) => $store.commit('SET_KEYWORD', { keyword: value })"
          @keydown.enter="$emit('snackbar_on', true)"
          @focus="focusSearchInput()"
          ref="SearchField"
        >
          <v-icon
            slot="append"
            :class="{ 'd-none': hasText }"
            @click="removeSearchTerm()"
          >
            mdi-close-circle
          </v-icon>
        </v-text-field>
      </slot>
    </template>
    <!-- right -->
    <template slot="DefaultAppbarRight">
      <slot name="SearchAppbarRight"> </slot>
    </template>
  </DefaultAppBar>
</template>

<script>
  import DefaultAppBar from '@/layouts/base/DefaultAppBar';
  import { mapGetters } from 'vuex';
  export default {
    components: {
      DefaultAppBar,
    },

    computed: {
      ...mapGetters({
        GET_KEYWORD: 'GET_KEYWORD',
      }),
      hasText() {
        return !(this.GET_KEYWORD.length > 0);
      },
    },
    methods: {
      removeSearchTerm() {
        this.$store.commit('SET_KEYWORD', { keyword: '' });
      },
      focusSearchInput() {
        switch (this.$route.name) {
          case 'ProductList': //상품리스트 뷰에서 인풋에 포커스 시 뒤로가기 -1 (최근검색 뷰로)
            this.$router.go(-1);
            break;
          default:
            if (this.$route.name !== 'SearchRcntView') {
              this.$router.push({ name: 'SearchRcntView' });
            }

            break;
        }
      },
    },
    mounted() {
      //this.$refs.SearchInput.focus();
      //console.log(this.$route);
      //console.log(this.$route.params.options.appBar.left.action());
      // console.log(this.$route.params.searchTerm ?? '');
      //searchTerm 은 state에서 관리하는게 좋음
      //      this.searchTerm = this.$route.params.keyword ?? '';
      // console.log(this.$vuetify.application.top);
      // console.log(this.$vuetify.application.bottom);
    },
  };
</script>
