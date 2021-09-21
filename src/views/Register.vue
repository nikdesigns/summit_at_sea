<template>
  <header-component></header-component>
  <div class="relative bg-gray-100 py-16 sm:py-6 lg:py-8">
    <div
      class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
    >
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <aside
          class="
            py-6
            px-2
            sm:px-6
            lg:py-0
            lg:px-0
            lg:col-span-3
            bg-white
            shadow
            sm:rounded-md
            sm:overflow-hidden
          "
        >
          <nav class="flex-1 px-2 space-y- pt-8" aria-label="Sidebar">
            <template v-for="item in navigation" :key="item.name">
              <div v-if="!item.children">
                <a
                  href="#"
                  :class="[
                    item.current
                      ? 'bg-gray-100 text-gray-900'
                      : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md',
                  ]"
                >
                  <component
                    :is="item.icon"
                    :class="[
                      item.current
                        ? 'text-gray-500'
                        : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 flex-shrink-0 h-6 w-6',
                    ]"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </a>
              </div>
              <Disclosure as="div" v-else class="space-y-1" v-slot="{ open }">
                <DisclosureButton
                  :class="[
                    item.current
                      ? 'bg-gray-100 text-gray-900'
                      : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md ',
                  ]"
                >
                  <component
                    :is="item.icon"
                    class="
                      mr-3
                      flex-shrink-0
                      h-6
                      w-6
                      text-gray-400
                      group-hover:text-gray-500
                    "
                    aria-hidden="true"
                  />
                  <span class="flex-1">
                    {{ item.name }}
                  </span>
                  <svg
                    :class="[
                      open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                      'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150',
                    ]"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                  </svg>
                </DisclosureButton>
                <DisclosurePanel class="space-y-1">
                  <a
                    v-for="subItem in item.children"
                    :key="subItem.name"
                    :href="subItem.href"
                    class="
                      group
                      w-full
                      flex
                      items-center
                      pl-11
                      pr-2
                      py-2
                      text-sm
                      font-medium
                      text-gray-600
                      rounded-md
                      hover:text-gray-900
                      hover:bg-gray-50
                    "
                  >
                    {{ subItem.name }}
                  </a>
                </DisclosurePanel>
              </Disclosure>
            </template>
          </nav>
        </aside>
        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
          <form v-on:submit.prevent action="#" method="POST">
            <div
              v-if="navigation[0].current"
              class="shadow sm:rounded-md sm:overflow-hidden"
            >
              <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
                <div>
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Personal Information
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">
                    Use a permanent address where you can recieve mail.
                  </p>
                </div>

                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-4">
                    <label
                      for="company-name"
                      class="block text-sm font-medium text-gray-700"
                      >Company name</label
                    >
                    <input
                      type="text"
                      name="company-name"
                      id="company-name"
                      autocomplete="organization"
                      class="
                        mt-1
                        block
                        w-full
                        border border-gray-300
                        rounded-md
                        shadow-sm
                        py-2
                        px-3
                        focus:outline-none
                        focus:ring-blue-500
                        focus:border-blue-500
                        sm:text-sm
                      "
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="first-name"
                      class="block text-sm font-medium text-gray-700"
                      >First name</label
                    >
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="
                        mt-1
                        block
                        w-full
                        border border-gray-300
                        rounded-md
                        shadow-sm
                        py-2
                        px-3
                        focus:outline-none
                        focus:ring-blue-500
                        focus:border-blue-500
                        sm:text-sm
                      "
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      class="block text-sm font-medium text-gray-700"
                      >Last name</label
                    >
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autocomplete="family-name"
                      class="
                        mt-1
                        block
                        w-full
                        border border-gray-300
                        rounded-md
                        shadow-sm
                        py-2
                        px-3
                        focus:outline-none
                        focus:ring-blue-500
                        focus:border-blue-500
                        sm:text-sm
                      "
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-4 lg:col-span-4">
                    <label
                      for="email-add"
                      class="block text-sm font-medium text-gray-700"
                      >Email address</label
                    >
                    <input
                      type="text"
                      name="email-add"
                      id="email-add"
                      autocomplete="email"
                      class="
                        mt-1
                        block
                        w-full
                        border border-gray-300
                        rounded-md
                        shadow-sm
                        py-2
                        px-3
                        focus:outline-none
                        focus:ring-blue-500
                        focus:border-blue-500
                        sm:text-sm
                      "
                    />
                  </div>

                  <div class="col-span-3 sm:col-span-3">
                    <label
                      for="password"
                      class="block text-sm font-medium text-gray-700"
                      >Password</label
                    >
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autocomplete="new-password"
                      class="
                        mt-1
                        block
                        w-full
                        border border-gray-300
                        rounded-md
                        shadow-sm
                        py-2
                        px-3
                        focus:outline-none
                        focus:ring-blue-500
                        focus:border-blue-500
                        sm:text-sm
                      "
                    />
                  </div>

                  <div class="col-span-3 sm:col-span-3">
                    <label
                      for="confirm-password"
                      class="block text-sm font-medium text-gray-700"
                      >Confirm Password</label
                    >
                    <input
                      type="password"
                      name="confirm-password"
                      id="confirm-password"
                      autocomplete="new-password"
                      class="
                        mt-1
                        block
                        w-full
                        border border-gray-300
                        rounded-md
                        shadow-sm
                        py-2
                        px-3
                        focus:outline-none
                        focus:ring-blue-500
                        focus:border-blue-500
                        sm:text-sm
                      "
                    />
                  </div>

                  <div class="col-span-3 sm:col-span-6 lg:col-span-3">
                    <h2 class="text-sm font-medium text-gray-900">
                      Please select your company type
                    </h2>
                    <RadioGroup v-model="selectedCompanyType">
                      <RadioGroupLabel class="sr-only">
                        Company Type
                      </RadioGroupLabel>
                      <div
                        class="relative bg-white rounded-md -space-y-px my-2"
                      >
                        <RadioGroupOption
                          as="template"
                          v-for="(companyType, companyTypeIdx) in companyTypes"
                          :key="companyType.name"
                          :value="companyType"
                          v-slot="{ checked, active }"
                        >
                          <div
                            :class="[
                              companyTypeIdx === 0
                                ? 'rounded-tl-md rounded-tr-md'
                                : '',
                              companyTypeIdx === companyType.length - 1
                                ? 'rounded-bl-md rounded-br-md'
                                : '',
                              checked
                                ? 'bg-blue-50 border-blue-200 z-10'
                                : 'border-gray-200',
                              'relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none',
                            ]"
                          >
                            <div class="flex items-center text-sm">
                              <span
                                :class="[
                                  checked
                                    ? 'bg-blue-600 border-transparent'
                                    : 'bg-white border-gray-300',
                                  active
                                    ? 'ring-2 ring-offset-2 ring-blue-500'
                                    : '',
                                  'h-4 w-4 rounded-full border flex items-center justify-center',
                                ]"
                                aria-hidden="true"
                              >
                                <span
                                  class="rounded-full bg-white w-1.5 h-1.5"
                                />
                              </span>
                              <RadioGroupLabel
                                as="span"
                                :class="[
                                  checked ? 'text-blue-900' : 'text-gray-900',
                                  'ml-3 font-medium',
                                ]"
                                >{{ companyType.name }}</RadioGroupLabel
                              >
                            </div>
                          </div>
                        </RadioGroupOption>
                      </div>
                    </RadioGroup>
                  </div>
                  <div class="col-span-3 sm:col-span-6 lg:col-span-3">
                    <label
                      for="contact-number"
                      class="block text-sm font-medium text-gray-700"
                      >Contact Number</label
                    >
                    <input
                      type="text"
                      name="contact-number"
                      id="contact-number"
                      autocomplete="tel"
                      class="
                        mt-1
                        block
                        w-full
                        border border-gray-300
                        rounded-md
                        shadow-sm
                        py-2
                        px-3
                        focus:outline-none
                        focus:ring-blue-500
                        focus:border-blue-500
                        sm:text-sm
                      "
                    />
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  @click="nextStep()"
                  type="submit"
                  class="
                    bg-blue-600
                    border border-transparent
                    rounded-md
                    shadow-sm
                    py-2
                    px-4
                    inline-flex
                    justify-center
                    text-sm
                    font-medium
                    text-white
                    hover:bg-blue-700
                    focus:outline-none
                    focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                  "
                >
                  Next
                </button>
              </div>
            </div>

            <div
              v-if="navigation[1].current"
              class="shadow sm:rounded-md sm:overflow-hidden"
            >
              <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
                <div>
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    How many staterooms do you need?
                  </h3>
                  <!-- <p class="mt-1 text-sm text-gray-500">
                          Maximum 2 staterooms per airline.
                        </p> -->
                </div>

                <div class="">
                  <div class="mt-10">
                    <div class="flex items-center justify-between">
                      <h3 class="text-sm text-gray-900 font-medium">
                        Select number of staterooms
                      </h3>
                      <p class="text-sm font-medium text-yellow-500">
                        Maximum 2 staterooms per airline.*
                      </p>
                    </div>

                    <RadioGroup v-model="selectedRoom" class="mt-4">
                      <RadioGroupLabel class="sr-only">
                        Number of rooms
                      </RadioGroupLabel>
                      <div
                        class="
                          grid grid-cols-4
                          gap-4
                          sm:grid-cols-8
                          lg:grid-cols-4
                        "
                      >
                        <RadioGroupOption
                          as="template"
                          v-for="room in rooms"
                          :key="room.name"
                          :value="room"
                          :disabled="!room.inStock"
                          v-slot="{ active, checked }"
                        >
                          <div
                            :class="[
                              room.inStock
                                ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                              active ? 'ring-2 ring-blue-500' : '',
                              'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6',
                            ]"
                          >
                            <RadioGroupLabel as="p">
                              {{ room.name }}
                            </RadioGroupLabel>
                            <div
                              v-if="room.inStock"
                              :class="[
                                active ? 'border' : 'border-2',
                                checked
                                  ? 'border-blue-500'
                                  : 'border-transparent',
                                'absolute -inset-px rounded-md pointer-events-none',
                              ]"
                              aria-hidden="true"
                            />
                            <div
                              v-else
                              aria-hidden="true"
                              class="
                                absolute
                                -inset-px
                                rounded-md
                                border-2 border-gray-200
                                pointer-events-none
                              "
                            >
                              <svg
                                class="
                                  absolute
                                  inset-0
                                  w-full
                                  h-full
                                  text-gray-200
                                  stroke-2
                                "
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                stroke="currentColor"
                              >
                                <line
                                  x1="0"
                                  y1="100"
                                  x2="100"
                                  y2="0"
                                  vector-effect="non-scaling-stroke"
                                />
                              </svg>
                            </div>
                          </div>
                        </RadioGroupOption>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
              <div
                class="flex justify-end px-4 py-3 bg-gray-50 text-right sm:px-6"
              >
                <button
                  @click="prevStep()"
                  type="button"
                  class="
                    bg-white
                    py-2
                    px-4
                    border border-gray-300
                    rounded-md
                    shadow-sm
                    text-sm
                    font-medium
                    text-gray-700
                    hover:bg-gray-50
                    focus:outline-none
                    focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                  "
                >
                  Prev
                </button>
                <button
                  type="submit"
                  class="
                    bg-blue-600
                    border border-transparent
                    rounded-md
                    shadow-sm
                    ml-3
                    py-2
                    px-4
                    inline-flex
                    justify-center
                    text-sm
                    font-medium
                    text-white
                    hover:bg-blue-700
                    focus:outline-none
                    focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                  "
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <footer-component></footer-component>
</template>

