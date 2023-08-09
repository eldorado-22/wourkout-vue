import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import Homes from "@/components/Homes/homes.vue";

createApp(App).mount('#app');
createApp(Homes).mount('#home');

