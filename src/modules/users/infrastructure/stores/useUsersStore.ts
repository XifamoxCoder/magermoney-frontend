import { defineStore } from 'pinia';

import { fetchStateInitialState } from '@/shared/domain';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

import { NUsers } from '../../domain';

const usersStore = defineStore('users', {
	state: (): NUsers.IState => ({
		...fetchStateInitialState,
		user: null
	}),
	actions: {
		setUser(user: NUsers.IUser) {
			this.user = user;
		},
		setIsLoading(value: boolean) {
			this.isLoading = value;
		},
		setError(error: NUsers.IError | null) {
			this.error = error;
		},
		resetUser() {
			this.user = null;
		}
	}
});

export const useUsersStore = () => useStoreAdapter(usersStore());
