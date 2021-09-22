<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <LoginModalComponent v-if="showLoginModal" />
  <Popover class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="
          flex
          justify-between
          items-center
          border-b-2 border-gray-100
          py-6
          md:justify-start
          md:space-x-10
        "
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="/">
            <span class="sr-only">Summit at Sea</span>
            <img
              class="h-16 w-auto sm:h-12"
              src="https://www.145summitatsea.com/assets/img/summit_logo_big.png"
              alt=""
            />
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton
            class="
              bg-white
              rounded-md
              p-2
              inline-flex
              items-center
              justify-center
              text-gray-400
              hover:text-gray-500
              hover:bg-gray-100
              focus:outline-none
              focus:ring-2 focus:ring-inset focus:ring-blue-500
            "
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[
                open ? 'text-gray-900' : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none ',
              ]"
            >
              <span>Summit</span>
              <ChevronDownIcon
                :class="[
                  open ? 'text-gray-600' : 'text-gray-400',
                  'ml-2 h-5 w-5 group-hover:text-gray-500',
                ]"
                aria-hidden="true"
              />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel
                class="
                  absolute
                  z-10
                  -ml-4
                  mt-3
                  transform
                  px-2
                  w-screen
                  max-w-md
                  sm:px-0
                  lg:ml-0
                  lg:left-1/2
                  lg:-translate-x-1/2
                "
              >
                <div
                  class="
                    rounded-lg
                    shadow-lg
                    ring-1 ring-black ring-opacity-5
                    overflow-hidden
                  "
                >
                  <div
                    class="
                      relative
                      grid
                      gap-6
                      bg-white
                      px-5
                      py-6
                      sm:gap-8
                      sm:p-8
                    "
                  >
                    <a
                      v-for="item in solutions"
                      :key="item.name"
                      :href="item.href"
                      class="
                        -m-3
                        p-3
                        flex
                        items-start
                        rounded-lg
                        hover:bg-gray-50
                      "
                    >
                      <component
                        :is="item.icon"
                        class="flex-shrink-0 h-6 w-6 text-blue-600"
                        aria-hidden="true"
                      />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ item.description }}
                        </p>
                      </div>
                    </a>
                  </div>
                  <!-- <div
                    class="
                      px-5
                      py-5
                      bg-gray-50
                      space-y-6
                      sm:flex
                      sm:space-y-0 sm:space-x-10
                      sm:px-8
                    "
                  >
                    <div
                      v-for="item in callsToAction"
                      :key="item.name"
                      class="flow-root"
                    >
                      <a
                        :href="item.href"
                        class="
                          -m-3
                          p-3
                          flex
                          items-center
                          rounded-md
                          text-base
                          font-medium
                          text-gray-900
                          hover:bg-gray-100
                        "
                      >
                        <component
                          :is="item.icon"
                          class="flex-shrink-0 h-6 w-6 text-gray-400"
                          aria-hidden="true"
                        />
                        <span class="ml-3">{{ item.name }}</span>
                      </a>
                    </div>
                  </div> -->
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <a
            href="/staterooms"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            State rooms
          </a>

          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[
                open ? 'text-gray-900' : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none ',
              ]"
            >
              <span>Sponsorships</span>
              <ChevronDownIcon
                :class="[
                  open ? 'text-gray-600' : 'text-gray-400',
                  'ml-2 h-5 w-5 group-hover:text-gray-500',
                ]"
                aria-hidden="true"
              />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel
                class="
                  absolute
                  z-10
                  left-1/2
                  transform
                  -translate-x-1/2
                  mt-3
                  px-2
                  w-screen
                  max-w-md
                  sm:px-0
                "
              >
                <div
                  class="
                    rounded-lg
                    shadow-lg
                    ring-1 ring-black ring-opacity-5
                    overflow-hidden
                  "
                >
                  <div
                    class="
                      relative
                      grid
                      gap-6
                      bg-white
                      px-5
                      py-6
                      sm:gap-8
                      sm:p-8
                    "
                  >
                    <a
                      v-for="item in resources"
                      :key="item.name"
                      :href="item.href"
                      class="
                        -m-3
                        p-3
                        flex
                        items-start
                        rounded-lg
                        hover:bg-gray-50
                      "
                    >
                      <component
                        :is="item.icon"
                        class="flex-shrink-0 h-6 w-6 text-blue-600"
                        aria-hidden="true"
                      />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ item.description }}
                        </p>
                      </div>
                    </a>
                  </div>
                  <div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                    <div>
                      <h3
                        class="
                          text-sm
                          tracking-wide
                          font-medium
                          text-gray-500
                          uppercase
                        "
                      >
                        Aviation Scholarship
                      </h3>
                      <ul role="list" class="mt-4 space-y-4">
                        <li
                          v-for="post in recentPosts"
                          :key="post.id"
                          class="text-base truncate"
                        >
                          <a
                            :href="post.href"
                            class="
                              font-medium
                              text-gray-900
                              hover:text-gray-700
                            "
                          >
                            {{ post.name }}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="mt-5 text-sm">
                      <a
                        href="#"
                        class="font-medium text-blue-600 hover:text-blue-500"
                      >
                        Know more
                        <span aria-hidden="true">&rarr;</span></a
                      >
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
          <a
            href="/contact-us"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Contact us
          </a>
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[
                open ? 'text-gray-900' : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none ',
              ]"
            >
              <span>Policies</span>
              <ChevronDownIcon
                :class="[
                  open ? 'text-gray-600' : 'text-gray-400',
                  'ml-2 h-5 w-5 group-hover:text-gray-500',
                ]"
                aria-hidden="true"
              />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel
                class="
                  absolute
                  z-10
                  left-1/2
                  transform
                  -translate-x-1/2
                  mt-3
                  px-2
                  w-screen
                  max-w-md
                  sm:px-0
                "
              >
                <div
                  class="
                    rounded-lg
                    shadow-lg
                    ring-1 ring-black ring-opacity-5
                    overflow-hidden
                  "
                >
                  <div
                    class="
                      relative
                      grid
                      gap-6
                      bg-white
                      px-5
                      py-6
                      sm:gap-8
                      sm:p-8
                    "
                  >
                    <a
                      v-for="item in policies"
                      :key="item.name"
                      :href="item.href"
                      class="
                        -m-3
                        py-1
                        px-3
                        flex
                        items-start
                        rounded-lg
                        hover:bg-gray-50
                      "
                    >
                      <component
                        :is="item.icon"
                        class="flex-shrink-0 h-6 w-6 text-blue-600"
                        aria-hidden="true"
                      />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ item.description }}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </PopoverGroup>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <div class="" v-if="!user">
            <a
              @click="showLoginModal = !showLoginModal"
              href="#"
              class="
                whitespace-nowrap
                text-base
                font-medium
                text-gray-500
                hover:text-gray-900
              "
            >
              Sign in
            </a>

            <a
              href="/register"
              class="
                ml-8
                whitespace-nowrap
                inline-flex
                items-center
                justify-center
                px-4
                py-2
                border border-transparent
                rounded-md
                shadow-sm
                text-base
                font-medium
                text-white
                bg-blue-600
                hover:bg-blue-700
              "
            >
              Sign up
            </a>
          </div>
          <div
            v-else
            class="hidden md:flex items-center justify-end md:flex-1 lg:w-0"
          >
            <div class="flex-1 flex items-center justify-end">
              <div class="flex items-center lg:ml-8">
                <div class="flex space-x-8">
                  <div class="flex">
                    <Menu as="div" class="relative inline-block text-left">
                      <div>
                        <MenuButton class="flex justify-center">
                          <a
                            href="#"
                            class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span class="sr-only">Account</span>
                            <UserIcon class="w-6 h-6" aria-hidden="true" />
                          </a>
                        </MenuButton>
                      </div>

                      <transition
                        enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95"
                        enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95"
                      >
                        <MenuItems
                          class="
                            origin-top-right
                            absolute
                            right-0
                            mt-2
                            w-56
                            rounded-md
                            shadow-lg
                            bg-white
                            ring-1 ring-black ring-opacity-5
                            divide-y divide-gray-100
                            focus:outline-none
                            z-10
                          "
                        >
                          <div class="px-4 py-3">
                            <p class="text-sm">Signed in as</p>
                            <p
                              class="text-sm font-medium text-gray-900 truncate"
                            >
                              tom@example.com
                            </p>
                          </div>
                          <div class="py-1">
                            <MenuItem v-slot="{ active }">
                              <a
                                href="#"
                                :class="[
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm',
                                ]"
                                >Account settings</a
                              >
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                              <a
                                href="#"
                                :class="[
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm',
                                ]"
                                >Support</a
                              >
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                              <a
                                href="#"
                                :class="[
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm',
                                ]"
                                >License</a
                              >
                            </MenuItem>
                          </div>
                          <div class="py-1">
                            <form method="POST" action="#">
                              <MenuItem v-slot="{ active }">
                                <button
                                  type="submit"
                                  :class="[
                                    active
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'text-gray-700',
                                    'block w-full text-left px-4 py-2 text-sm',
                                  ]"
                                >
                                  Sign out
                                </button>
                              </MenuItem>
                            </form>
                          </div>
                        </MenuItems>
                      </transition>
                    </Menu>
                  </div>
                </div>

                <span
                  class="mx-4 h-6 w-px bg-gray-200 lg:mx-6"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div class="flow-root">
            <a href="#" class="group -m-2 p-2 flex items-center">
              <ShoppingBagIcon
                :class="[!user ? 'ml-5' : '']"
                class="
                  flex-shrink-0
                  h-6
                  w-6
                  text-gray-400
                  group-hover:text-gray-500
                "
                aria-hidden="true"
              />
              <span
                class="
                  ml-2
                  text-sm
                  font-medium
                  text-gray-700
                  group-hover:text-gray-800
                "
                >0</span
              >
              <span class="sr-only">items in cart, view bag</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="
          absolute
          z-50
          top-0
          inset-x-0
          p-2
          transition
          transform
          origin-top-right
          md:hidden
        "
      >
        <div
          class="
            rounded-lg
            shadow-lg
            ring-1 ring-black ring-opacity-5
            bg-white
            divide-y-2 divide-gray-50
          "
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="h-10 w-auto"
                  src="https://www.145summitatsea.com/assets/img/summit_logo_big.png"
                  alt="Workflow"
                />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="
                    bg-white
                    rounded-md
                    p-2
                    inline-flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-gray-500
                    hover:bg-gray-100
                    focus:outline-none
                    focus:ring-2 focus:ring-inset focus:ring-blue-500
                  "
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a
                  v-for="item in solutions"
                  :key="item.name"
                  :href="item.href"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <component
                    :is="item.icon"
                    class="flex-shrink-0 h-6 w-6 text-blue-600"
                    aria-hidden="true"
                  />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ item.name }}
                  </span>
                </a>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <a
                href="/state-rooms"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                State rooms
              </a>

              <a
                href="/contact-us"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Contact us
              </a>
              <a
                v-for="item in resources"
                :key="item.name"
                :href="item.href"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                {{ item.name }}
              </a>
            </div>
            <div>
              <a
                href="#"
                class="
                  w-full
                  flex
                  items-center
                  justify-center
                  px-4
                  py-2
                  border border-transparent
                  rounded-md
                  shadow-sm
                  text-base
                  font-medium
                  text-white
                  bg-blue-600
                  hover:bg-blue-700
                "
              >
                Sign up
              </a>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                {{ " " }}
                <a href="#" class="text-blue-600 hover:text-blue-500">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  StarIcon,
  XIcon,
  PresentationChartBarIcon,
  SparklesIcon,
  TicketIcon,
  NewspaperIcon,
  BriefcaseIcon,
  PaperAirplaneIcon,
  OfficeBuildingIcon,
  SwitchVerticalIcon,
  PresentationChartLineIcon,
  CodeIcon,
  BanIcon,
  SunIcon,
  PhotographIcon,
  UserIcon,
  ShoppingBagIcon,
} from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import LoginModalComponent from "@/components/LoginModalComponent";

