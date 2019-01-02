var container1 = document.getElementById("container1");
var data1 = ["横机花型准备系统v3.2.2", "鹰眼快搜v3.1", "为知笔记v4.11.18", "银博图书管理系统v8.10.001366", "call网络电话v3.0.1"];
var seriesData1 = [200, 120, 105, 80, 70];
var setting = {
  grid: {
    left: '5%',
    right: '7%',
    top: '10%',
    bottom: '5%',
    containLabel: true
  },
  series: [{
    itemStyle: {
      normal: {
        barBorderRadius: 2,
        color: '#e7990d' //柱图颜色
      }
    }
  }]
}
renderSimpleBarChart(container1, data1, seriesData1, {})

function interceptString(arr){
  // 临时解决在小容器中x轴显示长度超出问题
  return arr.map(function (value) {
    var str = value.split('v')[0];
    var res = str.length > 7 ? str.substr(0, 7) + '...' : str;
    return res;
  });
}

function renderSimpleBarChart(dom, data, seriesData, setting = {}) {
  var myChart = echarts.init(dom);
  var app = {};
  option = null;
  option = {
    tooltip: {
      confine: true, // 是否将 tooltip 框限制在图表的区域内 http://echarts.baidu.com/option.html#tooltip.confine
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function (params) {
        return data[params[0].dataIndex] + '<br/>' + params[0].marker + params[0].value;
      }
    },
    grid: {
      left: '5%',
      right: '7%',
      top: '10%',
      bottom: '5%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        interval: 0,
        rotate: 45
      },
      data: data
    },
    yAxis: {
      type: 'value',
      minInterval: 1
    },
    series: [{
      data: seriesData,
      type: 'bar',
      barWidth: '25', //柱图宽度
      itemStyle: {
        normal: {
          barBorderRadius: 2,
          color: '#e7990d' //柱图颜色
        }
      }
    }]
  };
  if (option && typeof option === "object") {
    myChart.setOption(option, true);
  }
}