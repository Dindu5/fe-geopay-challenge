<template>
  <nav class="topbar">
    <div>
      <h5>Dashboard</h5>
    </div>
    <div>
      <div class="topbar-search">
        <input type="text" />
        <NuxtImg src="/images/icons/search.svg" />
      </div>
      <div class="topbar-date-picker">
        <NuxtImg src="/images/icons/calender.svg" />
        <input type="text" v-model="date" />
      </div>
      <button class="topbar-notifications">
        <NuxtImg src="/images/icons/bell.svg" />
      </button>
      <div class="topbar-profile">
        <img src="/images/avatar/main-user-2x.png" />
        <div>
          <h6>Justin Bergson</h6>
          <p>Justin@gmail.com</p>
        </div>
        <NuxtImg src="/images/icons/arrow-down.svg" />
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const date = ref("November 15, 2023");
</script>

<style></style>
