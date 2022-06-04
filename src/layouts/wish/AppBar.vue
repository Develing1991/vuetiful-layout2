<template>
  <v-card>
    <v-app-bar app color="white elevation-1">
      <v-container fluid>
        <v-row justify="center" align="center">
          <v-col cols="1" class="px-0">
            <v-icon class="mt-1" @click="$router.go(-1)">mdi-arrow-left</v-icon>
            <!-- >mdi-chevron-left -->
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </v-card>
</template>

<script>
  export default {
    name: 'WishAppBar',
  };
</script>

<style></style>
