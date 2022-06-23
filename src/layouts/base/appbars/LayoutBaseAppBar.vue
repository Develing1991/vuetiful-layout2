<template>
  <v-card>
    <v-app-bar app color="white elevation-1">
      <slot name="LayoutBaseAppBarLeft">
        <v-icon class="mt-1 white--text">mdi-arrow-left</v-icon>
        <v-spacer />
      </slot>
      <slot name="LayoutBaseAppBarCenter">
        <!-- 로고로 대체 -->
        <div
          class="d-flex align-center"
          @click="$router.push({ name: 'MainView' })"
        >
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />
        </div>
        <v-spacer />
      </slot>
      <slot name="LayoutBaseAppBarRight">
        <v-icon class="mt-1 white--text">mdi-close</v-icon>
      </slot>
    </v-app-bar>
  </v-card>
</template>

<script>
  export default {
    name: 'LayoutBaseAppBar',
    components: {},
  };
</script>

<style></style>
