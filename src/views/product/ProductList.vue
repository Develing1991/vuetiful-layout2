<template>
	<div v-if="isLoading">
		<ProductItem v-for="i in 32" :key="i" />
	</div>
	<ProductSkeleton v-else />
</template>

<script>
	import ProductItem from '@/views/product/ProductItem.vue';
	import ProductSkeleton from '@/components/ProductSkeleton.vue';
	export default {
		name: 'ProductList',
		components: {
			ProductItem,
			ProductSkeleton,
		},
		data() {
			return {
				isLoading: false,
			};
		},
		mounted() {
			this.isLoading = false;
			setTimeout(() => {
				this.isLoading = true;
			}, 1000);
		},
	};
</script>

<style>
	.slide-fade-enter-active {
		transition: all 0.5s ease;
	}
	.slide-fade-leave-active {
		transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
		transform: translateY(10px);
		opacity: 0;
	}
</style>
