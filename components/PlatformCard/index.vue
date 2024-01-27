<template>
  <div class="platform-card">
    <h4>
      {{ cardData.name }}
    </h4>
    <div class="platform-card--progress">
      <div
        :style="`background-color: ${cardData.theme}; width: ${cardData.progress}%`"
      ></div>
    </div>
    <div class="platform-card--footer">
      <p>{{ cardData.amount }}</p>
      <p>{{ cardData.percentageIncrease }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  cardData: { type: Object, default: () => {} },
});
</script>

<style></style>