<script>
import { ref } from "vue";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/vue/outline";

const navigation = [
  { name: "Registration", icon: HomeIcon, current: true, href: "#" },

  {
    name: "Stateroom",
    icon: FolderIcon,
    current: false,
    children: [
      { name: "Room 1", href: "#" },
      { name: "Room 2", href: "#" },
      { name: "Room 3", href: "#" },
      { name: "Room 4", href: "#" },
    ],
  },
  {
    name: "Guest Info",
    icon: CalendarIcon,
    current: false,
    children: [
      { name: "Room 1", href: "#" },
      { name: "Room 2", href: "#" },
      { name: "Room 3", href: "#" },
      { name: "Room 4", href: "#" },
    ],
  },
  {
    name: "Documents",
    icon: InboxIcon,
    current: false,
  },
  {
    name: "Reports",
    icon: ChartBarIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
];

const rooms = [
  { name: "1", inStock: true },
  { name: "2", inStock: true },
  { name: "3", inStock: false },
  { name: "4", inStock: false },
  { name: "5", inStock: false },
  { name: "6", inStock: false },
  { name: "7", inStock: false },
  { name: "8", inStock: false },
];
const companyTypes = [{ name: "Repair-Center" }, { name: "Airlines" }];

export default {
  name: "Register",
  data() {
    return {
      currentStep: 0,
    };
  },
  methods: {
    nextStep() {
      navigation[0].current++;
      console.log(navigation[0].current);
    },
    prevStep() {
      this.currentStep--;
      console.log(navigation[0].current);
    },
  },
  components: {
    HeaderComponent,
    FooterComponent,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  },
  setup() {
    const selectedCompanyType = ref(companyTypes[0]);
    const selectedRoom = ref(rooms[0]);

    return {
      navigation,
      companyTypes,
      selectedCompanyType,
      selectedRoom,
      rooms,
      companyTypes,
    };
  },
};
</script>