<template>
  <div class="home">
    <header-component></header-component>
    <hero-component></hero-component>
    <feature-component></feature-component>
    <special-component></special-component>
    <cta-component></cta-component>
    <comparison-component></comparison-component>
    <schedule-component></schedule-component>
    <shore-component></shore-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import FeatureComponent from "../components/FeatureComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";
import SpecialComponent from "../components/SpecialComponent.vue";
import CtaComponent from "../components/CtaComponent.vue";
import ComparisonComponent from "../components/ComparisonComponent.vue";
import ScheduleComponent from "../components/ScheduleComponent.vue";
import ShoreComponent from "../components/ShoreComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
export default {
  components: {
    HeroComponent,
    FeatureComponent,
    SpecialComponent,
    CtaComponent,
    ComparisonComponent,
    ScheduleComponent,
    ShoreComponent,
    FooterComponent,
    HeaderComponent,
  },
  name: "Home",
};
</script>
 
     
