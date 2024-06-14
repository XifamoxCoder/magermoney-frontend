import { createRouter, createWebHistory } from 'vue-router';

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

export default router;
