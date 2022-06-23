<template>
  <v-app>
    <AppBar @snackbar_on="setSnackBar" />
    <LayoutSearchWordView
      :root_snackbar="root_snackbar"
      @snackbar_off="setSnackBar"
    />
    <LayoutBaseFooter />
  </v-app>
</template>

<script>
  import AppBar from '@/layouts/search/AppBar.vue';
  import LayoutSearchWordView from '@/layouts/base/views/LayoutSearchWordView.vue';
  import LayoutBaseFooter from '@/layouts/base/footers/LayoutBaseFooter.vue';

  export default {
    name: 'SearchIndex',
    components: {
      AppBar,
      LayoutSearchWordView,
      LayoutBaseFooter,
    },
    data() {
      return {
        root_snackbar: false,
      };
    },
    methods: {
      setSnackBar(value) {
        this.root_snackbar = value;
      },
    },
  };
</script>
<style></style>
