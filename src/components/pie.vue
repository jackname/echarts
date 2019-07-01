<template>
  <div class="charts1">
    <div id="chartviews" ref="chartview"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  props: ["dataChart1"],
  data() {
    return {
      myChart: ""
    };
  },
  watch: {
    dataChart1: function() {
      this.draw();
    }
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById("chartviews"));
    this.draw();
  },
  methods: {
    draw() {
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          }
        ]
      };
      this.myChart.setOption(option);
    }
  },
  destroyed() {
    this.myChart.dispose();
  }
};
</script>


<style type="text/scss">
#chartviews {
  margin-top: 20px;
  height: 380px;
  text-align: left;
}
</style>
