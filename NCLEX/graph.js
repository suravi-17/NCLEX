var dom = document.getElementById("bar-graph");
var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false,
});
var app = {};

var option;

option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: [
        "Mental Health",
        "Eye/Ear",
        "Cardio-Vascular",
        "Urinary",
        "Testing",
        "Basic Comfort",
        "Oncology",
      ],
      axisTick: {
        alignWithLabel: true,
      },
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "Direct",
      type: "bar",
      barWidth: "60%",
      data: [10, 52, 200, 334, 390, 330, 220],
    },
  ],
};

if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);
