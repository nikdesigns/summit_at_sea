<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="min-h-screen bg-white">
    <main>
      <div>
        <!-- Hero card -->
        <div class="relative">
          <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div class="max-w-screen mx-auto sm:px-6 lg:px-8">
            <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div class="absolute inset-0">
                <img
                  class="h-full w-full object-cover bg-blend-multiply"
                  src="https://www.145summitatsea.com/assets/img/Untitled-6.jpg"
                  alt="People working on laptops"
                />
                <div
                  class="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-blue-600
                    backdrop-filter backdrop-brightness-110
                  "
                />
              </div>
              <div
                class="relative px-4 py-16 sm:px-6 sm:py-14 lg:py-20 lg:px-8"
              >
                <p
                  class="
                    text-center text-2xl
                    font-light
                    tracking-tight
                    sm:text-2xl
                    lg:text-2xl
                    font-slider
                  "
                >
                  <span class="font-slider block text-white mb-4"
                    >The145 Presents</span
                  >
                </p>
                <h6
                  class="
                    text-center text-4xl
                    font-black
                    tracking-tight
                    sm:text-xs
                    lg:text-6xl
                    font-sans
                  "
                >
                  <span class="block text-white">Summit At Sea.</span>
                </h6>
                <p
                  class="
                    mt-6
                    max-w-lg
                    mx-auto
                    text-center text-2xl text-white
                    sm:max-w-3xl
                    font-slider
                  "
                >
                  <span class="block text-white">August 4-8, 2022</span>
                  <span class="block text-white">
                    Port Canaveral, FL to Cozumel Mexico</span
                  >
                </p>
                <p
                  class="
                    mt-6
                    max-w-lg
                    mx-auto
                    text-center text-4xl text-white
                    sm:max-w-3xl
                    m-0
                    p-0
                    font-slider
                  "
                >
                  3 Days. 50 Airlines. All Inclusive
                </p>

                <div
                  class="
                    space-y-4
                    sm:space-y-0
                    sm:mx-auto
                    flex
                    justify-center
                    pt-8
                  "
                >
                  <a
                    href="#"
                    class="
                      px-4
                      py-3
                      border border-transparent
                      text-base
                      font-medium
                      rounded-md
                      shadow-sm
                      text-white
                      bg-green-500 bg-opacity-90
                      hover:bg-opacity-100
                      sm:px-8
                    "
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Logo cloud -->
        <div class="bg-gray-100">
          <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <p
              class="
                text-center text-sm
                font-semibold
                uppercase
                text-gray-500
                tracking-wide
              "
            >
              145 Summit at sea sponsors:
            </p>
            <div
              class="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5"
            >
              <div
                class="
                  col-span-1
                  flex
                  justify-center
                  md:col-span-2
                  lg:col-span-1
                "
              >
                <img
                  class="h-12"
                  src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                  alt="Tuple"
                />
              </div>
              <div
                class="
                  col-span-1
                  flex
                  justify-center
                  md:col-span-2
                  lg:col-span-1
                "
              >
                <img
                  class="h-12"
                  src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                  alt="Mirage"
                />
              </div>
              <div
                class="
                  col-span-1
                  flex
                  justify-center
                  md:col-span-2
                  lg:col-span-1
                "
              >
                <img
                  class="h-12"
                  src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                  alt="StaticKit"
                />
              </div>
              <div
                class="
                  col-span-1
                  flex
                  justify-center
                  md:col-span-2 md:col-start-2
                  lg:col-span-1
                "
              >
                <img
                  class="h-12"
                  src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                  alt="Transistor"
                />
              </div>
              <div
                class="
                  col-span-2
                  flex
                  justify-center
                  md:col-span-2 md:col-start-4
                  lg:col-span-1
                "
              >
                <img
                  class="h-12"
                  src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                  alt="Workcation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- More main page content here... -->
    </main>
  </div>
</template>

<script>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";

const solutions = [
  {
    name: "Inbox",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "Messaging",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: AnnotationIcon,
  },
  {
    name: "Live Chat",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ChatAlt2Icon,
  },
  {
    name: "Knowledge Base",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
];

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      solutions,
    };
  },
};
</script>