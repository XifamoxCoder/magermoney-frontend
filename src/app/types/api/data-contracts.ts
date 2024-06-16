/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CreateUserDto {
	email: string;
	phone?: string | null;
	darkMode?: boolean;
	language?: string;
	currency?: string;
}

export interface UserEntity {
	id: number;
	/** @format date-time */
	createdAt: string;
	/** @format date-time */
	updatedAt: string;
	email: string;
	phone?: string | null;
	authCode?: string | null;
	darkMode: boolean;
	isFirstTime: boolean;
	language: string;
	currency: string;
	role: 'USER' | 'ADMIN';
}

export interface UpdateUserDto {
	email?: string;
	phone?: string | null;
	darkMode?: boolean;
	language?: string;
	currency?: string;
	authCode?: string | null;
	isFirstTime?: boolean | null;
}

export interface LoginAuthDto {
	email?: string | null;
	phone?: string | null;
}

export interface DetectUserEntity {
	id: number;
}

export interface VerifyAuthDto {
	authCode: string;
	userId: number;
	darkMode?: boolean;
	language?: string;
}

export interface VerifyUserEntity {
	accessToken: string | null;
	email: string;
	phone: string;
	isFirstTime: boolean;
}
