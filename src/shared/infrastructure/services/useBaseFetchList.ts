import { RequestReturnError } from '@/shared/types/api';
import {
	BaseFetchListParams,
	BaseFetchListResult
} from '@/shared/types/services';

import { useBaseFetch } from './useBaseFetch';

export function useBaseFetchList<T, P extends any[], E = RequestReturnError>({
	fetchData,
	setIsLoading,
	setData,
	setError,
	dataList,
	onError
}: BaseFetchListParams<T, P, E>): BaseFetchListResult<T, P> {
	const { fetchBase: fetchBaseList } = useBaseFetch<T[], P, E>({
		fetchData,
		setIsLoading,
		skipFetch: () => !!unref(dataList).length,
		setData,
		setError,
		onError
	});
	return {
		fetchBaseList
	};
}
