<template>
  <v-app>
    <!-- 트랜지션 적용하기 -->
    <router-view></router-view>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
  };
</script>

<style>
  .router-link-underline-delete {
    text-decoration: none;
  }
</style>
