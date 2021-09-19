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
        See it to beleive it
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
        Comparison
      </p>
      <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
        Summit at sea vs others!
      </p>
      <div class="flex flex-col mt-12">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div
              class="
                shadow
                overflow-hidden
                border-b border-gray-200
                sm:rounded-lg
              "
            >
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    ></th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      <img
                        src="https://www.145summitatsea.com/assets/img/summit_logo.png"
                        class="h-16 w-auto"
                        alt=""
                      />
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      <img
                        src="https://www.145summitatsea.com/assets/img/ACPC-logo-for-event-page.jpg"
                        class="h-auto w-20"
                        alt=""
                      />
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      <img
                        src="https://www.145summitatsea.com/assets/img/apm.png"
                        class="h-auto w-20"
                        alt=""
                      />
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      <img
                        src="https://www.145summitatsea.com/assets/img/ccma.png"
                        class="h-auto w-20"
                        alt=""
                      />
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      <img
                        src="https://www.145summitatsea.com/assets/img/Aviation_Logo_2020_350_200.jpg"
                        class="h-auto w-20"
                        alt=""
                      />
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="comparison in comparisons" :key="comparison.email">
                    <td
                      class="
                        px-6
                        py-4
                        whitespace-nowrap
                        text-sm
                        font-medium
                        text-left text-gray-900
                      "
                    >
                      {{ comparison.feature }}
                    </td>
                    <td
                      class="
                        px-6
                        py-4
                        whitespace-nowrap
                        text-sm text-gray-900 text-left
                        font-medium
                      "
                    >
                      {{ comparison.the145 }}
                      <span
                        :class="[
                          comparison.isThe145
                            ? 'text-green-400'
                            : 'text-red-400',
                        ]"
                      >
                        <component
                          :is="comparison.the145Icon"
                          class="h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>
                    </td>
                    <td
                      class="
                        px-6
                        py-4
                        whitespace-nowrap
                        text-sm text-gray-900 text-left
                        font-medium
                      "
                    >
                      {{ comparison.acpc }}
                      <span
                        :class="[
                          comparison.isAcpc ? 'text-green-400' : 'text-red-400',
                        ]"
                      >
                        <component
                          :is="comparison.acpcIcon"
                          class="h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>
                    </td>
                    <td
                      class="
                        px-6
                        py-4
                        whitespace-nowrap
                        text-sm text-gray-900 text-left
                        font-medium
                      "
                    >
                      {{ comparison.apm }}
                      <span
                        :class="[
                          comparison.isApm ? 'text-green-400' : 'text-red-400',
                        ]"
                      >
                        <component
                          :is="comparison.apmIcon"
                          class="h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>
                    </td>
                    <td
                      class="
                        px-6
                        py-4
                        whitespace-nowrap
                        text-sm text-gray-900 text-left
                        font-medium
                      "
                    >
                      {{ comparison.ccma }}
                      <span
                        :class="[
                          comparison.isCcma ? 'text-green-400' : 'text-red-400',
                        ]"
                      >
                        <component
                          :is="comparison.ccmaIcon"
                          class="h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>
                    </td>
                    <td
                      class="
                        px-6
                        py-4
                        whitespace-nowrap
                        text-sm text-gray-900 text-left
                        font-medium
                      "
                    >
                      {{ comparison.mtb }}
                      <span
                        :class="[
                          comparison.isMtb ? 'text-green-400' : 'text-red-400',
                        ]"
                      >
                        <component
                          :is="comparison.mtbIcon"
                          class="h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XIcon, CheckIcon } from "@heroicons/vue/outline";
