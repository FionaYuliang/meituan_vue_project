import { createApp } from 'vue';
import App from './App.vue';
import 'amfe-flexible';
import {Button, Icon, Tab, Tabs, TreeSelect, Stepper, ActionBar, ActionBarIcon, ActionBarButton} from 'vant'
import 'vant/lib/index.css';
import router from '../src/router/index';
import '../src/common/css/base.less';


const app = createApp(App);
app.use(Button).
use(Icon).
use(Tab).
use(Tabs).
use(TreeSelect).
use(Stepper).
use(ActionBar).
use(ActionBarIcon).
use(ActionBarButton);

app.use(router);
app.mount('#app');
