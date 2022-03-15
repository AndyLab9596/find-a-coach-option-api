import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseDialog from './components/ui/BaseDialog.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import store from './store';

const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton)
app.component('base-dialog', BaseDialog)
app.component('base-spinner', BaseSpinner)
app.use(router);
app.use(store);
app.mount('#app');
