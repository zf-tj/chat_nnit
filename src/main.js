/* jshint esversion: 11 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import element from "element-plus";
import "element-plus/dist/index.css";

import store from "./store";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);

app.use(store).use(router).use(element).mount("#app");

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
