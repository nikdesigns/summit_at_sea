<template>
  <header-component></header-component>
  <div class="bg-white">
    <div
      class="
        max-w-2xl
        mx-auto
        py-16
        px-4
        sm:py-12
        sm:px-6
        lg:max-w-7xl
        lg:px-8
        lg:grid lg:grid-cols-2
        lg:gap-x-8
      "
    >
      <!-- Product details -->
      <div class="lg:max-w-lg lg:self-end">
        <nav aria-label="Breadcrumb">
          <ol role="list" class="flex items-center space-x-2">
            <li
              v-for="(breadcrumb, breadcrumbIdx) in product.breadcrumbs"
              :key="breadcrumb.id"
            >
              <div class="flex items-center text-sm">
                <a
                  :href="breadcrumb.href"
                  class="font-medium text-gray-500 hover:text-gray-900"
                >
                  {{ breadcrumb.name }}
                </a>
                <svg
                  v-if="breadcrumbIdx !== product.breadcrumbs.length - 1"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  aria-hidden="true"
                  class="ml-2 flex-shrink-0 h-5 w-5 text-gray-300"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
              </div>
            </li>
          </ol>
        </nav>

        <div class="mt-4">
          <h1
            class="
              text-3xl
              font-extrabold
              tracking-tight
              text-gray-900
              sm:text-4xl
            "
          >
            {{ product.name }}
          </h1>
        </div>

        <section aria-labelledby="information-heading" class="mt-4">
          <h2 id="information-heading" class="sr-only">Product information</h2>

          <!-- <div class="flex items-center">
            <p class="text-lg text-gray-900 sm:text-xl">{{ product.price }}</p>

            <div class="ml-4 pl-4 border-l border-gray-300">
              <h2 class="sr-only">Reviews</h2>
              <div class="flex items-center">
                <div>
                  <div class="flex items-center">
                    <StarIcon
                      v-for="rating in [0, 1, 2, 3, 4]"
                      :key="rating"
                      :class="[
                        reviews.average > rating
                          ? 'text-yellow-400'
                          : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0',
                      ]"
                      aria-hidden="true"
                    />
                  </div>
                  <p class="sr-only">{{ reviews.average }} out of 5 stars</p>
                </div>
                <p class="ml-2 text-sm text-gray-500">
                  {{ reviews.totalCount }} reviews
                </p>
              </div>
            </div>
          </div> -->

          <div class="mt-4 space-y-6">
            <p class="text-base text-gray-500">{{ product.description }}</p>
          </div>
          <div class="mt-4">
            <a
              href="#"
              class="
                group
                inline-flex
                text-sm text-gray-500
                hover:text-gray-700
              "
            >
              <span>Sponsorship also Includes:</span>
              <ShieldCheckIcon
                class="
                  flex-shrink-0
                  ml-2
                  h-5
                  w-5
                  text-gray-400
                  group-hover:text-gray-500
                "
                aria-hidden="true"
              />
            </a>
          </div>

          <div class="mt-6 flex items-center">
            <CheckIcon
              class="flex-shrink-0 w-5 h-5 text-green-500"
              aria-hidden="true"
            />
            <p class="ml-2 text-sm text-gray-500 block">
              Your company logo prominently displayed on either side of the
              podium.
            </p>
          </div>
          <div class="mt-2 flex items-center">
            <CheckIcon
              class="flex-shrink-0 w-5 h-5 text-green-500"
              aria-hidden="true"
            />
            <p class="ml-2 text-sm text-gray-500 block">
              A full-page ad in the Conference Program.
            </p>
          </div>
          <div class="mt-2 flex items-center">
            <CheckIcon
              class="flex-shrink-0 w-5 h-5 text-green-500"
              aria-hidden="true"
            />
            <p class="ml-2 text-sm text-gray-500 block">
              Company Logo on the 145 Summit at Sea website under Sponsors.
            </p>
          </div>
          <div class="mt-2 flex items-center">
            <CheckIcon
              class="flex-shrink-0 w-5 h-5 text-green-500"
              aria-hidden="true"
            />
            <p class="ml-2 text-sm text-gray-500 block">
              Right to use the 145 Summit at Sea logo in your marketing
              materials and via your corporate website.
            </p>
          </div>
        </section>
      </div>

      <!-- Product image -->
      <div class="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-start">
        <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
          <img
            :src="product.imageSrc"
            :alt="product.imageAlt"
            class="w-full h-full object-center object-cover"
          />
        </div>
      </div>

      <!-- Product form -->
      <div
        class="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start"
      >
        <section aria-labelledby="options-heading">
          <h2 id="options-heading" class="sr-only">Product options</h2>

          <form>
            <div class="sm:flex sm:justify-between">
              <!-- Size selector -->
              <RadioGroup v-model="selectedDay">
                <RadioGroupLabel
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Day: 1
                </RadioGroupLabel>
                <div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <RadioGroupOption
                    as="template"
                    v-for="one in product.dayOne"
                    :key="one.name"
                    :value="one"
                    v-slot="{ active, checked }"
                  >
                    <div
                      :class="[
                        active ? 'ring-2 ring-blue-500' : '',
                        'relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none',
                      ]"
                    >
                      <RadioGroupLabel
                        as="p"
                        class="text-base font-medium text-gray-900"
                      >
                        {{ one.name }}
                      </RadioGroupLabel>
                      <RadioGroupDescription
                        as="p"
                        class="mt-1 text-sm text-gray-500"
                      >
                        {{ one.description }}
                      </RadioGroupDescription>
                      <div
                        :class="[
                          active ? 'border' : 'border-2',
                          checked ? 'border-blue-500' : 'border-transparent',
                          'absolute -inset-px rounded-lg pointer-events-none',
                        ]"
                        aria-hidden="true"
                      />
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>

            <div class="sm:flex sm:justify-between mt-5">
              <RadioGroup v-model="selectedDayTwo">
                <RadioGroupLabel
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Day: 2
                </RadioGroupLabel>
                <div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <RadioGroupOption
                    as="template"
                    v-for="two in product.dayTwo"
                    :key="two.name"
                    :value="two"
                    v-slot="{ active, checked }"
                  >
                    <div
                      :class="[
                        active ? 'ring-2 ring-blue-500' : '',
                        'relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none',
                      ]"
                    >
                      <RadioGroupLabel
                        as="p"
                        class="text-base font-medium text-gray-900"
                      >
                        {{ two.name }}
                      </RadioGroupLabel>
                      <RadioGroupDescription
                        as="p"
                        class="mt-1 text-sm text-gray-500"
                      >
                        {{ two.description }}
                      </RadioGroupDescription>
                      <div
                        :class="[
                          active ? 'border' : 'border-2',
                          checked ? 'border-blue-500' : 'border-transparent',
                          'absolute -inset-px rounded-lg pointer-events-none',
                        ]"
                        aria-hidden="true"
                      />
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>

            <div class="mt-10">
              <button
                @click.prevent="onSubmit()"
                type="submit"
                class="
                  w-11/12
                  bg-blue-600
                  border border-transparent
                  rounded-md
                  py-3
                  px-8
                  flex
                  items-center
                  justify-center
                  text-base
                  font-medium
                  text-white
                  hover:bg-blue-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-offset-gray-50
                  focus:ring-blue-500
                "
              >
                Add to cart
              </button>
            </div>
          </form>
        </section>
        <NotificationComponent v-if="showSubmit" />
      </div>
    </div>
  </div>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import NotificationComponent from "@/components/NotificationComponent";
