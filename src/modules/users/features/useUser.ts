import { useFetchUserService } from '../infrastructure/services';
import { useUsersStore } from '../infrastructure/stores';

export function useUser() {
	const { user, resetUser, isLoading } = useUsersStore();
	const { fetchUser } = useFetchUserService();

	return {
		fetchUser,
		resetUser,
		isLoading,
		user
	};
}
