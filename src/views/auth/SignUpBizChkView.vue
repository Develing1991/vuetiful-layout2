<template>
	<div class="px-2">
		<!-- <v-list outlined class="rounded-lg py-0 mt-3">
      <v-subheader class="teal rounded-t-lg white--text font-weight-bold pt-1"
        >사업자번호조회 (필수)
      </v-subheader>
      <v-list-item class="px-2">
        <v-list-item-content class="pb-0">
          <v-text-field
            v-model="name"
            :error-messages="errors"
            label="사업자번호"
            required
            solo
            outlined
            dense
          />
        </v-list-item-content>
        <v-list-item-action class="mb-7 ml-2">
          <v-btn class="secondary">조회하기</v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list> -->

		<validation-observer ref="observer" v-slot="{ invalid }">
			<v-list outlined class="rounded-lg py-0 mt-3">
				<v-subheader class="teal rounded-t-lg white--text font-weight-bold pt-1"
					>사업자번호조회 (필수)
				</v-subheader>
				<v-list-item class="px-2">
					<v-list-item-content class="pb-0">
						<validation-provider
							v-slot="{ errors }"
							name="mem_id"
							:rules="{
								required: true,
								digits: 7,
							}"
						>
							<v-text-field
								v-model="name"
								:error-messages="errors"
								label="사업자번호"
								required
								solo
								outlined
								dense
								@keydown="keyinBizNum"
							/>
							<!-- <TextFieldCmp
                v-model="name"
                label="사업자번호"
                required
                outlined
                dense
                :error-messages="`${errors}`"
                @keydown="keyinBizNum"
              /> -->
						</validation-provider>
					</v-list-item-content>
					<v-list-item-action class="mb-7 ml-2">
						<ButtonCmp color="secondary" :disabled="invalid" @click="mbizCheck">
							조회하기
						</ButtonCmp>
					</v-list-item-action>
				</v-list-item>
			</v-list>
		</validation-observer>
		<ButtonCmp
			color="teal"
			width="100%"
			large
			class="mt-3 mb-3"
			btnTxtClass="text-subtitle-1 white--text"
			:disabled="dbizCheck"
			@click="next"
		>
			확인
		</ButtonCmp>
		<template>
			<div>
				<v-alert type="success" v-if="!dbizCheck">
					사업자번호 확인완료
				</v-alert>

				<v-alert type="error" v-else> 사업자번호 미확인 </v-alert>
			</div>
		</template>
	</div>
</template>

<script>
	import { required, digits, max, regex } from 'vee-validate/dist/rules';
	import ButtonCmp from '@/components/ButtonCmp.vue';
	//import TextFieldCmp from '@/components/TextFieldCmp.vue';
	import {
		extend,
		ValidationObserver,
		ValidationProvider,
		setInteractionMode,
	} from 'vee-validate';

	setInteractionMode('eager');

	extend('digits', {
		...digits,
		message: '{_field_} needs to be {length} digits. ({_value_})',
	});

	extend('required', {
		...required,
		message: '{_field_} can not be empty',
	});

	extend('max', {
		...max,
		message: '{_field_} may not be greater than {length} characters',
	});

	extend('regex', {
		...regex,
		message: '{_field_} {_value_} does not match {regex}',
	});

	export default {
		components: {
			ValidationProvider,
			ValidationObserver,
			ButtonCmp,
			//TextFieldCmp,
		},
		data: () => ({
			name: '',
			phoneNumber: '',
			email: '',
			select: null,
			items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
			checkbox: null,
			dbizCheck: true,
		}),

		methods: {
			submit() {
				this.$refs.observer.validate();
			},
			clear() {
				this.name = '';
				this.phoneNumber = '';
				this.email = '';
				this.select = null;
				this.checkbox = null;
				this.$refs.observer.reset();
			},
			mbizCheck() {
				this.dbizCheck = false;
			},
			keyinBizNum() {
				this.dbizCheck = true;
			},
			next() {
				//기존 사업자번호 등록된 정보 파람으로 보내주거나
				//아니면 그냥 사업자번호 파람으로 보내기
				this.$router.push({ name: 'SignUpView', params: { aaa: 1213 } });
			},
		},
	};
</script>