import { ref } from "vue";
import {
  CheckIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "@heroicons/vue/solid";
import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
} from "@headlessui/vue";
import { ShieldCheckIcon } from "@heroicons/vue/outline";

const product = {
  name: "Conference Room Sponsorships",
  href: "#",
  price: "$220",
  description:
    "Grab the attention of the airline attendees by sponsoring one of the Conference Center Meeting Rooms during the Shop Presentation events. The Conference Center will be divided into four rooms of equal size, with 50 airline representatives in each of the four meeting rooms. Your company logo will be prominently displayed on a monitor inside one of the four meeting rooms for one day of Shop Presentations.",
  imageSrc: "https://www.145summitatsea.com/images/staticsponsorship.jpg",
  imageAlt: "Conference Room Sponsorships",
  breadcrumbs: [
    { id: 1, name: "Sponsorships", href: "#" },
    { id: 2, name: "Static Sponsorships", href: "#" },
  ],
  dayOne: [
    { name: "$2000", description: "Alaska Conference Room" },
    { name: "$2000", description: "Caribbean Conference Room" },
    { name: "$2000", description: "Bermuda Conference Room" },
    { name: "$2000", description: "Bermuda Conference Room" },
  ],
  dayTwo: [
    { name: "$2000", description: "Alaska Conference Room" },
    { name: "$2000", description: "Caribbean Conference Room" },
    { name: "$2000", description: "Bermuda Conference Room" },
    { name: "$2000", description: "Bermuda Conference Room" },
  ],
};
const reviews = { average: 4, totalCount: 1624 };

export default {
  data() {
    return {
      showSubmit: false,
    };
  },
  methods: {
    onSubmit() {
      this.showSubmit = true;
      setTimeout(() => {
        this.showSubmit = false;
      }, 3000);
    },
  },
  components: {
    RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption,
    CheckIcon,
    QuestionMarkCircleIcon,
    ShieldCheckIcon,
    StarIcon,
    FooterComponent,
    HeaderComponent,
    NotificationComponent,
  },
  setup() {
    const selectedDay = ref(product.dayOne[null]);
    const selectedDayTwo = ref(product.dayTwo[null]);

    return {
      product,
      reviews,
      selectedDay,
      selectedDayTwo,
    };
  },
};
</script>