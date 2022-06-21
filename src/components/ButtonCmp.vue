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
    :fab="fab"
    :fixed="fixed"
    :top="top"
    :bottom="bottom"
    :left="left"
    :right="right"
    @click="$emit('click', $event)"
  >
    <div :class="btnTxtClass">
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
      fab: {
        type: Boolean,
        default: false,
      },
      fixed: {
        type: Boolean,
        default: false,
      },
      top: {
        type: Boolean,
        default: false,
      },
      bottom: {
        type: Boolean,
        default: false,
      },
      right: {
        type: Boolean,
        default: false,
      },
      left: {
        type: Boolean,
        default: false,
      },

      btnTxtClass: {
        type: String,
        default: '',
      },
    },
    inheritAttrs: false,
  };
</script>
