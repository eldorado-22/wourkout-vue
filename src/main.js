import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Header from "@/components/Header/header.vue";

createApp(App).mount('#app')
createApp(Header).mount('#header')
