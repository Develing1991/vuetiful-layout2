<template>
	<div class="px-2">
		<validation-observer ref="observer" v-slot="{ invalid }">
			<!-- <v-list outlined class="rounded-lg py-0 mt-3">
        <v-subheader class="teal rounded-t-lg white--text font-weight-bold pt-1"
          >사업자번호조회 (필수)
        </v-subheader>
        <v-list-item class="px-2">
          <v-list-item-content class="pb-0">
            <validation-provider
              v-slot="{ errors }"
              name="mem_id"
              rules="required"
            >
              <v-text-field
                v-model="name"
                :error-messages="errors"
                label="사업자번호"
                required
                solo
                outlined
                dense
              />
            </validation-provider>
          </v-list-item-content>
          <v-list-item-action class="mb-7 ml-2">
            <v-btn class="secondary">조회하기</v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list> -->

			<form @submit.prevent="submit" class="mt-3">
				<v-list outlined class="rounded-lg py-0">
					<v-subheader
						class="teal rounded-t-lg white--text font-weight-bold pt-1"
						>기본정보 (필수)
					</v-subheader>
					<v-list-item class="px-2">
						<v-list-item-content class="pb-0">
							<validation-provider
								v-slot="{ errors }"
								name="mem_id"
								rules="required"
							>
								<v-text-field
									v-model="name"
									:error-messages="errors"
									label="아이디"
									required
									solo
									outlined
									dense
								/>
							</validation-provider>
						</v-list-item-content>
						<v-list-item-action class="mb-7 ml-2">
							<ButtonCmp color="secondary"> 중복체크 </ButtonCmp>
						</v-list-item-action>
					</v-list-item>

					<v-list-item class="px-2">
						<v-list-item-content class="pb-0">
							<validation-provider
								v-slot="{ errors }"
								name="mem_id"
								:rules="{
									required: true,
									digits: 7,
									regex: '^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$',
								}"
							>
								<v-text-field
									v-model="phoneNumber"
									:error-messages="errors"
									label="전화번호"
									required
									solo
									outlined
									dense
								/>
							</validation-provider>
						</v-list-item-content>
						<v-list-item-action class="mb-7 ml-2">
							<ButtonCmp color="secondary"> 인증번호 받기 </ButtonCmp>
						</v-list-item-action>
					</v-list-item>
					<v-list-item class="px-2">
						<v-list-item-content class="pb-0">
							<validation-provider
								v-slot="{ errors }"
								name="mem_id"
								:rules="{
									digits: 4,
								}"
							>
								<v-text-field
									v-model="phoneNumber"
									:error-messages="errors"
									label="인증번호"
									required
									solo
									outlined
									dense
								/>
							</validation-provider>
						</v-list-item-content>
						<v-list-item-action class="mb-7 ml-2">
							<ButtonCmp color="secondary"> 인증번호 확인 </ButtonCmp>
						</v-list-item-action>
					</v-list-item>

					<v-list-item class="px-2">
						<v-list-item-content class="py-0">
							<validation-provider
								v-slot="{ errors }"
								name="password1"
								rules="required"
							>
								<!-- v-model="password1" -->
								<v-text-field
									:error-messages="errors"
									label="비밀번호"
									required
									solo
									outlined
									dense
								/>
							</validation-provider>
						</v-list-item-content>
					</v-list-item>
					<v-list-item class="px-2">
						<v-list-item-content class="py-0">
							<validation-provider
								v-slot="{ errors }"
								name="password2"
								rules="required"
							>
								<!-- v-model="password2" -->
								<v-text-field
									:error-messages="errors"
									label="비밀번호 확인"
									required
									solo
									outlined
									dense
								/>
							</validation-provider>
						</v-list-item-content>
					</v-list-item>
				</v-list>

				<v-list outlined class="rounded-lg py-0 mt-3">
					<v-subheader
						class="teal rounded-t-lg white--text font-weight-bold pt-1"
						>이메일 주소 (선택)
					</v-subheader>
					<v-list-item class="px-2">
						<v-list-item-content class="pb-0">
							<validation-provider
								v-slot="{ errors }"
								name="email"
								rules="email"
							>
								<v-text-field
									v-model="email"
									:error-messages="errors"
									label="E-mail"
									solo
									outlined
									dense
								/>
							</validation-provider>
						</v-list-item-content>
					</v-list-item>
				</v-list>
				<ButtonCmp
					color="teal"
					width="100%"
					large
					class="mt-5"
					btnTxtClass="text-subtitle-1 white--text"
					:disabled="invalid"
				>
					회원가입
				</ButtonCmp>
				<!-- <v-btn class="mt-3 primary" dark width="100%" @click="clear" large>
          <div class="text-subtitle-1">초기화</div>
        </v-btn> -->
			</form>
		</validation-observer>
	</div>
</template>

<script>
	import ButtonCmp from '@/components/ButtonCmp.vue';
	import { required, digits, email, max, regex } from 'vee-validate/dist/rules';
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

	extend('email', {
		...email,
		message: 'Email must be valid',
	});

	export default {
		components: {
			ValidationProvider,
			ValidationObserver,
			ButtonCmp,
		},
		data: () => ({
			name: '',
			phoneNumber: '',
			email: '',
			select: null,
			items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
			checkbox: null,
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
		},
	};
</script>
