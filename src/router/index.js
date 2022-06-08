import Vue from 'vue';
import Router from 'vue-router';

import DefaultLayout from "@/layouts/DefaultLayout";
import HomePage from "@/pages/HomePage";
import AboutUsPage from "@/pages/AboutUsPage";
import LocksmithNearMePage from "@/pages/LocksmithNearMePage";

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
                },
                {
                    path: '/zone-acoperite',
                    name: 'LocksmithNearMePage',
                    component: LocksmithNearMePage
                }
            ]
        }
    ],
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
});