import { RouteRecordRaw } from 'vue-router';

import { AppRoutes } from './constants';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: AppRoutes.Dashboard,
		component: () =>
			import('@/modules/dashboard/ui/views/DashboardView/DashboardView.vue')
	},
	{
		path: '/login',
		name: AppRoutes.Login,
		component: () => import('@/modules/auth/ui/views/LoginView/LoginView.vue')
	}
];

export default routes;
