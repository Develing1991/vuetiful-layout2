<template>
  <v-btn
    :width="width"
    :color="color"
    :large="large"
    :small="small"
    :x-large="xLarge"
    :x-small="xSmall"
    :outlined="outlined"
    :ripple="ripple"
  >
    <div :class="btnClass">
      <slot> 버튼 </slot>
    </div>
  </v-btn>
</template>

<script>
  export default {
    props: {
      width: {
        type: String,
        default: '',
      },
      color: {
        type: String,
        default: '',
      },
      large: {
        type: Boolean,
        default: false,
      },
      'x-large': {
        type: Boolean,
        default: false,
      },
      small: {
        type: Boolean,
        default: false,
      },
      'x-small': {
        type: Boolean,
        default: false,
      },
      outlined: {
        type: Boolean,
        default: false,
      },
      ripple: {
        type: Boolean,
        default: true,
      },
      btnClass: {
        type: String,
        default: '',
      },
    },
    inheritAttrs: false,
  };
</script>

<style></style>
