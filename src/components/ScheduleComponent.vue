<template>
  <div>
    <div class="relative bg-gray-50 py-16 sm:py-4 lg:py-12">
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
          Conference Schedule
        </p>
        <p class="mt-5 mb-12 max-w-prose mx-auto text-xl text-gray-500">
          You're going to love what we have planned for Summit at Sea!
        </p>

        <TabGroup>
          <TabList
            class="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
          >
            <Tab v-slot="{ selected }" as="template">
              <button
                class="
                  text-gray-900
                  rounded-l-lg
                  group
                  relative
                  min-w-0
                  flex-1
                  overflow-hidden
                  bg-white
                  py-4
                  px-4
                  text-sm
                  font-medium
                  text-center
                  hover:bg-gray-50
                  focus:z-10
                "
              >
                THURSDAY August 4, 2022
                <span
                  aria-hidden="true"
                  :class="[
                    selected ? 'bg-indigo-500' : 'bg-transparent',
                    'absolute inset-x-0 bottom-0 h-0.5',
                  ]"
                />
              </button>
            </Tab>
            <Tab v-slot="{ selected }" as="template">
              <button
                class="
                  text-gray-900
                  rounded-l-lg
                  group
                  relative
                  min-w-0
                  flex-1
                  overflow-hidden
                  bg-white
                  py-4
                  px-4
                  text-sm
                  font-medium
                  text-center
                  hover:bg-gray-50
                  focus:z-10
                "
              >
                FRIDAY August 5, 2022
                <span
                  aria-hidden="true"
                  :class="[
                    selected ? 'bg-indigo-500' : 'bg-transparent',
                    'absolute inset-x-0 bottom-0 h-0.5',
                  ]"
                />
              </button>
            </Tab>
            <Tab v-slot="{ selected }" as="template">
              <button
                class="
                  text-gray-900
                  rounded-l-lg
                  group
                  relative
                  min-w-0
                  flex-1
                  overflow-hidden
                  bg-white
                  py-4
                  px-4
                  text-sm
                  font-medium
                  text-center
                  hover:bg-gray-50
                  focus:z-10
                "
              >
                SATURDAY August 6, 2022
                <span
                  aria-hidden="true"
                  :class="[
                    selected ? 'bg-indigo-500' : 'bg-transparent',
                    'absolute inset-x-0 bottom-0 h-0.5',
                  ]"
                />
              </button>
            </Tab>
            <Tab v-slot="{ selected }" as="template">
              <button
                class="
                  text-gray-900
                  rounded-l-lg
                  group
                  relative
                  min-w-0
                  flex-1
                  overflow-hidden
                  bg-white
                  py-4
                  px-4
                  text-sm
                  font-medium
                  text-center
                  hover:bg-gray-50
                  focus:z-10
                "
              >
                SUNDAY August 7, 2022
                <span
                  aria-hidden="true"
                  :class="[
                    selected ? 'bg-indigo-500' : 'bg-transparent',
                    'absolute inset-x-0 bottom-0 h-0.5',
                  ]"
                />
              </button>
            </Tab>
            <Tab v-slot="{ selected }" as="template">
              <button
                class="
                  text-gray-900
                  rounded-l-lg
                  group
                  relative
                  min-w-0
                  flex-1
                  overflow-hidden
                  bg-white
                  py-4
                  px-4
                  text-sm
                  font-medium
                  text-center
                  hover:bg-gray-50
                  focus:z-10
                "
              >
                MONDAY August 8, 2022
                <span
                  aria-hidden="true"
                  :class="[
                    selected ? 'bg-indigo-500' : 'bg-transparent',
                    'absolute inset-x-0 bottom-0 h-0.5',
                  ]"
                />
              </button>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel
              ><div
                class="
                  shadow
                  overflow-hidden
                  border-b border-gray-200
                  sm:rounded-lg
                  mt-1
                "
              >
                <table class="min-w-full divide-y divide-gray-50">
                  <tbody class="bg-white divide-y divide-gray-50">
                    <tr
                      v-for="oneSchedule in oneSchedules"
                      :key="oneSchedule.name"
                    >
                      <td
                        class="
                          px-6
                          py-4
                          whitespace-nowrap
                          text-sm
                          font-medium
                          text-gray-900
                        "
                      >
                        {{ oneSchedule.name }}
                      </td>
                      <td
                        class="
                          px-6
                          py-4
                          whitespace-nowrap
                          text-sm text-gray-500
                        "
                      >
                        {{ oneSchedule.time }}
                      </td>
                      <td
                        class="
                          px-6
                          py-4
                          whitespace-nowrap
                          text-sm text-gray-500
                        "
                      >
                        {{ oneSchedule.place }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div></TabPanel
            >
            <TabPanel
              ><div
                class="
                  shadow
                  overflow-hidden
                  border-b border-gray-200
                  sm:rounded-lg
                  mt-1
                "
              >
                <table class="min-w-full divide-y divide-gray-50">
                  <tbody class="bg-white divide-y divide-gray-50">
                    <tr
                      v-for="twoSchedule in twoSchedules"
                      :key="twoSchedule.name"
                    >
                      <td
                        class="
                          px-6
                          py-4
                          whitespace-nowrap
                          text-sm
                          font-medium
                          text-gray-900
                        "
                      >
                        {{ twoSchedule.name }}
                      </td>
                      <td
                        class="
                          px-6
                          py-4
                          whitespace-nowrap
                          text-sm text-gray-500
                        "
                      >
                        {{ twoSchedule.time }}
                      </td>
                      <td
                        class="
                          px-6
                          py-4
                          whitespace-nowrap
                          text-sm text-gray-500
                        "
                      >
                        {{ twoSchedule.place }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div></TabPanel
            >
            <TabPanel
              ><div
                class="
                  shadow
                  overflow-hidden
                  border-b border-gray-200
                  sm:rounded-lg
                  mt-1
                "
              >
                <table class="min-w-full divide-y divide-gray-50">
                  <tbody class="bg-white divide-y divide-gray-50">
                    <tr
                      v-for="threeSchedule in threeSchedules"
                      :key="threeSchedule.name"
                    >
                      <td
                        class="
                          px-6
                          py-4
                          whitespace-nowrap
                          text-sm
                          font-medium
                          text-gray-900
                        "
                      >
                        {{ threeSchedule.name }}
                      </td>
                      <td
                        class="
                          px-6
                          py-4
                          whitespace-nowrap
                          text-sm text-gray-500
                        "
                      >
                        {{ threeSchedule.time }}
                      </td>
                      <td
                        class="
                          px-6
                          py-4
                          whitespace-nowrap
                          text-sm text-gray-500
                        "
                      >
                        {{ threeSchedule.place }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div></TabPanel
            >
            <TabPanel
              ><div
                class="
                  shadow
                  overflow-hidden
                  border-b border-gray-200
                  sm:rounded-lg
                  mt-1
                "
              >
                <table class="min-w-full divide-y divide-gray-50">
                  <tbody class="bg-white divide-y divide-gray-50">
                    <tr
                      v-for="fourSchedule in fourSchedules"
                      :key="fourSchedule.name"
                    >
                      <td
                        class="
                          px-6
                          py-4
                          whitespace-nowrap
                          text-sm
                          font-medium
                          text-gray-900
                        "
                      >
                        {{ fourSchedule.name }}
                      </td>
                      <td
                        class="
                          px-6
                          py-4
                          whitespace-nowrap
                          text-sm text-gray-500
                        "
                      >
                        {{ fourSchedule.time }}
                      </td>
                      <td
                        class="
                          px-6
                          py-4
                          whitespace-nowrap
                          text-sm text-gray-500
                        "
                      >
                        {{ fourSchedule.place }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div></TabPanel
            >
            <TabPanel
              ><div
                class="
                  shadow
                  overflow-hidden
                  border-b border-gray-200
                  sm:rounded-lg
                  mt-1
                "
              >
                <table class="min-w-full divide-y divide-gray-50">
                  <tbody class="bg-white divide-y divide-gray-50">
                    <tr
                      v-for="fiveSchedule in fiveSchedules"
                      :key="fiveSchedule.name"
                    >
                      <td
                        class="
                          px-6
                          py-4
                          whitespace-nowrap
                          text-sm
                          font-medium
                          text-gray-900
                        "
                      >
                        {{ fiveSchedule.name }}
                      </td>
                      <td
                        class="
                          px-6
                          py-4
                          whitespace-nowrap
                          text-sm text-gray-500
                        "
                      >
                        {{ fiveSchedule.time }}
                      </td>
                      <td
                        class="
                          px-6
                          py-4
                          whitespace-nowrap
                          text-sm text-gray-500
                        "
                      >
                        {{ fiveSchedule.place }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div></TabPanel
            >
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  </div>
</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
const oneSchedules = [
  {
    name: "Welcome Orientation",
    time: "2:00 - 2:30",
    place: "Theater",
  },
  {
    name: "Muster Drill",
    time: "3:00",
    place: "",
  },
  {
    name: "Depart Port Canaveral",
    time: "4:00",
    place: "",
  },
  {
    name: "Dinner",
    time: "5:30 - 7:30 (Group A)  8:00 - 10:00 (Group B)",
    place: "",
  },
];
const twoSchedules = [
  {
    name: "Shop Presentations",
    time: "8:00 - 12:00",
    place: "Conference Center",
  },
  {
    name: "Lunch",
    time: "12:00 - 2:00",
    place: "",
  },
  {
    name: "Mini-Trade Show",
    time: "3:00 - 5:00",
    place: "Conference Center",
  },
  {
    name: "Dinner",
    time: "5:30 - 7:30 (Group A) 8:00 - 10:00 (Group B)",
    place: "",
  },
  {
    name: "Entertainment",
    time: "7:00 - Midnight",
    place: "",
  },
];
const threeSchedules = [
  {
    name: "Free Day",
    time: "7:00 AM - 5:00 PM",
    place: "",
  },
  {
    name: "Arrive",
    time: "7:00 AM",
    place: "",
  },
  {
    name: "Depart",
    time: "5:00 PM",
    place: "",
  },
  {
    name: "Dinner",
    time: "5:30 PM - 7:30 PM (Group A) 8:00 PM - 10:00 PM (Group B)",
    place: "",
  },
];
const fourSchedules = [
  {
    name: "Shop Presentations",
    time: "8:00 - 12:00",
    place: "Conference Center",
  },
  {
    name: "Lunch",
    time: "12:00 - 2:00",
    place: "",
  },
  {
    name: "Mini-Trade Show",
    time: "2:00 - 4:00",
    place: "Conference Center",
  },
  {
    name: "Farewell",
    time: "4:30 - 5:30",
    place: "Theater",
  },
  {
    name: "Dinner",
    time: "5:30 - 7:30 (Group A) 8:00 - 10:00 (Group B)",
    place: "",
  },
  {
    name: "Entertainment",
    time: "7:00 - Midnight",
    place: "",
  },
];
const fiveSchedules = [
  {
    name: "Arrive Port Canaveral",
    time: "7:00 AM",
    place: "",
  },
];

export default {
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
  setup() {
    return {
      oneSchedules,
      twoSchedules,
      threeSchedules,
      fourSchedules,
      fiveSchedules,
    };
  },
};
</script>