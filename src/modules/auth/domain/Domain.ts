import { DetectUserEntity, VerifyUserEntity } from '@/app/types/api';

export namespace NAuth {
	export const API_NAMESPACE = 'auth';

	export interface IDetectUser extends DetectUserEntity {}
	export interface IVerifyUser extends VerifyUserEntity {}
}
