import { useApiFetch } from '@/shared/infrastructure/api';

import { NUsers } from '../../domain';

export const useUsersModel = (): NUsers.IModel => {
	const { fetch } = useApiFetch();

	const fetchAll = () =>
		fetch<NUsers.IUser[]>(`/${NUsers.API_NAMESPACE}`).get();

	const fetchOne = (id: number) =>
		fetch<NUsers.IUser>(`/${NUsers.API_NAMESPACE}/${id}`).get();

	const create = (payload: NUsers.ICreateUser) =>
		fetch<NUsers.IUser>(`/${NUsers.API_NAMESPACE}`).post(payload);

	const update = (id: number, payload: NUsers.IUpdateUser) =>
		fetch<NUsers.IUser>(`${NUsers.API_NAMESPACE}/${id}`).patch(payload);

	const remove = (id: number) =>
		fetch<NUsers.IUser>(`/${NUsers.API_NAMESPACE}/${id}`).delete();

	return {
		fetchAll,
		fetchOne,
		create,
		update,
		remove
	};
};
