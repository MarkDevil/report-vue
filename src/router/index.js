import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/Layout'
import Init from '../components/Init'
import Resources from '../components/content/Resources'
import Processes from '../components/content/Processes'
import FS from '../components/content/FS.vue'
import Report from '../components/content/Report.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: Init,
        },
        {
            path: '/init',
            name: 'Init',
            component: Init,
        },
        {
            path: '/main',
            name: 'Main',
            component: Layout,
            redirect: Resources,
            children: [
                {
                    path: 'resources',
                    name: 'Resources',
                    component: Resources,
                },
                {
                    path: 'processes',
                    name: 'Processes',
                    component: Processes,
                },
                {
                    path: 'fs',
                    name: 'FS',
                    component: FS,
                },
                {
                    path: 'report',
                    name: 'Report',
                    component: Report
                },
            ],
        }
    ]
})
