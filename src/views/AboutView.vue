<template>
  <v-card>
    <v-app-bar app color="white elevation-1">
      <v-container fluid>
        <v-row justify="space-between" align="center">
          <v-col cols="1" class="px-0">
            <v-icon class="mt-1" @click="$router.go(-1)">{{
              $route.params.appbar.left.text
            }}</v-icon>
            <!-- >mdi-chevron-left -->
          </v-col>
          <v-col cols="auto" class="px-0 pt-5">
            <span class="font-weight-bold">{{
              $route.params.appbar.center.text
            }}</span>
          </v-col>
          <v-col cols="1" class="px-0" />
        </v-row>
      </v-container>
    </v-app-bar>
  </v-card>
</template>

<script>
  export default {};
</script>

<style></style>
