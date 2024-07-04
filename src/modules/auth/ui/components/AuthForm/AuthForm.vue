<script setup lang="ts">
import { AUTH_CODE_LENGTH } from '@/modules/auth/constants';
import { AppCellTitle } from '@/shared/ui/components';

import WelcomeInfo from '../WelcomeInfo/WelcomeInfo.vue';
import { useAuthForm } from './features';

const {
	formRef,
	passwordInputRef,
	loginSubmitHandler,
	loginFormData,
	validationRules
} = useAuthForm();

const isSendAuthCode = ref(false);
const showKeyboard = ref(true);
</script>

<template>
	<van-form
		ref="formRef"
		:class="$style['auth-form']"
		@submit="loginSubmitHandler"
	>
		<welcome-info />
		<template v-if="!isSendAuthCode">
			<van-cell-group inset>
				<van-field
					v-model="loginFormData.login"
					name="EmailOrPhone"
					type="text"
					:rules="validationRules"
					clearable
					placeholder="Введите ваш email или телефон"
					autocomplete="true"
				/>
			</van-cell-group>
			<van-cell-group inset :class="$style['auth-form__actions']">
				<van-button round block type="primary" native-type="submit">
					Авторизоваться
				</van-button>
			</van-cell-group>
		</template>
		<transition name="van-fade">
			<div v-if="isSendAuthCode">
				<app-cell-title text="Код авторизации" />
				<van-password-input
					ref="passwordInputRef"
					:length="AUTH_CODE_LENGTH"
					:focused="showKeyboard"
					@focus="showKeyboard = true"
				/>
				<van-number-keyboard
					:show="showKeyboard"
					@blur="showKeyboard = false"
				/>
			</div>
		</transition>
	</van-form>
</template>

<style module lang="scss">
@import './styles/AuthForm.module';
</style>
