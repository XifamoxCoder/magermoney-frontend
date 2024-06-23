import { createRouter, createWebHistory } from 'vue-router';

import { registerRouterMiddleware } from './routerMiddleware';
import routes from './routes';

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		return new Promise((resolve) => {
			resolve({ left: 0, top: 0 });
		});
	}
});

registerRouterMiddleware(router);

export default router;
