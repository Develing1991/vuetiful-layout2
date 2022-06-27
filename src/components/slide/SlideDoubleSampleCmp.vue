<template>
	<swiper
		class="swiper"
		:options="swiperOption"
		style="background-color: white"
	>
		<swiper-slide class="slide-1">
			<SlideProductItem />
		</swiper-slide>
		<swiper-slide><SlideProductItem /></swiper-slide>
		<swiper-slide><SlideProductItem /></swiper-slide>
		<swiper-slide><SlideProductItem /></swiper-slide>
		<swiper-slide><SlideProductItem /></swiper-slide>
		<swiper-slide><SlideProductItem /></swiper-slide>
		<swiper-slide><SlideProductItem /></swiper-slide>
		<swiper-slide><SlideProductItem /></swiper-slide>
		<swiper-slide><SlideProductItem /></swiper-slide>
		<swiper-slide><SlideProductItem /></swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
	import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
	import 'swiper/css/swiper.css';
	import SlideProductItem from '@/components/product/SlideProductItem.vue';
	export default {
		name: 'swiper-example-slides-per-column',
		title: 'Multi row slides layout',
		components: {
			Swiper,
			SwiperSlide,
			SlideProductItem,
		},
		data() {
			return {
				swiperOption: {
					slidesPerView: 3,
					slidesPerColumn: 2,
					spaceBetween: 0,
					// pagination: {
					//   el: '.swiper-pagination',
					//   clickable: true,
					// },
				},
			};
		},
	};
</script>

<style lang="scss" scoped>
	.swiper {
		height: 300px;
		width: 100%;

		.swiper-slide {
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			font-weight: bold;
			// font-size: $font-size-huge * 2;
			font-size: 16px;
			background-color: white;
		}
	}

	.swiper {
		height: 100%;
		margin-left: auto;
		margin-right: auto;
		max-height: 400px;
		.swiper-slide {
			height: 50%;
			min-width: 155px; //이미지 사이즈가 정해저야함
			max-width: 155px; //이미지 사이즈가 정해저야함
		}
	}
</style>
