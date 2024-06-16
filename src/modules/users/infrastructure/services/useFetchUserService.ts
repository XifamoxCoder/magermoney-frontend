import { useBaseFetch } from '@/shared/infrastructure/services';

import { useUsersModel } from '../models';
import { useUsersStore } from '../stores';

export function useFetchUserService() {
	const { setUser, setIsLoading, setError } = useUsersStore();
	const { fetchOne } = useUsersModel();

	const { fetchBase: fetchUser } = useBaseFetch({
		fetchData: fetchOne,
		setData: setUser,
		setIsLoading,
		setError
	});

	return {
		fetchUser
	};
}
