<template>
	<div>
		<button @click="aaa">하이</button>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		methods: {
			async aaa() {
				const response = await axios.post(
					//'https://tapi.kkulcon.com/api-client/seller/getSellerList',
					'/api-client/seller/getSellerList',
				);
				console.log(response);
			},
		},
	};
</script>

<style></style>
