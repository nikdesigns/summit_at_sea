<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <transition
    enter-active-class="transform ease-out duration-300 transition"
    enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
    leave-active-class="transition ease-in duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="show" class="bg-blue-600">
      <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
            <span class="flex rounded-lg bg-blue-800">
              <img
                src="https://www.145summitatsea.com/images/Noreida1.jpg"
                class="h-12 w-12 object-cover rounded-md"
                aria-hidden="true"
              />
            </span>
            <p class="ml-3 font-medium text-white truncate">
              <span class="block">
                Raffle Sponsorships Support Aviation Scholarship
              </span>
              <span class="block">
                100% of the proceeds from these "Raffle Sponsorships" will be
                used to pay for a scholarship.
              </span>
            </p>
          </div>
          <div
            class="
              order-3
              mt-2
              flex-shrink-0
              w-full
              sm:order-2
              sm:mt-0
              sm:w-auto
            "
          >
            <a
              href="#"
              class="
                flex
                items-center
                justify-center
                px-4
                py-2
                border border-transparent
                rounded-md
                shadow-sm
                text-sm
                font-medium
                text-blue-600
                bg-white
                hover:bg-blue-50
              "
            >
              About the candidate
            </a>
          </div>
          <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              @click="show = false"
              type="button"
              class="
                -mr-1
                flex
                p-2
                rounded-md
                hover:bg-blue-500
                focus:outline-none
                focus:ring-2 focus:ring-white
                sm:-mr-2
              "
            >
              <span class="sr-only">Dismiss</span>
              <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref } from "vue";
import { SpeakerphoneIcon, XIcon } from "@heroicons/vue/outline";

export default {
  components: {
    SpeakerphoneIcon,
    XIcon,
  },
  setup() {
    const show = ref(true);

    return {
      show,
    };
  },
};
</script>