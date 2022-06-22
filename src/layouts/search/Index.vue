<template>
  <v-app>
    <AppBar @snackbar_on="setSnackBar" />
    <DefaultView :root_snackbar="root_snackbar" @snackbar_off="setSnackBar" />
    <DefaultFooter />
  </v-app>
</template>

<script>
  import AppBar from '@/layouts/search/AppBar.vue';
  import DefaultView from '@/layouts/base/DefaultView.vue';
  import DefaultFooter from '@/layouts/base/DefaultFooter.vue';

  export default {
    name: 'SearchIndex',
    components: {
      AppBar,
      DefaultView,
      DefaultFooter,
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
