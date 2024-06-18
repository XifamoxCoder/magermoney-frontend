import { useRouter } from 'vue-router';

import { AppRoutes } from '@/app/router/constants';
import { useUser } from '@/modules/users';

import { useAuthStore } from '../infrastructure/stores';

export function useAuth() {
	const { user, isAuthorization, resetAuthState } = useAuthStore();
	const { resetUser } = useUser();

	const router = useRouter();

	const logout = () => {
		resetAuthState();
		resetUser();

		router.push({ name: AppRoutes.Login });
	};

	return {
		user,
		isAuthorization,
		resetAuthState,
		logout
	};
}
