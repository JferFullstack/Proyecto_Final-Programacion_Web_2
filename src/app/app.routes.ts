import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Navbar } from './navbar/navbar';
import { AboutUs } from './about-us/about-us';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: '',
        component: Navbar
    },
    {
        path: '',
        component: AboutUs
    },
];
