<template>
	<LayoutSearchAppBar>
		<template slot="LayoutSearchAppBarLeft"> </template>
		<template slot="LayoutSearchAppBarCenter"> </template>
		<template slot="LayoutSearchAppBarRight">
			<v-icon class="ml-3 mr-1 pt-1" @click="$router.push({ name: 'MainView' })"
				>mdi-home-outline</v-icon
			>
			<v-icon class="ml-3 mr-1 pt-1" @click="$router.push({ name: 'WishView' })"
				>mdi-cart-heart</v-icon
			>
		</template>
	</LayoutSearchAppBar>
</template>

<script>
	import LayoutSearchAppBar from '@/layouts/base/appbars/LayoutSearchAppBar';

	export default {
		components: {
			LayoutSearchAppBar,
		},
	};
</script>
