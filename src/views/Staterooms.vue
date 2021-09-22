
<template>
  <header-component></header-component>
  <div class="bg-gray-50">
    <div
      class="max-w-2xl mx-auto px-4 py-12 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8"
    >
      <!-- Details section -->
      <section aria-labelledby="details-heading">
        <div class="flex flex-col items-center text-center">
          <h2
            id="details-heading"
            class="
              text-3xl
              font-extrabold
              tracking-tight
              text-gray-900
              sm:text-4xl
            "
          >
            Staterooms
          </h2>
          <p class="mt-3 max-w-3xl text-lg text-gray-600">
            It’s not a stateroom, it’s home away from home for your adventure.
          </p>
        </div>

        <div class="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
          <div>
            <div
              class="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden"
            >
              <img
                src="https://www.145summitatsea.com/summitImage/Det_8087_1620657089.jfif"
                alt="Drawstring top with elastic loop closure and textured interior padding."
                class="w-full h-full object-center object-cover"
              />
              <div
                class="
                  absolute
                  top-0
                  inset-x-0
                  h-full
                  rounded-lg
                  p-4
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                "
              >
                <div
                  aria-hidden="true"
                  class="
                    absolute
                    inset-x-0
                    bottom-0
                    h-full
                    bg-gradient-to-t
                    from-blue-700
                    opacity-80
                  "
                />
                <p
                  class="
                    relative
                    text-4xl
                    font-semibold
                    text-gray-100 text-transparent
                    opacity-80
                  "
                >
                  Ocean View
                </p>
              </div>
            </div>
            <p class="mt-8 text-base text-gray-500">
              As you sail to Cozumel, you won’t want to miss a single moment. In
              an Ocean View stateroom, you’ll be treated to a beautiful new view
              every day! Spend the day exploring the sites and sounds of
              Cozumel, then retreat to your comfortable, well-appointed
              stateroom to relax.
            </p>
            <div
              class="
                mt-4
                flex
                items-center
                justify-between
                text-base
                font-medium
                text-gray-900
              "
            >
              <a
                href="#"
                class="
                  relative
                  flex
                  bg-blue-500
                  border border-transparent
                  rounded-md
                  py-2
                  px-8
                  items-center
                  justify-center
                  text-sm
                  font-medium
                  text-gray-100
                  hover:bg-blue-700
                "
                >View Amenities<span class="sr-only"></span
              ></a>
              <p class="text-2xl font-semibold">
                $5850<span class="text-sm text-gray-500">/Private room</span>
              </p>
            </div>
          </div>
          <div>
            <div
              class="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden"
            >
              <img
                src="https://www.145summitatsea.com/summitImage/Det_2821_1620657040.jfif"
                alt="Front zipper pouch with included key ring."
                class="w-full h-full object-center object-cover"
              />
              <div
                class="
                  absolute
                  top-0
                  inset-x-0
                  h-full
                  rounded-lg
                  p-4
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                "
              >
                <div
                  aria-hidden="true"
                  class="
                    absolute
                    inset-x-0
                    bottom-0
                    h-full
                    bg-gradient-to-t
                    from-blue-700
                    opacity-80
                  "
                />
                <p
                  class="
                    relative
                    text-4xl
                    font-semibold
                    text-gray-100 text-transparent
                    opacity-90
                  "
                >
                  Balcony View
                </p>
              </div>
            </div>

            <p class="mt-8 text-base text-gray-500">
              Imagine waking up every morning, opening your balcony door, and
              being greeted with views of a brand-new and breathtaking part of
              the world. Reserve a Balcony stateroom to enjoy spectacular vistas
              each and every day from the comfort and privacy of your own room
            </p>
            <div
              class="
                mt-4
                flex
                items-center
                justify-between
                text-base
                font-medium
                text-gray-900
              "
            >
              <a
                href="#"
                class="
                  relative
                  flex
                  bg-blue-500
                  border border-transparent
                  rounded-md
                  py-2
                  px-8
                  items-center
                  justify-center
                  text-sm
                  font-medium
                  text-gray-100
                  hover:bg-blue-700
                "
                >View Amenities<span class="sr-only"></span
              ></a>
              <p class="text-2xl font-semibold">
                $5850<span class="text-sm text-gray-500">/Private room</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <footer-component></footer-component>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>
