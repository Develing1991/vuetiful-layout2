<template>
  <transition :name="name">
    <slot></slot>
  </transition>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: 'slide-fade',
      },
    },
  };
</script>

<style></style>
