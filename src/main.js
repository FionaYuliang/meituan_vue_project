import { createApp } from 'vue';
import App from './App.vue';
import 'amfe-flexible';
import {Button} from 'vant';
import { Icon } from 'vant';
import 'vant/lib/index.css';
import router from '../src/router/index';
import '../src/common/css/base.less';


const app = createApp(App);
app.use(Button).use(Icon).use(router);

app.mount('#app');
