<template>
	<v-app>
		<AppBar />
		<LayoutBaseView />
		<LayoutBaseFooter />
	</v-app>
</template>

<script>
	import AppBar from '@/layouts/category/AppBar.vue';
	import LayoutBaseView from '@/layouts/base/views/LayoutBaseView.vue';
	import LayoutBaseFooter from '@/layouts/base/footers/LayoutBaseFooter.vue';
	export default {
		name: 'WishIndex',
		components: {
			AppBar,
			LayoutBaseView,
			LayoutBaseFooter,
		},
	};
</script>
<style></style>
