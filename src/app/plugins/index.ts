import { App } from 'vue';

import vant from './vant';

export function registerPlugins(app: App) {
	app.use(vant);
}
