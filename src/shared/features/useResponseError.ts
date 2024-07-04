import { RequestReturnError } from '../types/api';

export function useResponseError() {
	const showErrorNotify = (error: RequestReturnError | string) => {
		console.log(error);
	};

	return {
		showErrorNotify
	};
}
