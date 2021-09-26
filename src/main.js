import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import helpers from "@/helpers";
import foldersAndFiles from "../src/store/modules/foldersAndFiles/index.js";
import '../src/assets/styles/main.scss'
const store = createStore({
    modules: {
        foldersAndFiles,
    },
})
const app = createApp(App)
app.use(store);
app.use({
    install() {
        app.helpers = helpers;
        app.config.globalProperties.$helpers = helpers;
    }
})
app.mount('#app')
