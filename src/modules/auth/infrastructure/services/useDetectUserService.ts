import { useBaseFetch } from '@/shared/infrastructure/services';

import { useAuthModel } from '../models';
import { useAuthStore } from '../stores';

export function useDetectUserService() {
	const { setUser, setIsLoading, setError } = useAuthStore();
	const { detectUser } = useAuthModel();

	const { fetchBase: createOrLoginUser } = useBaseFetch({
		fetchData: detectUser,
		setData: setUser,
		setIsLoading,
		setError
	});

	return {
		createOrLoginUser
	};
}
