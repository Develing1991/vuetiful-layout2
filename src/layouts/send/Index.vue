<template>
	<v-app>
		<AppBar />
		<LayoutBaseView />
	</v-app>
</template>

<script>
	import AppBar from '@/layouts/send/AppBar.vue';
	import LayoutBaseView from '@/layouts/base/views/LayoutBaseView.vue';
	export default {
		name: 'SendIndex',
		components: {
			AppBar,
			LayoutBaseView,
		},
	};
</script>
<style></style>
