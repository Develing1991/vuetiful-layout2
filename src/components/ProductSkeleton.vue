<template>
	<div>
		<v-list class="py-0" v-for="i in 10" :key="i">
			<v-list-item>
				<v-list-item-avatar tile size="90">
					<v-sheet
						:color="`grey ${false ? 'darken-2' : 'lighten-4'}`"
						width="90"
					>
						<v-skeleton-loader class="mx-auto" type="card" />
					</v-sheet>
				</v-list-item-avatar>

				<v-list-item-content>
					<v-list-item-subtitle class="font-weight-bold mb-2 text-caption">
						<v-sheet
							:color="`grey ${false ? 'darken-2' : 'lighten-4'}`"
							width="100%"
						>
							<v-skeleton-loader type="card-heading" />
							<v-skeleton-loader class="py-0" type="list-item-three-line" />
						</v-sheet>
					</v-list-item-subtitle>
					<!-- <v-skeleton-loader class="py-0" type="divider"></v-skeleton-loader> -->
				</v-list-item-content>
			</v-list-item>
			<v-skeleton-loader class="py-0" type="divider" width="100%" />
		</v-list>
	</div>
</template>

<script>
	export default {};
</script>

<style></style>
