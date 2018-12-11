var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;
// app.title = "环形图";
var data = [
  { value: 335, name: "直接访问" },
  { value: 310, name: "邮件营销" },
  { value: 234, name: "联盟广告" },
  { value: 135, name: "视频广告" },
  { value: 1548, name: "搜索引擎" }
];

option = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    x: "right",
    data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
    show: false // 隐藏图例(小方块和文件说明)
  },
  series: [
    {
      name: "访问来源",
      type: "pie",
      radius: ["50%", "70%"],
      avoidLabelOverlap: false,
      label: {
        // normal: {
        //   show: false,
        //   position: "center"
        // },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: "16",
            fontWeight: "bold"
          }
        }
      },
      labelLine: {
        normal: {
          show: true // 显示圆环与文字说明之间的线条
        }
      },
      data: data
    }
  ]
};
if (option && typeof option === "object") {
  myChart.setOption(option, true);
}
