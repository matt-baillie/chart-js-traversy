import "../node_modules/chart.js/dist/chart.umd.js";
import "../node_modules/chart.js/dist/chart.umd.js";

let myChart = document.querySelector("#myChart").getContext("2d");

let massPopChart = new Chart(myChart, {
  type: "bar", // bar, horizBar, pie, line, radar doughnut, polarArea
  data: {
    labels: [
      "Boston",
      "Worcester",
      "Springfield",
      "Lowell",
      "Cambridge",
      "New Bedford",
    ],
    datasets: [
      {
        label: "Population",
        data: [617594, 181045, 153060, 106519, 105162, 95072],
      },
    ],
  },
  options: {},
});
