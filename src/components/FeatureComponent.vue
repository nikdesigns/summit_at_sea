<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="py-16 bg-gray-50 overflow-hidden lg:py-10">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <svg
        class="
          hidden
          lg:block
          absolute
          left-full
          transform
          -translate-x-1/2 -translate-y-1/4
        "
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
        />
      </svg>

      <div
        class="
          relative
          mt-12
          lg:mt-4
          lg:grid lg:grid-cols-2
          lg:gap-8
          lg:items-center
        "
      >
        <div class="relative">
          <h3
            class="
              text-2xl
              font-extrabold
              text-gray-900
              tracking-tight
              sm:text-3xl
            "
          >
            About the event.
          </h3>
          <p class="mt-3 text-lg text-gray-500">
            Let's start with the fact that we're hosting the conference aboard
            Royal Caribbean's Mariner of the Seas cruise ship. How cool is
            that?! But aside from providing a unique venue, we've put together a
            conference that offers highly effective networking opportunities on
            and off the ship, world class industry speaking professionals, and
            cutting-edge technology to give attendees immediate feedback from
            potential airline customers.
          </p>

          <p class="mt-3 text-lg text-gray-500">
            Here's a sneak peek at 145's Summit at Sea:
          </p>
        </div>

        <div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
          <svg
            class="
              absolute
              left-1/2
              transform
              -translate-x-1/2
              translate-y-16
              lg:hidden
            "
            width="784"
            height="404"
            fill="none"
            viewBox="0 0 784 404"
          >
            <defs>
              <pattern
                id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="784"
              height="404"
              fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
            />
          </svg>
          <img
            class="relative mx-auto"
            width="390"
            src="https://www.145summitatsea.com/assets/svg/summit_boat.svg"
            alt=""
          />
        </div>
      </div>

      <svg
        class="
          hidden
          lg:block
          absolute
          right-full
          transform
          translate-x-1/2 translate-y-12
        "
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
        />
      </svg>

      <div class="relative mt-12 sm:mt-16 lg:mt-24">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-3 lg:gap-4">
          <TabGroup vertical>
            <TabList
              class="
                mt-10
                lg:ml-7
                -mx-4
                relative
                lg:mt-0
                lg:col-start-1
                max-w-xs
                sm:mb-8
              "
            >
              <Tab v-slot="{ selected }" as="template">
                <button
                  :class="[
                    selected
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700',
                    'flex items-center px-3 pr-20 py-4 text-base font-medium rounded-md sm:w-full',
                  ]"
                >
                  Shop Presentations
                </button>
              </Tab>
              <Tab v-slot="{ selected }" as="template">
                <button
                  :class="[
                    selected
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700',
                    'flex items-center px-3 pr-20 py-4 text-base font-medium rounded-md sm:w-full',
                  ]"
                >
                  Follow-up Meetings
                </button>
              </Tab>
              <Tab v-slot="{ selected }" as="template">
                <button
                  :class="[
                    selected
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700',
                    'flex items-center px-3 pr-20 py-4 text-base font-medium rounded-md sm:w-full',
                  ]"
                >
                  Relationship Building
                </button>
              </Tab>
              <Tab v-slot="{ selected }" as="template">
                <button
                  :class="[
                    selected
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700',
                    'flex items-center px-3 pr-20 py-4 text-base font-medium rounded-md sm:w-full',
                  ]"
                >
                  Top Shop Awards
                </button>
              </Tab>
            </TabList>
            <TabPanels class="lg:col-start-2 col-span-2">
              <TabPanel
                ><h3
                  class="
                    text-2xl
                    font-extrabold
                    text-gray-900
                    tracking-tight
                    sm:text-3xl
                  "
                >
                  Shop Presentations
                </h3>
                <p class="mt-3 text-lg text-gray-500">
                  Imagine having an exclusive meeting between just you and 50
                  airline maintenance representatives. How awesome would that
                  be? Well, that's exactly what our Shop Presentations event is
                  built to do. You'll be given the opportunity to give an
                  exclusive, five-minute presentation, to more than 50 airline
                  representative all at the same time. To take it a step
                  further, once you've delivered your presentation you'll
                  receive immediate feedback from all airline representatives
                  via a mobile app built to inform you about which airlines are
                  interested in what you have to offer. This is a must do event
                  for anyone looking to expand their airline customer base.
                </p></TabPanel
              >
              <TabPanel
                ><h3
                  class="
                    text-2xl
                    font-extrabold
                    text-gray-900
                    tracking-tight
                    sm:text-3xl
                  "
                >
                  Follow-Up Meetings
                </h3>
                <p class="mt-3 text-lg text-gray-500">
                  Imagine attending a conference, where you could present to 50
                  airline maintenance representatives all at the same time, then
                  receive immediate feedback from all those airlines as to their
                  level of interest, and finally do a follow-up meeting later
                  the afternoon to meet with the airlines that expressed
                  interest in what you have to offer. Well, that's exactly how
                  Summit at Sea's follow-up meetings will work.
                </p>
                <p class="mt-3 text-lg text-gray-500">
                  After each shop presentation the airlines will provide each
                  repair center with immediate feedback via our mobile app,
                  showing their level of interest in the topic that was
                  presented. Then later in the afternoon, all repair centers
                  that gave presentations that day will then have the
                  opportunity to attend a follow-up meeting to discuss things in
                  more detail with the specific airlines that expressed interest
                  in their presentation.
                </p></TabPanel
              >
              <TabPanel
                ><h3
                  class="
                    text-2xl
                    font-extrabold
                    text-gray-900
                    tracking-tight
                    sm:text-3xl
                  "
                >
                  Relationship Building
                </h3>
                <p class="mt-3 text-lg text-gray-500">
                  Studies have shown that shared experiences hold the key to
                  developing deeper and more meaningful relationships, and what
                  better way to do that than to travel together and participate
                  in fun activities together. Summit at Sea was designed to give
                  attendees a unique environment to build relationships outside
                  of the typical "hotel conference" experience. From poker games
                  and mini-golf tournaments to zip-lining and swimming with
                  dolphins, you'll have endless opportunities to rub shoulders
                  and build memories with friends, clients, and future
                  customers.
                </p></TabPanel
              >
              <TabPanel
                ><h3
                  class="
                    text-2xl
                    font-extrabold
                    text-gray-900
                    tracking-tight
                    sm:text-3xl
                  "
                >
                  Top Shop Awards
                </h3>
                <p class="mt-3 text-lg text-gray-500">
                  The 145's annual Top Shop Awards is one of the most
                  anticipated events in aviation each year, and 2022 will be no
                  exception. Immediately following the Orientation Meeting, we
                  will be presenting the awards to all the Top Shop winners.
                  Note: Winners will be announced in February, however the
                  actual presentation of the acrylic awards will be presented
                  during Summit at Sea.
                </p></TabPanel
              >
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from "@heroicons/vue/outline";

const transferFeatures = [
  {
    id: 1,
    name: "Competitive exchange rates",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: "No hidden fees",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: "Transfers are instant",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: LightningBoltIcon,
  },
];
const communicationFeatures = [
  {
    id: 1,
    name: "Mobile notifications",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: AnnotationIcon,
  },
  {
    id: 2,
    name: "Reminder emails",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: MailIcon,
  },
];
const navigation = [
  {
    name: "Shop Presentation",
    description: "Asperiores est autem.",
    href: "#",
    current: true,
  },
  {
    name: "Follow-up Meetings",
    description: "Quas eaque culpa sed voluptatibus laboriosam debitis qui.",
    href: "#",
    current: false,
  },
  {
    name: "Relationship Building",
    description: "Consequuntur ipsa inventore et qui.",
    href: "#",
    current: false,
  },
  {
    name: "Topshop Awards",
    description: "Adipisci minus occaecati hic dolorem beatae et.",
    href: "#",
    current: false,
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
      transferFeatures,
      communicationFeatures,
      navigation,
    };
  },
};
</script>