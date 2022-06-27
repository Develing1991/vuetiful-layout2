<template>
	<div>
		<v-list three-line>
			<v-list-item
				@click="
					$router.push({
						name: 'ProductDetail',
						params: { id: '12' },
					})
				"
			>
				<v-list-item-avatar tile size="90" color="grey">
					<v-img
						src="https://thumbnail6.coupangcdn.com/thumbnails/remote/300x300ex/image/product/image/vendoritem/2019/02/11/3186737276/e4f9115d-ff6d-406c-8e9e-52382c5b0abc.jpg"
					/>
				</v-list-item-avatar>
				<v-list-item-content>
					<v-list-item-subtitle class="font-weight-bold mb-2 text-caption">
						알록패치 싱글 근육통 통증완화 의료기기 적외선 조사기, 엘립시스 적용
						하이ㅋ
					</v-list-item-subtitle>
					<v-list-item-subtitle class="grey--text">
						<span class="text-body-2">45%</span>
						<span class="text-caption text-decoration-line-through ml-2">
							10,000원
						</span>
					</v-list-item-subtitle>
					<v-list-item-subtitle class="font-weight-bold mb-1">
						<span class="red--text text-subtitle-2">5,500원</span>
					</v-list-item-subtitle>
					<v-list-item-subtitle style="font-size: 0.5rem"
						>무료배송</v-list-item-subtitle
					>
					<!-- v-list-item-title -->
				</v-list-item-content>
				<v-list-item-action class="my-auto">
					<v-list-item-icon @click.stop="aa" class="ma-auto">
						<v-icon :color="true ? 'red' : 'grey'">
							{{ true ? 'mdi-heart' : 'mdi-heart-outline' }}
						</v-icon>
					</v-list-item-icon>
				</v-list-item-action>

				<!-- <v-list-item-icon @click="aa">
          <v-icon :color="true ? 'red' : 'grey'">
            {{ true ? 'mdi-heart' : 'mdi-heart-outline' }}
          </v-icon>
        </v-list-item-icon> -->
			</v-list-item>
		</v-list>
		<v-divider />
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {
			aa() {
				console.log('fsdfsd');
			},
		},
	};
</script>

<style></style>
