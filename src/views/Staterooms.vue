<template>
  <header-component></header-component>
  <div class="bg-white">
    <div
      class="max-w-2xl mx-auto py-8 px-4 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8"
    >
      <div class="mt-2 space-y-16">
        <div
          v-for="(feature, featureIdx) in features"
          :key="feature.name"
          class="
            flex flex-col-reverse
            lg:grid lg:grid-cols-12
            lg:gap-x-8
            lg:items-center
          "
        >
          <div
            :class="[
              featureIdx % 2 === 0
                ? 'lg:col-start-1'
                : 'lg:col-start-8 xl:col-start-9',
              'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4',
            ]"
          >
            <h3 class="text-lg font-medium text-gray-900">
              {{ feature.name }}
            </h3>
            <p class="mt-2 text-sm text-gray-500">{{ feature.description }}</p>
          </div>
          <div
            :class="[
              featureIdx % 2 === 0
                ? 'lg:col-start-6 xl:col-start-5'
                : 'lg:col-start-1',
              'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8',
            ]"
          >
            <div
              class="
                aspect-w-5 aspect-h-2
                rounded-lg
                bg-gray-100
                overflow-hidden
              "
            >
              <img
                :src="feature.imageSrc"
                :alt="feature.imageAlt"
                class="object-center object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
const features = [
  {
    name: "Ocean View Stateroom",
    description:
      "As you sail to Cozumel, you won’t want to miss a single moment. In an Ocean View stateroom, you’ll be treated to a beautiful new view every day! Spend the day exploring the sites and sounds of Cozumel, then retreat to your comfortable, well-appointed stateroom to relax.",
    imageSrc:
      "https://www.145summitatsea.com/summitImage/Det_8087_1620657089.jfif",
    imageAlt: "Ocean View Stateroom",
  },
  {
    name: "Balcony Stateroom",
    description:
      "Imagine waking up every morning, opening your balcony door, and being greeted with views of a brand-new and breathtaking part of the world. Reserve a Balcony stateroom to enjoy spectacular vistas each and every day from the comfort and privacy of your own room",
    imageSrc:
      "https://www.145summitatsea.com/summitImage/Det_2821_1620657040.jfif",
    imageAlt: "Balcony Stateroom",
  },
];

export default {
  name: "Staterooms",
  components: {
    HeaderComponent,
    FooterComponent,
  },
  setup() {
    return {
      features,
    };
  },
};
</script>