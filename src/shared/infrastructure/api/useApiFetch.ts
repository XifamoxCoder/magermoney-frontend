import { createFetch } from '@vueuse/core';

import { appConfig } from '@/app/config';

export const useApiFetch = () => {
	const fetch = createFetch({
		baseUrl: appConfig.apiBaseUrl,
		options: {
			async beforeFetch({ options }) {
				options.headers = {
					...options.headers
					// TODO: implement bearer auth token later
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
