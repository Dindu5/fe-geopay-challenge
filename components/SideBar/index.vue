<template>
  <aside class="sidebar">
    <div class="sidebar--icons-main">
      <NuxtImg class="sidebar--logo" src="/images/icons/logo.svg" placeholder />
      <div>
        <div class="sidebar--icons-wrapper active">
          <NuxtImg src="/images/icons/nav-dashboard.svg" placeholder />
        </div>
        <div class="sidebar--icons-wrapper">
          <NuxtImg src="/images/icons/nav-sales.svg" placeholder />
        </div>
        <div class="sidebar--icons-wrapper">
          <NuxtImg src="/images/icons/nav-user.svg" placeholder />
        </div>
        <div class="sidebar--icons-wrapper">
          <NuxtImg src="/images/icons/nav-box.svg" placeholder />
        </div>
        <div class="sidebar--icons-wrapper">
          <NuxtImg src="/images/icons/nav-discount.svg" placeholder />
        </div>
        <div class="sidebar--theme-switcher">
          <input
            type="checkbox"
            class="sidebar--theme-switcher__checkbox"
            id="checkbox"
            v-model="isDark"
          />
          <label for="checkbox" class="sidebar--theme-switcher__checkbox-label">
            <img src="/images/icons/theme-light.svg" alt="" />
            <img src="/images/icons/theme-dark.svg" alt="" />

            <span class="sidebar--theme-switcher__checkbox-ball"></span>
          </label>
        </div>
      </div>
    </div>
    <div class="sidebar--icons-secondary">
      <div>
        <div class="sidebar--icons-wrapper">
          <NuxtImg src="/images/icons/nav-expand.svg" placeholder />
        </div>
        <div class="sidebar--icons-wrapper">
          <NuxtImg src="/images/icons/nav-settings.svg" placeholder />
        </div>
        <div class="sidebar--icons-wrapper">
          <NuxtImg src="/images/icons/logout.svg" placeholder />
        </div>
      </div>
    </div>
  </aside>
</template>

<script lang="ts" setup>
const isDark = ref(false);

useHead({
  bodyAttrs: {
    class: computed(() => {
      if (isDark.value) return "dark-mode";
      return "";
    }),
  },
});
</script>

<style></style>
