import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Staterooms from '../views/Staterooms.vue';
import ContactUs from '../views/ContactUs.vue';
import PromoSponsorships from '../views/PromoSponsorships.vue';
import RaffleSponsorships from '../views/RaffleSponsorships.vue';
import StaticSponsorships from '../views/StaticSponsorships.vue';
import ViewProduct from '../views/ViewProduct.vue';
import TradeShowExhibit from '../views/TradeShowExhibit.vue';
import AirlineParticipation from '../views/AirlineParticipation.vue';
import ShopPresentationTermsCondition from '../views/ShopPresentationTermsCondition.vue';
import ShopParticipation from '../views/ShopParticipation.vue';
import CodeOfConduct from '../views/CodeOfConduct.vue';
import CancellationTransfer from '../views/CancellationTransfer.vue';
import Cart from '../views/Cart.vue';
import Checkout from '../views/Checkout.vue';
import OrderHistory from '../views/OrderHistory.vue';

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
  {
    path: '/trade-show-exhibit',
    name: 'trade-show-exhibit',
    component: TradeShowExhibit,
  },
  {
    path: '/airline-participation',
    name: 'airline-participation',
    component: AirlineParticipation,
  },
  {
    path: '/shop-presentation-terms-and-condition',
    name: 'shop-presentation-terms-and-condition',
    component: ShopPresentationTermsCondition,
  },
  {
    path: '/shop-participation',
    name: 'shop-participation',
    component: ShopParticipation,
  },
  {
    path: '/code-of-conduct',
    name: 'code-of-conduct',
    component: CodeOfConduct,
  },
  {
    path: '/cancellation-and-transfer',
    name: 'cancellation-and-transfer',
    component: CancellationTransfer,
  },
  {
    path: '/stateroom',
    name: 'stateroom',
    component: Staterooms,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
  },
  {
    path: '/my-orders',
    name: 'my-orders',
    component: OrderHistory,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