const comparisons = [
  {
    feature: "Conference Fees - Per Person",
    the145: "$5850.00",
    acpc: "$1095.00",
    apm: "$1928.00",
    ccma: "$1625.00",
    mtb: "$5820.00",
    the145Icon: null,
    acpcIcon: null,
    apmIcon: null,
    ccmaIcon: null,
    mtbIcon: null,
    // iconForeground: "text-gray-700",
  },
  {
    feature: "Accomodations Included",
    the145: null,
    acpc: null,
    apm: null,
    ccma: null,
    mtb: null,
    the145Icon: CheckIcon,
    isThe145: true,
    acpcIcon: XIcon,
    isAcpc: false,
    apmIcon: XIcon,
    isApm: false,
    ccmaIcon: XIcon,
    isCcma: false,
    mtbIcon: CheckIcon,
    isMtb: true,
    // iconForeground: "text-green-500",
  },
  {
    feature: "All Meals Included",
    the145: null,
    acpc: null,
    apm: null,
    ccma: null,
    mtb: null,
    the145Icon: CheckIcon,
    isThe145: true,
    acpcIcon: XIcon,
    isAcpc: false,
    apmIcon: XIcon,
    isApm: false,
    ccmaIcon: XIcon,
    isCcma: false,
    mtbIcon: CheckIcon,
    isMtb: true,
    // iconForeground: "text-gray-700",
  },
  {
    feature: "Nightly Entertainment",
    the145: null,
    acpc: null,
    apm: null,
    ccma: null,
    mtb: null,
    the145Icon: CheckIcon,
    isThe145: true,
    acpcIcon: XIcon,
    isAcpc: false,
    apmIcon: XIcon,
    isApm: false,
    ccmaIcon: XIcon,
    isCcma: false,
    mtbIcon: XIcon,
    isMtb: false,
    // iconForeground: "text-gray-700",
  },
  {
    feature: "Tips and Gratuties",
    the145: null,
    acpc: null,
    apm: null,
    ccma: null,
    mtb: null,
    the145Icon: CheckIcon,
    isThe145: true,
    acpcIcon: XIcon,
    isAcpc: false,
    apmIcon: XIcon,
    isApm: false,
    ccmaIcon: XIcon,
    isCcma: false,
    mtbIcon: XIcon,
    isMtb: false,
    // iconForeground: "text-gray-700",
  },
  {
    feature: "Cocktail Reception with Airlines",
    the145: null,
    acpc: null,
    apm: null,
    ccma: null,
    mtb: null,
    the145Icon: CheckIcon,
    isThe145: true,
    acpcIcon: XIcon,
    isAcpc: false,
    apmIcon: XIcon,
    isApm: false,
    ccmaIcon: XIcon,
    isCcma: false,
    mtbIcon: XIcon,
    isMtb: false,
    // iconForeground: "text-gray-700",
  },
  {
    feature: "Guaranteed Meeting with Airlines",
    the145: "50",
    acpc: "3",
    apm: "3",
    ccma: "3",
    mtb: "15",
    the145Icon: null,
    isThe145: true,
    acpcIcon: null,
    isAcpc: false,
    apmIcon: null,
    isApm: false,
    ccmaIcon: null,
    isCcma: false,
    mtbIcon: null,
    isMtb: true,
    // iconForeground: "text-gray-700",
  },
  {
    feature: "Number of Conference to Equal SAS",
    the145: "1",
    acpc: "17",
    apm: "17",
    ccma: "17",
    mtb: "4",
    the145Icon: null,
    isThe145: true,
    acpcIcon: null,
    isAcpc: false,
    apmIcon: null,
    isApm: false,
    ccmaIcon: null,
    isCcma: false,
    mtbIcon: null,
    isMtb: true,
    // iconForeground: "text-gray-700",
  },
  {
    feature: "Average Cost Accommadations 4 nights",
    the145: "Included",
    acpc: "$984.00	",
    apm: "$572.00	",
    ccma: "$680.00	",
    mtb: "Included",
    the145Icon: null,
    isThe145: true,
    acpcIcon: null,
    isAcpc: false,
    apmIcon: null,
    isApm: false,
    ccmaIcon: null,
    isCcma: false,
    mtbIcon: null,
    isMtb: true,
    // iconForeground: "text-gray-700",
  },
  {
    feature: "Minimum Addtl. Cost of Meals 4 days",
    the145: "Included",
    acpc: "$120.00",
    apm: "$120.00",
    ccma: "$120.00",
    mtb: "Included",
    the145Icon: null,
    isThe145: true,
    acpcIcon: null,
    isAcpc: false,
    apmIcon: null,
    isApm: false,
    ccmaIcon: null,
    isCcma: false,
    mtbIcon: null,
    isMtb: true,
    // iconForeground: "text-gray-700",
  },
  {
    feature: "Total Minimum Cost Per Conference",
    the145: "$5,850.00",
    acpc: "$2,199.00",
    apm: "$2,620.00",
    ccma: "$2,425.00",
    mtb: "$5,820.00",
    the145Icon: null,
    isThe145: true,
    acpcIcon: null,
    isAcpc: false,
    apmIcon: null,
    isApm: false,
    ccmaIcon: null,
    isCcma: false,
    mtbIcon: null,
    isMtb: true,
    // iconForeground: "text-gray-700",
  },
  {
    feature: "Minimum Cost to Equal Summit at Sea",
    the145: "	$5,850.00",
    acpc: "$37,383.00",
    apm: "$44,540.00",
    ccma: "$41,225.00",
    mtb: "$23,280.00",
    the145Icon: null,
    isThe145: true,
    acpcIcon: null,
    isAcpc: false,
    apmIcon: null,
    isApm: false,
    ccmaIcon: null,
    isCcma: false,
    mtbIcon: null,
    isMtb: true,
    // iconForeground: "text-gray-700",
  },
];

export default {
  components: {
    CheckIcon,
    XIcon,
  },
  setup() {
    return {
      comparisons,
    };
  },
};
</script>
