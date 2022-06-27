<template>
	<v-app>
		<AppBar />
		<LayoutBaseView />
	</v-app>
</template>

<script>
	import AppBar from '@/layouts/auth/AppBar.vue';
	import LayoutBaseView from '@/layouts/base/views/LayoutBaseView.vue';
	export default {
		name: 'WishIndex',
		components: {
			AppBar,
			LayoutBaseView,
		},
	};
</script>
<style></style>
