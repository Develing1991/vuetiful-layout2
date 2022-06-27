<template>
	<div>
		<div>
			<TextFieldCmp
				color="teal"
				label="이메일"
				prepend-inner-icon="mdi-email-outline"
				outlined
				dense
				:solo="false"
			/>
			<TextFieldCmp
				color="teal"
				label="비밀번호"
				:prependInnerIcon="
					showPass ? 'mdi-lock-open-outline' : 'mdi-lock-outline'
				"
				:append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
				:type="showPass ? 'text' : 'password'"
				@update:append="showPass = !showPass"
				outlined
				dense
				:solo="false"
			/>
		</div>
		<!-- bizCheck -->
		<div>
			<div>입력 키워드 : {{ sample1 }}</div>
			<form action="">
				<!-- validation check하려면 v-model사용 -->
				<TextFieldCmp
					v-model="sample1"
					color="teal"
					label="샘플1"
					outlined
					:solo="false"
					:required="true"
				/>
				<v-btn type="submit">전송</v-btn>
			</form>

			<div>입력 키워드 : {{ sample2 }}</div>
			<TextFieldCmp
				color="teal"
				label="샘플2"
				outlined
				:solo="false"
				reverse
				@input="value => (sample2 = value)"
			/>
			<div>입력 키워드 : {{ sample3 }}</div>
			<TextFieldCmp
				color="teal"
				label="샘플3"
				outlined
				prefix="프리픽스"
				:solo="false"
				error-messages="errors!!!"
				@input="value => (sample3 = value)"
			/>
			<div>입력 키워드 : {{ sample4 }}</div>
			<TextFieldCmp
				color="teal"
				label="샘플4"
				outlined
				rounded
				:solo="false"
				@input="value => (sample4 = value)"
			/>
			<div>입력 키워드 : {{ sample5 }}</div>
			<TextFieldCmp
				color="teal"
				label="샘플5"
				outlined
				dense
				@input="value => (sample5 = value)"
			/>
			<div>입력 키워드 : {{ sample6 }}</div>
			<TextFieldCmp
				color="teal"
				label="샘플6 - readyonly"
				outlined
				dense
				readonly
				@input="value => (sample6 = value)"
			/>
			<div>입력 키워드 : {{ sample7 }}</div>
			<TextFieldCmp
				color="teal"
				label="샘플7"
				outlined
				dense
				:loading="true"
				@input="value => (sample7 = value)"
			/>
			<div>입력 키워드 : {{ sample8 }}</div>
			<TextFieldCmp
				color="teal"
				label="샘플8"
				outlined
				dense
				:loading="true"
				loaderHeight="5"
				@input="value => (sample8 = value)"
			/>
			<div>입력 키워드 : {{ sample9 }}</div>
			<TextFieldCmp
				color="teal"
				label="샘플9"
				outlined
				placeholder="플레이스홀더~"
				@input="value => (sample9 = value)"
			/>
			<div>입력 키워드 : {{ sample10 }}</div>
			<TextFieldCmp
				color="teal"
				label="샘플10"
				outlined
				height="150"
				@input="value => (sample10 = value)"
			/>
		</div>
	</div>
</template>

<script>
	import TextFieldCmp from '@/components/TextFieldCmp.vue';
	export default {
		components: {
			TextFieldCmp,
		},
		data() {
			return {
				showPass: false,
				sample1: null,
				sample2: null,
				sample3: null,
				sample4: null,
				sample5: null,
				sample6: null,
				sample7: null,
				sample8: null,
				sample9: null,
				sample10: null,
			};
		},
	};
</script>

<style></style>
