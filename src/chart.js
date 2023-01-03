import "../node_modules/chart.js/dist/chart.umd.js";
// import Chart from "../node_modules/chart.js";

let myChart = document.querySelector("#myChart").getContext("2d");

Chart.defaults.font.family = "Lato";
Chart.defaults.font.size = 18;
Chart.defaults.font.color = "#777";

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
        // backgroundColor: "green",
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
        borderWidth: 1,
        borderColor: "#777",
        hoverBorderWidth: 3,
        hoverBorderColor: "#000",
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Largest Cities in Massachusetts",
        font: { size: 25 },
      },
      legend: {
        // display: false,
        position: "right",
        labels: {
          color: "#000",
        },
      },
      tooltip: {
        // enabled: false,
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 0,
        bottom: 0,
        top: 0,
      },
    },
  },
});
