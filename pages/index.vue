<template>
  <div class="index-page">
    <div class="index-page--grid">
      <section class="index-page--chart">
        <div class="index-page--section-top">
          <h3 class="index-page--title">Sales Trends</h3>
        </div>
        <SalesChart />
      </section>
      <section class="index-page--sales-summary">
        <SalesSummaryCard
          v-for="(report, i) in salesReportData"
          :key="i"
          :title="report.title"
          :value="report.value"
          :percentage="report.percentage"
          :increase="report.increase"
          :icon="report.icon"
        />
      </section>
      <section class="index-page--order-table">
        <div>
          <div class="index-page--section-top">
            <h3 class="index-page--title">Last Orders</h3>
            <button>See all</button>
          </div>
          <OrderTable :tableData="tableData" />
        </div>
      </section>
      <section class="index-page--platforms">
        <div class="index-page--section-top">
          <h3 class="index-page--title">Sales Trends</h3>
          <button>See all</button>
        </div>
        <div class="index-page--platforms__container">
          <PlatformCard
            v-for="(platform, i) in platforms"
            :key="i"
            :cardData="platform"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Analytics Dashboard - Home",
  ogTitle: "Analytics Dashboard - Home",
  applicationName: "Analytics Dashboard",
  description: "Frontend geopay analytics dashboard submission",
  ogDescription: "Frontend geopay analytics dashboard submission",
  //   ogImage:
  //     "https://res.cloudinary.com/dindu/image/upload/v1704161609/test/ellance_fvppgj.jpg",
  twitterCard: "summary_large_image",
  ogType: "website",
  ogLocale: "en_UK",
  //   twitterImage:
  //     "https://res.cloudinary.com/dindu/image/upload/v1704161609/test/ellance_fvppgj.jpg",
});
const salesReportData = ref<Array<any>>([
  {
    title: "Total Order",
    value: "350",
    increase: true,
    percentage: "23,5",
    icon: "/images/analytics/total-order.svg",
  },
  {
    title: "Total Refund",
    value: "270",
    increase: false,
    percentage: "23,5",
    icon: "/images/analytics/total-refund.svg",
  },
  {
    title: "Average Sales",
    value: "1567",
    increase: false,
    percentage: "23,5",
    icon: "/images/analytics/average-sales.svg",
  },
  {
    title: "Total Income",
    value: "$350.000",
    increase: true,
    percentage: "23,5",
    icon: "/images/analytics/total-income.svg",
  },
]);

const tableData = ref([
  {
    user: {
      avatar: "/images/avatar/order-1.png",
      name: "Marcus Bergson",
    },
    date: "Nov 15, 2023",
    amount: "$80,000",
    status: "Paid",
  },
  {
    user: {
      avatar: "/images/avatar/order-2.png",
      name: "Jaydon Vaccaro",
    },
    date: "Nov 15, 2023",
    amount: "$150,000",
    status: "Refund",
  },
  {
    user: {
      avatar: "/images/avatar/order-3.png",
      name: "Corey Schleifer",
    },
    date: "Nov 14, 2023",
    amount: "$87,000",
    status: "Paid",
  },
  {
    user: {
      avatar: "/images/avatar/order-4.png",
      name: "Cooper Press",
    },
    date: "Nov 14, 2023",
    amount: "$100,000",
    status: "Refund",
  },
  {
    user: {
      avatar: "/images/avatar/order-5.png",
      name: "Phillip Lubin",
    },
    date: "Nov 13, 2023",
    amount: "$78,000",
    status: "Paid",
  },
]);

const platforms = ref([
  {
    name: "Book Bazaar",
    theme: "#6160DC",
    amount: "$2,500,000",
    progress: 50,
    percentageIncrease: "+15%",
  },
  {
    name: "Artisan Aisle",
    theme: "#54C5EB",
    amount: "$1,800,000",
    progress: 40,
    percentageIncrease: "+10%",
  },
  {
    name: "Toy Troop",
    theme: "#FFB74A",
    amount: "$1,200,000",
    progress: 30,
    percentageIncrease: "+8%",
  },
  {
    name: "XStore",
    theme: "#FF4A55",
    amount: "$1,000,000",
    progress: 30,
    percentageIncrease: "+5%",
  },
]);
</script>

<style></style>
