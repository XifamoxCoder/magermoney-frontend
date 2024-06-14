import './app/styles/index.scss';
import '@vant/touch-emulator';

import { createApp } from 'vue';

import App from './app/App.vue';
import { registerLayout } from './app/layouts';
import { registerPlugins } from './app/plugins';

const app = createApp(App);

registerLayout(app);
registerPlugins(app);

app.mount('#app');
