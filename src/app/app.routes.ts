import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Navbar } from './navbar/navbar';
import { AboutUs } from './about-us/about-us';
import { Appointment } from './appointment/appointment';
import { Footer } from './footer/footer';

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
    {
        path: '',
        component: Appointment
    },
    {
        path: '',
        component: Footer
    },
];
