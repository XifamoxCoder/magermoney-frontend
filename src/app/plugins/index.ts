import { App } from 'vue';

import router from '../router';
import pinia from './pinia';
import vant from './vant';

export function registerPlugins(app: App) {
	app.use(vant);
	app.use(router);
	app.use(pinia);
}
