import Vue from 'vue';
import Router from 'vue-router';

import DefaultLayout from "@/layouts/DefaultLayout";
import HomePage from "@/pages/HomePage";
import AboutUsPage from "@/pages/AboutUsPage";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: DefaultLayout,
            children: [
                {
                    path: '/',
                    name: 'HomePage',
                    component: HomePage
                },
                {
                    path: '/despre-noi',
                    name: 'AboutUsPage',
                    component: AboutUsPage
                }
            ]
        }
    ],
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
});