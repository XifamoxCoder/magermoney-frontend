import { App } from 'vue';

import router from '../router';
import vant from './vant';

export function registerPlugins(app: App) {
	app.use(vant);
	app.use(router);
}
