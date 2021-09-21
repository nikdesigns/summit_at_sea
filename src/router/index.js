import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Staterooms from '../views/Staterooms.vue';
import ContactUs from '../views/ContactUs.vue';
import PromoSponsorships from '../views/PromoSponsorships.vue';
import RaffleSponsorships from '../views/RaffleSponsorships.vue';
import StaticSponsorships from '../views/StaticSponsorships.vue';
import ViewProduct from '../views/ViewProduct.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/staterooms',
    name: 'Stateroom',
    component: Staterooms,
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: ContactUs,
  },
  {
    path: '/promo-sponsorships',
    name: 'promo-sponsorships',
    component: PromoSponsorships,
  },
  {
    path: '/raffle-sponsorships',
    name: 'rafle-sponsorships',
    component: RaffleSponsorships,
  },
  {
    path: '/static-sponsorships',
    name: 'static-sponsorships',
    component: StaticSponsorships,
  },
  {
    path: '/view-product',
    name: 'view-product',
    component: ViewProduct,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
