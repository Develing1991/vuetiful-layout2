<template>
  <v-card>
    <v-app-bar app color="white elevation-1">
      <v-icon class="mt-1" @click="$router.go(-1)">mdi-arrow-left</v-icon>

      <!-- center 영역 -->
      <v-text-field
        hide-details
        outlined
        class="px-1"
        dense
        color="111"
        placeholder="검색어 입력"
        v-model="searchTerm"
        @keydown.enter="doSearch()"
        @focus="focusSearchInput()"
        ref="SearchField"
      >
        <!-- clearable -->
        <v-icon
          slot="append"
          :class="{ 'd-none': hasText }"
          @click="removeSearchTerm()"
        >
          mdi-close-circle
        </v-icon>
      </v-text-field>
      <!-- center 영역 -->

      <!-- rigth 영역 -->
      <v-btn icon @click="$router.push({ name: 'MainView' })" small>
        <v-icon class="pt-1">mdi-home-outline</v-icon>
      </v-btn>
      <v-btn icon @click="$router.push({ name: 'WishView' })" small>
        <v-icon class="pt-1">mdi-cart-heart</v-icon>
      </v-btn>
      <!-- rigth 영역 -->
    </v-app-bar>
  </v-card>
</template>

<script>
  export default {};
</script>

<style></style>
