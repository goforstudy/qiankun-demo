import { createApp } from 'vue'
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun';


registerMicroApps([
    {
        name: 'sub-app-2',
        entry: '//localhost:8077',
        container: '#container',
        activeRule: '/sub-app-2',
        props: {
            routerBase: '/sub-app-2' // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
        }
    },
], {
    beforeLoad: app => {
        console.log('before load app.name====>>>>>', app.name)
    },
    beforeMount: [
        app => {
            console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
        },
    ],
    afterMount: [
        app => {
            console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name);
        }
    ],
    afterUnmount: [
        app => {
            console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
        },
    ],
});

start();
createApp(App).mount('#app-admin')

