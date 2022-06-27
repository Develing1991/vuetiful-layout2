<template>
	<v-text-field
		:color="color"
		:type="type"
		:height="height"
		:label="label"
		:prependInnerIcon="prependInnerIcon"
		:appendIcon="appendIcon"
		:outlined="outlined"
		:dense="dense"
		:clearable="clearable"
		:clearIcon="clearIcon"
		:required="required"
		:solo="solo"
		:flat="flat"
		:loading="loading"
		:loaderHeight="loaderHeight"
		:placeholder="placeholder"
		:prefix="prefix"
		:readonly="readonly"
		:reverse="reverse"
		:rounded="rounded"
		:autofocus="autofocus"
		:errorMessages="errorMessages"
		:value="value"
		@input="value => $emit('input', value)"
		@click:append="$emit('update:append')"
		@keydown="value => $emit('keydown')"
		@keydown.enter="value => $emit('keydown:enter', value)"
	/>
	<!-- @click:append="showPass = !showPass" -->
</template>

<script>
	export default {
		props: {
			color: {
				type: String,
				default: 'primary',
			},
			type: {
				type: String,
				default: 'text', //password
			},
			label: {
				type: String,
				default: null,
			},
			hint: {
				type: String,
				default: null,
			},
			height: {
				type: String,
				default: null,
			},
			prependInnerIcon: {
				type: String,
				default: null,
			},
			appendIcon: {
				type: String,
				default: null,
			},
			outlined: {
				type: Boolean,
				default: false,
			},
			dense: {
				type: Boolean,
				default: false,
			},
			clearable: {
				type: Boolean,
				default: false,
			},
			clearIcon: {
				type: String,
				default: 'mdi-close-circle',
			},
			required: {
				type: Boolean,
				default: false,
			},
			solo: {
				type: Boolean,
				default: true,
			},
			flat: {
				type: Boolean,
				default: true,
			},
			loading: {
				type: Boolean,
				default: false,
			},
			loaderHeight: {
				type: String,
				default: '2',
			},
			placeholder: {
				type: String,
				default: null,
			},
			prefix: {
				type: String,
				default: null,
			},
			readonly: {
				type: Boolean,
				default: false,
			},
			reverse: {
				type: Boolean,
				default: false,
			},
			rounded: {
				type: Boolean,
				default: false,
			},
			autofocus: {
				type: Boolean,
				default: false,
			},
			value: {
				type: String,
				default: '',
			},
			errorMessages: {
				type: String,
				default: null,
			},
		},
	};
</script>

<style></style>
