<template>
  <header-component></header-component>
  <div class="relative py-12 bg-white overflow-hidden">
    <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
      <div
        class="relative h-full text-lg max-w-prose mx-auto"
        aria-hidden="true"
      >
        <svg
          class="absolute top-12 left-full transform translate-x-32"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
            height="384"
            fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
          />
        </svg>
        <svg
          class="
            absolute
            top-1/2
            right-full
            transform
            -translate-y-1/2 -translate-x-32
          "
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
            height="384"
            fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
          />
        </svg>
        <svg
          class="absolute bottom-12 left-full transform translate-x-32"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
            height="384"
            fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
          />
        </svg>
      </div>
    </div>
    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="text-lg max-w-prose mx-auto">
        <h1>
          <span
            class="
              block
              text-base text-center text-indigo-600
              font-semibold
              tracking-wide
              uppercase
            "
            >Policies</span
          >
          <span
            class="
              mt-2
              block
              text-3xl text-center
              leading-8
              font-extrabold
              tracking-tight
              text-gray-900
              sm:text-4xl
            "
            >Code of Conduct</span
          >
        </h1>
        <!-- <p class="mt-8 text-xl text-gray-500 leading-8">
          Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
          arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
          feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget.
          Eleifend egestas fringilla sapien.
        </p> -->
      </div>
      <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
        <p>
          This is NOT a booze cruise, therefore, all attendees of the 145 Summit
          at Sea (hereafter referred to as SAS) shall conduct themselves in a
          professional and courteous manner, showing respect to others at all
          times.
        </p>
        <p>
          All attendees shall approach all meetings and interactions at the SAS
          in accordance with the highest ethical standards of professionalism
          and conduct to exhibit integrity, honesty, respect and credibility.
        </p>
        <p>
          Rude or disorderly conduct of any type is not permitted by any
          attendee at any time during the conference whether in an SAS venue or
          public area of the ship.
        </p>
        <p>
          All attendees shall respect the ship's facilities, both public and
          private.
        </p>
        <p>
          All attendees shall respect the SAS program and shall not cause any
          interruption to the conference in any way.
        </p>
        <p>
          All attendees shall keep their badge, and or wrist band, in full view
          at all times while attending the conference.
        </p>
        <p>
          All attendees (airline representatives and repair centers
          representatives) are requested to arrive on time to meetings, events,
          and programs and attend the entire meeting.
        </p>
        <p>
          Professional business and/or business casual attire is the acceptable
          style of dress for attendees at all SAS venues.
        </p>
        <p>
          If the Professional Code of Conduct or the Participation Guidelines
          are not upheld, it may result in individual and/or company suspension
          from future SAS events. All decisions are subject to the discretion of
          the SAS Board of Directors.
        </p>
      </div>
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