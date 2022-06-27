<template>
	<v-main>
		<router-view />
	</v-main>
</template>

<script>
	export default {};
</script>

<style>
	/* https://vuetifyjs.com/en/features/breakpoints/#breakpoint-service  mixin찾아서 활용해서 appbar, view, footer 적용하기 리사이즈*/
	.isDesktop {
		max-width: 720px !important;
		margin: 0 auto !important;
		border: 1px solid #eee;
		box-sizing: border-box;
	}
</style>
