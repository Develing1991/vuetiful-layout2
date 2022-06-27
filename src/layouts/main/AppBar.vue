<template>
	<LayoutMainAppBar>
		<template slot="LayoutMainAppBarLeft">
			<!-- <v-app-bar app color="primary elevation-0" hide-on-scroll> -->
			<div class="d-flex align-center">
				<v-img
					alt="Vuetify Logo"
					class="shrink mr-2"
					contain
					src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
					transition="scale-transition"
					width="40"
					@click="$router.push({ name: 'SampleList' })"
				/>
			</div>
			<!-- <v-app-bar-title>Title</v-app-bar-title> -->
			<v-spacer
		/></template>
		<template slot="LayoutMainAppBarCenter">
			<v-spacer />
		</template>
		<template slot="LayoutMainAppBarRight">
			<router-link to="/search/rcntView" class="router-link-underline-delete">
				<v-icon class="px-3">mdi-magnify</v-icon>
			</router-link>

			<v-badge color="pink" content="6" offset-x="25" offset-y="15">
				<v-icon class="px-3">mdi-bell-outline</v-icon>
			</v-badge>
		</template>
	</LayoutMainAppBar>
</template>

<script>
	import LayoutMainAppBar from '@/layouts/base/appbars/LayoutMainAppBar.vue';
	export default {
		name: 'MainAppBar',
		components: {
			LayoutMainAppBar,
		},
	};
</script>

<style></style>
