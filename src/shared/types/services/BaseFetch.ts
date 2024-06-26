import { RequestReturnValue } from '../api';

export interface BaseFetchParams<T, P extends any[], E = unknown> {
	fetchData: (...args: P) => RequestReturnValue<T>;
	setIsLoading: (value: boolean) => void;
	setData: (data: T) => void;
	setError: (error: E | null) => void;
	skipFetch?: () => boolean;
	onError?: (error: E) => void;
}

export type BaseFetchMethodParams = {
	force?: boolean;
	quite?: boolean;
	showError?: boolean;
};

export type BaseFetchMethod<T, P extends any[]> = (
	params?: BaseFetchMethodParams,
	...args: P
) => Promise<RequestReturnValue<T> | void>;

export interface BaseFetchResult<T, P extends any[]> {
	fetchBase: BaseFetchMethod<T, P>;
}
