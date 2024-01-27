<template>
  <table class="order-table">
    <thead>
      <th v-for="header in tableHeaders" :key="header">{{ header }}</th>
    </thead>
    <tbody>
      <tr v-for="(data, i) in tableData" :key="i">
        <td>
          <img :src="data.user.avatar" />
          <p>{{ data.user.name }}</p>
        </td>
        <td>
          <p>{{ data.date }}</p>
        </td>
        <td>
          <p>{{ data.amount }}</p>
        </td>
        <td>
          <p
            :class="data.status === 'Paid' ? 'active-status' : 'refund-status'"
          >
            {{ data.status }}
          </p>
        </td>
        <td>
          <div>
            <NuxtImg src="/images/icons/view.svg" />
            <p>View</p>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
const tableHeaders = ref(["Name", "Date", "Amount", "Status", "Invoice"]);

const props = defineProps({
  tableData: { type: Array, default: () => [] },
});
</script>
