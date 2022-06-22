<template>
  <v-card>
    <v-app-bar app color="white elevation-1">
      <slot name="DefaultAppbarLeft"></slot>
      <slot name="DefaultAppbarCenter"></slot>
      <slot name="DefaultAppbarRight"></slot>
    </v-app-bar>
  </v-card>
</template>

<script>
  export default {
    methods: {
      aa() {
        alert('fdds');
      },
    },
  };
</script>

<style></style>
