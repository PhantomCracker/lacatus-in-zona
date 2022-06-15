import Vue from 'vue';
import Router from 'vue-router';

import DefaultLayout from "@/layouts/DefaultLayout";
import HomePage from "@/pages/HomePage";
import AboutUsPage from "@/pages/AboutUsPage";
import LocksmithNearMePage from "@/pages/LocksmithNearMePage";
import BucurestiS1Page from "@/pages/BucurestiS1Page";
import BucurestiS2Page from "@/pages/BucurestiS2Page";
import BucurestiS3Page from "@/pages/BucurestiS3Page";
import BucurestiS4Page from "@/pages/BucurestiS4Page";
import BucurestiS5Page from "@/pages/BucurestiS5Page";
import BucurestiS6Page from "@/pages/BucurestiS6Page";
import IlfovPage from "@/pages/IlfovPage";

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
                },
                {
                    path: '/bucuresti',
                    name: 'BucurestiS1Page',
                    component: BucurestiS1Page
                },
                {
                    path: '/bucuresti-sector2',
                    name: 'BucurestiS2Page',
                    component: BucurestiS2Page
                },
                {
                    path: '/bucuresti-sector3',
                    name: 'BucurestiS3Page',
                    component: BucurestiS3Page
                },
                {
                    path: '/bucuresti-sector4',
                    name: 'BucurestiS4Page',
                    component: BucurestiS4Page
                },
                {
                    path: '/bucuresti-sector5',
                    name: 'BucurestiS5Page',
                    component: BucurestiS5Page
                },
                {
                    path: '/bucuresti-sector6',
                    name: 'BucurestiS6Page',
                    component: BucurestiS6Page
                },
                {
                    path: '/ilfov',
                    name: 'IlfovPage',
                    component: IlfovPage
                },
            ]
        }
    ],
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
});