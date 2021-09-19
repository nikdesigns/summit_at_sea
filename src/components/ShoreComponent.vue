<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white">
    <div
      class="max-w-2xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div
        class="grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2"
      >
        <div>
          <div class="border-b border-gray-200 pb-10">
            <h2 class="font-medium text-gray-500">Free Day</h2>
            <p
              class="
                mt-2
                text-3xl
                font-extrabold
                tracking-tight
                text-gray-900
                sm:text-4xl
              "
            >
              Shore Excursions Cozumel, Mexico
            </p>
          </div>

          <p class="mt-3 text-lg text-gray-500">
            With its tropical reefs full of life, crystal clear waters and
            ancient ruins, Cozumel is ideal for unique adventures. Visit
            Chankanaab National Park, where you can snorkel among colorful reefs
            and schools of tropical fish that make this island a prime spot for
            diving. Or go back in time on an adventure through the mighty Mayan
            ruins of Tulum. When you're done exploring, unwind with a beachside
            massage at Playa Mia. In Cozumel, a world of adventure awaits you.
          </p>
        </div>

        <div>
          <div
            class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden"
          >
            <img
              src="https://www.145summitatsea.com/assets/img//Cozumel/cozumel-mexico-reef-snorkeling-fish-shore-excursions.jpg"
              alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
              class="w-full h-full object-center object-cover"
            />
          </div>
          <div
            class="
              grid grid-cols-2
              gap-4
              mt-4
              sm:gap-6
              sm:mt-6
              lg:gap-8
              lg:mt-8
            "
          >
            <div
              class="
                aspect-w-1 aspect-h-1
                rounded-lg
                bg-gray-100
                overflow-hidden
              "
            >
              <img
                src="https://www.145summitatsea.com/assets/img/Cozumel/dolphin_cozumel.jpg"
                alt="Detail of temperature setting button on kettle bass with digital degree readout."
                class="w-full h-full object-center object-cover"
              />
            </div>
            <div
              class="
                aspect-w-1 aspect-h-1
                rounded-lg
                bg-gray-100
                overflow-hidden
              "
            >
              <img
                src="https://www.145summitatsea.com/assets/img/Cozumel/bar_cozumel.jpg"
                alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                class="w-full h-full object-center object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const features = [
  {
    name: "Sleek design",
    description:
      "The machined kettle has a smooth black finish and contemporary shape that stands apart from most plastic appliances.",
  },
  {
    name: "Comfort handle",
    description: "Shaped for steady pours and insulated to prevent burns.",
  },
  {
    name: "One-button control",
    description:
      "The one button control has a digital readout for setting temperature and turning the kettle on and off.",
  },
  {
    name: "Long spout",
    description:
      "Designed specifically for controlled pour-overs that don't slash or sputter.",
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