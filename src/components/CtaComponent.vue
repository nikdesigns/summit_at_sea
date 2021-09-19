<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-green-500">
    <div
      class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8"
    >
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        <span class="block">Count Every Second Until The Event.</span>
      </h2>
      <p class="mt-4 text-lg leading-6 text-green-200">
        Ship departs Port Canaveral, Florida on August 4th, 2022
      </p>

      <p class="mt-4 text-lg leading-6 text-green-200">
        <Vue3CountdownClock />
      </p>
    </div>
  </div>
</template>


<script>
import { ref, provide } from "vue";
import Vue3CountdownClock from "vue3-clock-countdown";

export default {
  components: {
    Vue3CountdownClock,
  },
  setup() {
    const deadLine = ref("2022/08/04 00:00:00 GMT-0000");
    provide("deadline", deadLine);

    const timerStyle = ref({
      "text-align": "center",
      "font-family": "sans-serif",
      "font-weight": 100,
    });
    provide("timerStyle", timerStyle);

    const clockdiv = ref({
      "font-family": "sans-serif",
      color: "#fff",
      display: "inline-block",
      "font-weight": 100,
      "text-align": "center",
      "font-size": "30px",
    });
    provide("clockdiv", clockdiv);

    const clockdivDiv = ref({
      padding: "10px",
      "border-radius": "3px",
      background: "",
      display: "inline-block",
      margin: "1px",
    });
    provide("clockdivDiv", clockdivDiv);

    const clockdivDivSpan = ref({
      padding: "15px",
      "border-radius": "3px",
      background: "#0f9468",
      display: "inline-block",
    });
    provide("clockdivDivSpan", clockdivDivSpan);

    const styleEndTime = ref({
      color: "#fff",
    });
    provide("styleEndTime", styleEndTime);

    const smalltext = ref({
      "padding-top": "5px",
      "font-size": "16px",
    });
    provide("smalltext", smalltext);

    const titleDays = ref("Days");
    provide("titleDays", titleDays);

    const titleHours = ref("Hours");
    provide("titleHours", titleHours);

    const titleMinutes = ref("Minutes");
    provide("titleMinutes", titleMinutes);

    const titleSeconds = ref("Seconds");
    provide("titleSeconds", titleSeconds);

    const titleEndTime = ref("End Time!");
    provide("titleEndTime", titleEndTime);
  },
};
</script>

