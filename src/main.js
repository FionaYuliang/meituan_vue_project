import { createApp } from 'vue';
import App from './App.vue';
import 'amfe-flexible';
import {Button, Icon, Tab, Tabs, TreeSelect, 
    Stepper, ActionBar, ActionBarIcon, ActionBarButton,
    Checkbox, CheckboxGroup, SubmitBar, ContactCard, Card, Dialog, 
    AddressList,  AddressEdit, Area} from 'vant'
import 'vant/lib/index.css';
import router from '../src/router/index';
import '../src/common/css/base.less';
import store from '../src/store/index';


const app = createApp(App);
app.use(Button).
use(Icon).
use(Tab).
use(Tabs).
use(TreeSelect).
use(Stepper).
use(ActionBar).
use(ActionBarIcon).
use(ActionBarButton).
use(Checkbox).
use(CheckboxGroup).
use(SubmitBar).
use(ContactCard).
use(Card).
use(Dialog).
use(AddressEdit).
use(Area).
use(AddressList);

app.use(router);
app.use(store);
app.mount('#app');
