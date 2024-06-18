import { createFetch } from '@vueuse/core';

import { appConfig } from '@/app/config';
import { useAuthStore } from '@/modules/auth/infrastructure/stores';

export const useApiFetch = () => {
	const fetch = createFetch({
		baseUrl: appConfig.apiBaseUrl,
		options: {
			async beforeFetch({ options }) {
				const { accessToken } = useAuthStore();

				options.headers = {
					...options.headers,
					Authorization: `Bearer ${accessToken}`
				};

				return { options };
			},
			async onFetchError(ctx) {
				// TODO: implement error handling later
				return ctx;
			}
		},
		fetchOptions: {
			mode: 'cors'
		}
	});

	return {
		fetch
	};
};
