<template>
  <div class="sales-summary">
    <div class="sales-summary--top">
      <div>
        <NuxtImg :src="icon" />
      </div>
      <NuxtImg v-if="increase" src="/images/analytics/upchart-trend.svg" />
      <NuxtImg v-else src="/images/analytics/downchart-trend.svg" />
    </div>
    <div class="sales-summary--text">
      <h4>{{ title }}</h4>
      <h3>{{ value }}</h3>
    </div>

    <div class="sales-summary--bottom">
      <div
        class="sales-summary--bottom__chip"
        :class="increase ? 'increase' : 'decrease'"
      >
        <NuxtImg v-if="increase" src="/images/analytics/trending-up.svg" />
        <NuxtImg v-else src="/images/analytics/trending-down.svg" />
        <p>{{ percentage }}%</p>
      </div>
      <p>vs. previous month</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: { type: String, default: "" },
  value: { type: String },
  icon: { type: String, default: "/images/analytics/total-order.svg" },
  percentage: { type: String, default: "0" },
  increase: { type: Boolean, default: true },
});
</script>

<style></style>
