<template>
  <main>
    <NuxtLoadingIndicator />
    <SideBar />
    <TopBar />
    <div class="main-layout-content">
      <slot />
    </div>
  </main>
</template>
