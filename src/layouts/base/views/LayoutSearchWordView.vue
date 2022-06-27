<template>
	<v-main>
		<router-view />
		<v-snackbar
			v-model="self_snackbar"
			:width="$vuetify.breakpoint.width + 50"
			:timeout="3000"
			:style="`margin-bottom:${this.$vuetify.application.bottom + 70}px`"
			color="secondary lighten-1"
			elevation="0"
			height="50"
			rounded="pill"
			transition="fade-transition"
		>
			검색어를 입력하시고 다시 시도해주세요.
		</v-snackbar>
	</v-main>
</template>

<script>
	//import TransitionCmp from '@/components/TransitionCmp.vue';
	export default {
		name: 'LayoutSearchWordView',
		components: {
			//TransitionCmp,
		},
		props: {
			root_snackbar: {
				type: Boolean,
				default: false,
			},
		},
		watch: {
			root_snackbar() {
				this.self_snackbar = this.root_snackbar;
			},
			self_snackbar() {
				if (!this.self_snackbar) {
					this.$emit('snackbar_off', false);
				}
			},
		},
		data() {
			return {
				self_snackbar: false,
			};
		},
	};
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
