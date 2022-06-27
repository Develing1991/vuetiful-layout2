<template>
  <div>
    <v-list outlined class="ma-3">
      <v-list-item @click="$router.push({ name: 'SampleButtonView' })">
        <v-list-item-content> 버튼 컴포넌트 </v-list-item-content>
        <v-list-item-action
          ><v-icon color="primary"> mdi-chevron-right </v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-divider />
      <v-list-item @click="$router.push({ name: 'SampleTextView' })">
        <v-list-item-content> 텍스트 컴포넌트 </v-list-item-content>
        <v-list-item-action
          ><v-icon color="primary"> mdi-chevron-right </v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-divider />
    </v-list>
  </div>
</template>

<script>
  export default {};
</script>

<style></style>
