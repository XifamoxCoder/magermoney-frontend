import {
	DetectUserEntity,
	LoginAuthDto,
	VerifyAuthDto,
	VerifyUserEntity
} from '@/app/types/api';
import { IFetchState } from '@/shared/domain';
import { RequestReturnError, RequestReturnValue } from '@/shared/types/api';

export namespace NAuth {
	export const API_NAMESPACE = 'auth';

	export interface IDetectUser extends DetectUserEntity {}
	export interface IVerifyUser extends VerifyUserEntity {}
	export interface ILoginAuth extends LoginAuthDto {}
	export interface IVerifyAuth extends VerifyAuthDto {}

	export interface IState extends IFetchState {
		isAuthorization: boolean;
		accessToken: string | null;
		expireDate: number;
		user: IDetectUser | null;
	}

	export interface IModel {
		detectUser: (payload: ILoginAuth) => RequestReturnValue<IDetectUser>;
		verifyUser: (payload: IVerifyAuth) => RequestReturnValue<IVerifyUser>;
	}

	export interface IError extends RequestReturnError {}
}