const solutions = [
  {
    name: "Event Details",
    description:
      "We're hosting the conference aboard Royal Caribbean's Mariner of the Seas cruise ship",
    href: "#",
    icon: StarIcon,
  },
  {
    name: "Comparison",
    description: "145 Summit at sea vs others!",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Schedule",
    description: "You're going to love what we have planned for Summit at Sea!",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Shore Excursion",
    description: "Cozumel is ideal for unique adventures",
    href: "#",
    icon: SunIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Promo sponsorship",
    description:
      "Reach your ideal audience & generate leads using Promotional sponsorship ",
    href: "/promo-sponsorships",
    icon: NewspaperIcon,
  },
  {
    name: "Raffle sponsorship",
    description:
      "100% of the proceeds from these Raffle Sponsorships will be used to pay for a scholarship",
    href: "/raffle-sponsorships",
    icon: TicketIcon,
  },
  {
    name: "Static sponsorship",
    description:
      "Your company logo will be prominently displayed on a monitor inside one of the four meeting rooms",
    href: "/static-sponsorships",
    icon: PhotographIcon,
  },
];
const policies = [
  {
    name: "Trade show exhibit policies",
    description: "",
    href: "/trade-show-exhibit",
    icon: SwitchVerticalIcon,
  },
  {
    name: "Airline participation policy",
    description: "",
    href: "/airline-participation",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Shop presentation terms and conditions",
    description: "",
    href: "/shop-presentation-terms-and-condition",
    icon: PresentationChartLineIcon,
  },
  {
    name: "Shop participation policy",
    description: "",
    href: "/shop-participation",
    icon: OfficeBuildingIcon,
  },
  {
    name: "Code of conduct",
    description: "",
    href: "/code-of-conduct",
    icon: CodeIcon,
  },
  {
    name: "Cancellation and transfer policy",
    description: "",
    href: "/cancellation-and-transfer",
    icon: BanIcon,
  },
];
const recentPosts = [
  {
    id: 1,
    name: "Raffle Sponsorships Support Aviation Scholarship",
    href: "#",
  },
];

export default {
  data() {
    return {
      user: true,
      showLoginModal: false,
    };
  },
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
    StarIcon,
    PresentationChartBarIcon,
    CalendarIcon,
    SparklesIcon,
    TicketIcon,
    NewspaperIcon,
    BriefcaseIcon,
    PaperAirplaneIcon,
    OfficeBuildingIcon,
    SwitchVerticalIcon,
    PresentationChartLineIcon,
    CodeIcon,
    BanIcon,
    SunIcon,
    PhotographIcon,
    UserIcon,
    ShoppingBagIcon,
    LoginModalComponent,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
  setup() {
    return {
      solutions,
      callsToAction,
      resources,
      recentPosts,
      policies,
    };
  },
};
</script>