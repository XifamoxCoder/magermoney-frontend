import { useBaseFetch } from '@/shared/infrastructure/services';

import { useAuthModel } from '../models';
import { useAuthStore } from '../stores';

export function useVerifyUserService() {
	const { setAuthToken, setIsLoading, setError } = useAuthStore();
	const { verifyUser } = useAuthModel();

	const { fetchBase: verifyAuthCode } = useBaseFetch({
		fetchData: verifyUser,
		setData: setAuthToken,
		setIsLoading,
		setError
	});

	return {
		verifyAuthCode
	};
}
