import { App } from 'vue';

import router from '../router';
import i18n from './i18n';
import pinia from './pinia';
import vant from './vant';

export function registerPlugins(app: App) {
	app.use(vant);
	app.use(router);
	app.use(i18n);
	app.use(pinia);
}
