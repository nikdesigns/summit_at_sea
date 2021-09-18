<template>
  <div class="home">
    <hero-component></hero-component>
    <feature-component></feature-component>
  </div>
</template>

<script>
import FeatureComponent from "../components/FeatureComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";
export default {
  components: { HeroComponent, FeatureComponent },
  name: "Home",
};
</script>
