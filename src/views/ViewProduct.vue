<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <header-component></header-component>
  <div class="bg-white">
    <div class="mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
      <!-- Product -->
      <div
        class="
          lg:grid lg:grid-rows-1 lg:grid-cols-7
          lg:gap-x-8 lg:gap-y-10
          xl:gap-x-16
        "
      >
        <!-- Product image -->
        <div class="lg:row-end-1 lg:col-span-4">
          <div
            class="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden"
          >
            <img
              :src="product.imageSrc"
              :alt="product.imageAlt"
              class="object-center object-cover"
            />
          </div>
        </div>

        <!-- Product details -->
        <div
          class="
            max-w-2xl
            mx-auto
            mt-14
            sm:mt-16
            lg:max-w-none
            lg:mt-0
            lg:row-end-2 lg:row-span-2
            lg:col-span-3
          "
        >
          <div class="flex flex-col-reverse">
            <div class="mt-4">
              <h1
                class="
                  text-2xl
                  font-extrabold
                  tracking-tight
                  text-gray-900
                  sm:text-3xl
                "
              >
                {{ product.name }}
              </h1>

              <h2 id="information-heading" class="sr-only">
                Product information
              </h2>
              <!-- <p class="text-sm text-gray-500 mt-2">
                Version {{ product.version.name }} (Updated
                <time :datetime="product.version.datetime">{{
                  product.version.date
                }}</time
                >)
              </p> -->
              <p class="text-lg text-gray-500 mt-2">
                Sponsorship cost: {{ product.price }}
              </p>
            </div>
          </div>

          <p class="text-gray-500 mt-6">{{ product.description }}</p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-1">
            <button
              @click.prevent="onSubmit()"
              type="button"
              :disabled="isAdded"
              :class="[
                isAdded
                  ? 'bg-gray-200 text-gray-400 cursor-default'
                  : 'bg-blue-600 hover:bg-blue-700 ',
                'w-full  border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-500',
              ]"
            >
              {{ isAdded ? "Added to cart" : "Add to cart" }}
            </button>
          </div>

          <div class="border-t border-gray-200 mt-10 pt-10">
            <h3 class="text-sm font-medium text-gray-900">Features:</h3>
            <div class="mt-4 prose prose-sm text-gray-500">
              <ul class="list-disc" role="list">
                <li v-for="highlight in product.highlights" :key="highlight">
                  {{ highlight }}
                </li>
              </ul>
            </div>
          </div>

          <div class="border-t border-gray-200 mt-10 pt-10">
            <h3 class="text-sm font-medium text-gray-900">License</h3>
            <p class="mt-4 text-sm text-gray-500">
              license
              <a href="#" class="font-medium text-blue-600 hover:text-blue-500"
                >Read full license</a
              >
            </p>
          </div>

          <div class="border-t border-gray-200 mt-10 pt-10">
            <h3 class="text-sm font-medium text-gray-900">Share</h3>
            <ul role="list" class="flex items-center space-x-6 mt-4">
              <li>
                <a
                  href="#"
                  class="
                    flex
                    items-center
                    justify-center
                    w-6
                    h-6
                    text-gray-400
                    hover:text-gray-500
                  "
                >
                  <span class="sr-only">Share on Facebook</span>
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="
                    flex
                    items-center
                    justify-center
                    w-6
                    h-6
                    text-gray-400
                    hover:text-gray-500
                  "
                >
                  <span class="sr-only">Share on Instagram</span>
                  <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="
                    flex
                    items-center
                    justify-center
                    w-6
                    h-6
                    text-gray-400
                    hover:text-gray-500
                  "
                >
                  <span class="sr-only">Share on Twitter</span>
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <NotificationComponent v-if="showSubmit" />
  <footer-component></footer-component>
</template>

<script>
import { StarIcon } from "@heroicons/vue/solid";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import NotificationComponent from "@/components/NotificationComponent";

const product = {
  name: "55” All-New Toshiba 55-inch C350 Series LED 4K UHD Smart Fire TV, Released 2021",
  version: { name: "1.0", date: "June 5, 2021", datetime: "2021-06-05" },
  price: "$1000",
  description:
    "Fire TV puts you at the center of your world of entertainment, letting you access all your favorite content from the home screen-- including live TV, and tens of thousdands of streaming channels, apps, and Alexa skills.",
  highlights: [
    "See all your content in one place - Fire TV brings live, over-the-air TV, streaming channels, and your favorite apps together onto one convenient home screen. Subscriptions may be required. Content availability subject to change.",
    "Regza Engine 4K is Toshiba’s high performance 4K engine for stunning picture quality, with ultra essential PQ technology combined with high quality LCD panel, you can get an incredible ultra HD 4K images with breath-taking picture quality.",
    "4 times resolution of Full HD, four times the detail. With Toshiba 4K TV, you can enjoy uncompromisingly crisp, clear visuals for a fully immersive, professional theater quality.",
    "Dolby Vision HDR and HDR10 transforms your TV into an entertainment powerhouse. The image technology from cinemas, now brought together in the home, provide amazing realism that you'll see, hear, and feel like never before",
    "DTS Virtual: X technology is a scalable and versatile advanced post processing package that creates an immersive audio experience by virtualizing height content over traditional stereos",
  ],
  imageSrc:
    "https://www.145summitatsea.com/summitImage/Det_8894_1628514377.jpg",
  imageAlt:
    "Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.",
};

export default {
  components: {
    StarIcon,
    HeaderComponent,
    FooterComponent,
    NotificationComponent,
  },
  data() {
    return {
      showSubmit: false,
      isAdded: false,
    };
  },
  methods: {
    onSubmit() {
      this.showSubmit = true;
      this.isAdded = true;
      setTimeout(() => {
        this.showSubmit = false;
      }, 3000);
    },
  },
  setup() {
    return {
      product,
    };
  },
};
</script>