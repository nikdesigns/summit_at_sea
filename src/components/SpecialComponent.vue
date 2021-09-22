<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-white py-16 sm:py-24 lg:py-32">
    <div
      class="
        mx-auto
        max-w-md
        px-4
        text-center
        sm:max-w-3xl
        sm:px-6
        lg:px-8
        lg:max-w-7xl
      "
    >
      <h2
        class="text-base font-semibold tracking-wider text-blue-600 uppercase"
      >
        One of a kind
      </h2>
      <p
        class="
          mt-2
          text-3xl
          font-extrabold
          text-gray-900
          tracking-tight
          sm:text-4xl
        "
      >
        What make's it special
      </p>
      <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
        A conference like no other
      </p>
      <div class="mt-12">
        <div class="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <div v-for="feature in features" :key="feature.name" class="pt-6">
            <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span
                    class="
                      inline-flex
                      items-center
                      justify-center
                      p-3
                      bg-gray-100
                      rounded-md
                      shadow-lg
                    "
                  >
                    <component
                      :is="feature.icon"
                      class="h-6 w-6 text-gray-600"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <h3
                  class="mt-8 text-lg font-medium text-gray-900 tracking-tight"
                >
                  {{ feature.name }}
                </h3>
                <p class="mt-5 text-base text-gray-500">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  SparklesIcon,
  CalendarIcon,
  UserGroupIcon,
  ThumbUpIcon,
  WifiIcon,
  CurrencyDollarIcon,
} from "@heroicons/vue/outline";

const features = [
  {
    name: "All Inclusive",
    icon: CurrencyDollarIcon,
    description:
      "145 Summit at Sea is an all-inclusive aviation networking conference. When you register for the conference, everything on-board the ship is included: food, lodging, conference meetings and all associated activities.",
  },
  {
    name: "No More Speed Dating",
    icon: CalendarIcon,
    description:
      "Instead of presenting to one airline at a time, Summit at Sea will give you the opportunity to present to all 50 airline maintenance representatives all at once. Additionally, we've designed a mobile app for the airlines to give you immediate feedback concerning your presentation.",
  },
  {
    name: "Captive Audience",
    icon: UserGroupIcon,
    description:
      "Most conference planners struggle with how to keep attendees from leaving their event to attend competing, privately planned parties hosted by their attendees. It's virtually impossible due to the number of easily accessible venues that are usually within a short walk or drive from the conference center. Summit on the Sea eliminates this problem since attendees have no other choice than to be present for the duration of the event.",
  },
  {
    name: "High Speed Internet at Sea",
    icon: WifiIcon,
    description:
      "If you need to work while at sea Royal Caribbean offers the latest technology in high-speed internet. Their Voom WiFi system has enough bandwidth for thousands of people to stream calls, watch videos and more. Need to watch that Netflix movie before bed, Voom WiFi makes it possible. To learn more about rates and plans, visit Voom WiFi.",
  },
  {
    name: "Miss Only 1 Day of Work",
    icon: SparklesIcon,
    description:
      "If you live and work in Florida, you'll only miss one full day of work. The ship doesn't leave until 4:00 PM, which means you'll have the whole morning to work before leaving for the harbor. ",
  },
  {
    name: "Shops and Airlines only",
    icon: ThumbUpIcon,
    description:
      "Summit at Sea is a true MRO Conference, where the only participants are repair centers and airline maintenance representatives.",
  },
];

export default {
  setup() {
    return {
      features,
    };
  },
};
</script>