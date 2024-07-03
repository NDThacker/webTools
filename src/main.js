import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import CalcComp from './components/Calc.vue';
import CurrencyComp from './components/CurrencyConverter.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/calc', component: CalcComp },
		{ path: '/currency', component: CurrencyComp }
	]
});

const app = createApp(App);

app.use(router);
app.mount('#app');
