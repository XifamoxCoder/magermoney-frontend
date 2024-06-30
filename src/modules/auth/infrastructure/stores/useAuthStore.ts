import { defineStore } from 'pinia';

import { fetchStateInitialState } from '@/shared/domain';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

import { NAuth } from '../../domain/Domain';

const authStore = defineStore('auth', {
	persist: {
		paths: ['accessToken', 'expireDate', 'isAuthorization', 'user']
	},
	state: (): NAuth.IState => ({
		...fetchStateInitialState,
		isAuthorization: false,
		accessToken: '',
		expireDate: 0,
		user: null
	}),
	getters: {
		getIsAccessTokenExpired: (state: NAuth.IState) =>
			Date.now() < state.expireDate
	},
	actions: {
		setAuthToken(payload: NAuth.IVerifyUser) {
			if (!payload) return this.resetAuthState();

			const { accessToken } = payload;

			this.accessToken = accessToken;

			if (this.accessToken) {
				this.isAuthorization = true;
			}
		},
		setUser(user: NAuth.IDetectUser) {
			this.user = user;
		},
		setIsLoading(value: boolean) {
			this.isLoading = value;
		},
		setError(error: NAuth.IError | null) {
			this.error = error;
		},
		resetAuthState() {
			this.isAuthorization = false;
			this.accessToken = '';
			this.expireDate = 0;

			this.resetUser();
		},
		resetUser() {
			this.user = null;
		}
	}
});

export const useAuthStore = () => useStoreAdapter(authStore());
