import { PasswordInput } from 'vant';
import { FieldRule } from 'vant/es';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import {
	initialLoginFormControls,
	TInitialLoginFromData
} from '@/modules/auth/domain';
import { useDetectUserService } from '@/modules/auth/infrastructure/services';
import { useAuthStore } from '@/modules/auth/infrastructure/stores';
import { useTheme } from '@/modules/settings';
import { useLanguage } from '@/modules/settings/features/useLanguage';
import { useForm } from '@/shared/features';
import { useAppHeader } from '@/shared/ui/components';
import { cloneDeep, isEmail, isPhoneNumber } from '@/shared/utils';

export function useAuthForm() {
	const loginFormData = ref<TInitialLoginFromData>(
		cloneDeep(initialLoginFormControls)
	);
	const { t } = useI18n();
	const { createOrLoginUser } = useDetectUserService();
	const { user, isLoading, error, resetUser, resetError } = useAuthStore();
	const { setHeader, resetHeader } = useAppHeader();
	const { lang } = useLanguage();
	const { isDark } = useTheme();

	const { formRef, validateForm } = useForm(error);

	const router = useRouter();

	const passwordInputRef = ref<InstanceType<typeof PasswordInput> | null>(null);

	const loginSubmitHandler = async () => {
		if (!(await validateForm())) return;

		const { login } = unref(loginFormData);

		const payload = isEmail(login)
			? { email: login }
			: isPhoneNumber(login)
				? { phone_number: login }
				: { email: '', phone: '' };

		const response = await createOrLoginUser({}, payload);

		if (unref(response?.data)) {
			unref(passwordInputRef)?.$el.focus();
		}
	};

	const isLetters = ref(false);
	const isDigits = ref(false);
	watch(
		() => unref(loginFormData).login,
		(value) => {
			const onlyDigits = /^[0-9]*&/.test(value);

			if (onlyDigits) {
				isDigits.value = true;
				isLetters.value = false;
			} else {
				isDigits.value = false;
				isLetters.value = true;
			}
		}
	);

	const validationRules = computed<FieldRule[]>(() => [
		{ required: true, message: 'Field is required' },
		unref(isLetters) ? { validator: isEmail, message: 'Invalid Email' } : {},
		unref(isDigits)
			? { validator: isPhoneNumber, message: 'Invalid Phone Number' }
			: {}
	]);

	return {
		formRef,
		passwordInputRef,
		loginSubmitHandler,
		loginFormData,
		validationRules
	};
}
