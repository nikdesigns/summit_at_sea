<template>
  <header-component></header-component>
  <HeaderBannerComponent v-if="showBanner" />
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 overflow-hidden sm:px-6 lg:px-8">
      <h2 class="sr-only">Products</h2>
      <div
        class="
          pb-5
          border-b border-gray-200
          sm:flex
          sm:items-center
          sm:justify-between
        "
      >
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Raffle Sponsorships
        </h3>
        <div class="mt-3 sm:mt-0 sm:ml-4">
          <label for="mobile-search-candidate" class="sr-only">Search</label>
          <label for="desktop-search-candidate" class="sr-only">Search</label>
          <div class="flex rounded-md shadow-sm">
            <div class="relative flex-grow focus-within:z-10">
              <div
                class="
                  absolute
                  inset-y-0
                  left-0
                  pl-3
                  flex
                  items-center
                  pointer-events-none
                "
              >
                <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                name="mobile-search-candidate"
                id="mobile-search-candidate"
                class="
                  focus:ring-blue-500
                  focus:border-blue-500
                  block
                  w-full
                  rounded-none rounded-l-md
                  pl-10
                  sm:hidden
                  border-gray-300
                "
                placeholder="Search"
              />
              <input
                type="text"
                name="desktop-search-candidate"
                id="desktop-search-candidate"
                class="
                  hidden
                  focus:ring-blue-500
                  focus:border-blue-500
                  w-full
                  rounded-none rounded-l-md
                  pl-10
                  sm:block
                  sm:text-sm
                  border-gray-300
                "
                placeholder="Search products"
              />
            </div>
            <button
              type="button"
              class="
                -ml-px
                relative
                inline-flex
                items-center
                px-4
                py-2
                border border-gray-300
                text-sm
                font-medium
                rounded-r-md
                text-gray-700
                bg-gray-50
                hover:bg-gray-100
                focus:outline-none
                focus:ring-1 focus:ring-blue-500
                focus:border-blue-500
              "
            >
              <SortAscendingIcon
                class="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span class="ml-2">Sort</span>
              <ChevronDownIcon
                class="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>

      <div
        class="
          -mx-px
          border-l border-gray-200
          grid grid-cols-2
          sm:mx-0
          md:grid-cols-3
          lg:grid-cols-4
        "
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative p-4 border-r border-b border-gray-200 sm:p-6"
        >
          <div
            class="
              rounded-lg
              overflow-hidden
              bg-gray-200
              aspect-w-1 aspect-h-1
              group-hover:opacity-75
            "
          >
            <img
              :src="product.imageSrc"
              :alt="product.imageAlt"
              class="w-full h-full object-center object-cover"
            />
            <!-- <div
              class="
                absolute
                top-0
                inset-x-0
                h-64
                rounded-lg
                p-4
                flex
                items-end
                justify-end
                overflow-hidden
              "
            >
              <div
                aria-hidden="true"
                class="absolute inset-x-0 bottom-0 h-36"
              />
              <p
                v-if="product.airlines"
                class="
                  relative
                  text-lg
                  font-semibold
                  text-black
                  bg-blue-400
                  p-1
                  rounded-md
                "
              >
                <PaperAirplaneIcon
                  class="h-5 w-5 text-gray-100"
                  aria-hidden="true"
                />
              </p>
              <p
                v-else
                class="
                  relative
                  text-lg
                  font-semibold
                  text-black
                  bg-red-400
                  p-1
                  rounded-md
                "
              >
                <UserGroupIcon
                  class="h-5 w-5 text-gray-100"
                  aria-hidden="true"
                />
              </p>
            </div> -->

            <div
              v-if="product.sold"
              class="
                absolute
                top-0
                inset-x-0
                rounded-lg
                p-4
                flex
                items-start
                justify-start
                overflow-hidden
              "
            >
              <div
                aria-hidden="true"
                class="absolute inset-x-0 bottom-0 h-36"
              />

              <span
                class="
                  inline-flex
                  items-center
                  px-3
                  py-0.5
                  rounded
                  text-xs
                  font-medium
                  bg-red-200
                  text-red-800
                "
              >
                Sold {{ companyName }}
              </span>
            </div>
          </div>
          <div class="pt-10 pb-4 text-center">
            <h3 class="text-sm font-medium text-gray-900">
              <a :href="product.href">
                <span aria-hidden="true" class="absolute inset-0" />
                {{ product.name }}
              </a>
            </h3>

            <div class="mt-2">
              <a
                :href="product.href"
                class="
                  relative
                  flex
                  bg-gray-100
                  border border-transparent
                  rounded-md
                  py-2
                  px-8
                  items-center
                  justify-center
                  text-sm
                  font-medium
                  text-gray-900
                  hover:bg-gray-200
                "
              >
                Details
                <span class="sr-only">, {{ product.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer-component></footer-component>
</template>

<script>
import {
  StarIcon,
  ChevronDownIcon,
  SearchIcon,
  SortAscendingIcon,
  PaperAirplaneIcon,
  UserGroupIcon,
} from "@heroicons/vue/solid";
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import HeaderBannerComponent from "@/components/HeaderBannerComponent";

const products = [
  {
    id: 1,
    name: "Organize Basic Set (Walnut)",
    price: "$149",
    sold: false,
    airlines: true,
    imageSrc:
      "https://www.145summitatsea.com/summitImage/Det_8894_1628514377.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 2,
    name: "Organize Pen Holder",
    price: "$15",
    sold: false,
    airlines: false,
    imageSrc:
      "https://www.145summitatsea.com/summitImage/Det_2294_1628514541.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 3,
    name: "Organize Sticky Note Holder",
    price: "$15",
    sold: false,
    airlines: true,
    imageSrc:
      "https://www.145summitatsea.com/summitImage/Det_6310_1628514567.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 4,
    name: "Organize Phone Holder",
    price: "$15",
    sold: false,
    airlines: true,
    imageSrc:
      "https://www.145summitatsea.com/summitImage/Det_6332_1628514601.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 5,
    name: "Organize Phone Holder",
    price: "$15",
    sold: false,
    airlines: true,
    imageSrc:
      "https://www.145summitatsea.com/summitImage/Det_4096_1628514637.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 6,
    name: "Organize Phone Holder",
    price: "$15",
    sold: false,
    airlines: true,
    imageSrc:
      "https://www.145summitatsea.com/summitImage/Det_5112_1628514673.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 7,
    name: "Organize Phone Holder",
    price: "$15",
    sold: false,
    airlines: false,
    imageSrc:
      "https://www.145summitatsea.com/summitImage/Det_3819_1628514729.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 8,
    name: "Organize Phone Holder",
    price: "$15",
    sold: false,
    airlines: false,
    imageSrc:
      "https://www.145summitatsea.com/summitImage/Det_3870_1628514768.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 9,
    name: "Organize Phone Holder",
    price: "$15",
    sold: false,
    airlines: false,
    imageSrc:
      "https://www.145summitatsea.com/summitImage/Det_2549_1630333473.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 10,
    name: "Organize Phone Holder",
    price: "$15",
    sold: false,
    airlines: true,
    imageSrc:
      "https://www.145summitatsea.com/summitImage/Det_9587_1628516540.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 11,
    name: "Organize Phone Holder",
    price: "$15",
    sold: false,
    airlines: false,
    imageSrc:
      "https://www.145summitatsea.com/summitImage/Det_6308_1628516561.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 12,
    name: "Organize Phone Holder",
    price: "$15",
    sold: false,
    airlines: true,
    imageSrc:
      "https://www.145summitatsea.com/summitImage/Det_9989_1628516577.jpg",
    imageAlt: "TODO",
    href: "#",
  },
];

export default {
  data() {
    return {
      showBanner: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showBanner = true;
    }, 3000);
  },
  components: {
    StarIcon,
    FooterComponent,
    HeaderComponent,
    ChevronDownIcon,
    SearchIcon,
    SortAscendingIcon,
    PaperAirplaneIcon,
    UserGroupIcon,
    HeaderBannerComponent,
  },
  setup() {
    return {
      products,
    };
  },
};
</script>
