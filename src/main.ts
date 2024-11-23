import './styles/index.css'
import '@fontsource-variable/outfit'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/router'

createApp(App).use(router).mount('#app')
