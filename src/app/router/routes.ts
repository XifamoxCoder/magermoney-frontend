import { RouteRecordRaw } from 'vue-router';

import { authMiddleware, loginMiddleware } from '@/modules/auth';

import { AppRoutes } from './constants';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: AppRoutes.Dashboard,
		meta: {
			middleware: [authMiddleware]
		},
		component: () =>
			import('@/modules/dashboard/ui/views/DashboardView/DashboardView.vue')
	},
	{
		path: '/login',
		name: AppRoutes.Login,
		meta: { layout: 'Login', middleware: loginMiddleware },
		component: () => import('@/modules/auth/ui/views/LoginView/LoginView.vue')
	}
];

export default routes;
