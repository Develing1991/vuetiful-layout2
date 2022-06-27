<template>
	<LayoutBaseAppBar>
		<template slot="LayoutBaseAppBarLeft">
			<v-icon class="mt-1" @click="$router.go(-1)">mdi-arrow-left</v-icon>
			<v-spacer
		/></template>
		<template slot="LayoutBaseAppBarCenter"
			><span class="font-weight-bold">{{ $route.meta.appbarName }}</span>
			<v-spacer />
		</template>
		<template slot="LayoutBaseAppBarRight"> </template>
	</LayoutBaseAppBar>
</template>

<script>
	import LayoutBaseAppBar from '@/layouts/base/appbars/LayoutBaseAppBar.vue';
	export default {
		name: 'WishAppBar',
		components: {
			LayoutBaseAppBar,
		},
	};
</script>

<style></style>
