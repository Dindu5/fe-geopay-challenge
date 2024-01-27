<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
    :plugins="[barBox]"
  />
</template>

<script setup>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const getBorder = computed(() => {
  return (
    (Math.max(
      document?.documentElement?.clientWidth || 0,
      window?.innerWidth || 0
    ) /
      1440) *
    20
  );
});

const chartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ],
  datasets: [
    {
      data: [
        6000, 21000, 4000, 28000, 9000, 45000, 9000, 24000, 34000, 9000, 30000,
        24000,
      ],
      backgroundColor: "rgba(52, 202, 165, 0.10)",
      borderRadius: getBorder.value,
    },
  ],
  options: {
    legend: {
      display: false,
    },
  },
};
ChartJS.defaults.plugins.legend = false;

const toolTipCallbacks = function () {
  return {
    title: function (tooltipItem) {
      return "";
    },
  };
};
ChartJS.defaults.plugins.tooltip.xAlign = "center";
ChartJS.defaults.plugins.tooltip.yAlign = "bottom";

const tooltipPlugin = {
  tooltip: {
    xAlign: "right",
    yAlign: "bottom",
  },
};

const barBox = {
  id: "barBox",
  afterDatasetsDraw(chart, args, pluginOptions) {
    const {
      ctx,
      chartArea,
      data,
      scales: { x, y },
    } = chart;

    chart.getDatasetMeta(0).data.forEach((metaData, index) => {
      const halfWidth = metaData.width / 2;
      if (metaData.active) {
        ctx.beginPath();

        const bg = ctx.createLinearGradient(
          0,
          chartArea.top,
          0,
          chartArea.bottom
        );
        bg.addColorStop(0.5, "#34CAA5");
        bg.addColorStop(1, "rgba(52, 202, 165, 0.00)");
        ctx.fillStyle = bg;
        const leftX = metaData.x - halfWidth;
        const rightX = metaData.x + halfWidth;
        const top = metaData.base - (metaData.base - metaData.y);

        // ctx.fillRect(
        //   metaData.x - xHalf,
        //   metaData.base,
        //   metaData.width,
        //   -metaData.height,
        //   [20]
        // );
        // ctx.fillStyle = "black";
        // ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        let radius = halfWidth;

        // stop from creating funky shapes if the radius is bigger than the rectangle we are creating
        if (radius > (metaData.base - top) / 2) {
          radius = (metaData.base - top) / 2;
        }
        ctx.moveTo(leftX, metaData.base - radius);
        ctx.lineTo(leftX, top + radius);
        ctx.quadraticCurveTo(leftX, top, leftX + radius, top);
        ctx.lineTo(rightX - radius, top);
        ctx.quadraticCurveTo(rightX, top, rightX, top + radius);
        ctx.lineTo(rightX, metaData.base - radius);
        ctx.quadraticCurveTo(rightX, metaData.base, rightX, metaData.base);
        ctx.lineTo(leftX + radius, metaData.base);
        ctx.quadraticCurveTo(leftX, metaData.base, leftX, metaData.base);
        ctx.fill();
      }
    });
  },
};
const chartOptions = ref({
  responsive: true,
  scaleShowVerticalLines: false,
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      border: {
        display: false,
      },
    },
    y: {
      border: {
        dash: [5, 3],
        display: false,
      },

      beginAtZero: true,
    },
  },
  plugins: [barBox, tooltipPlugin],
});
</script>

<style>
#my-chart-id {
  margin-top: 1.6rem;
  height: 32rem !important;
  width: 100% !important;
}
</style>
