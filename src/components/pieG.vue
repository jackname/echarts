<template>
  <div class="charts1">
    <div id="chartviews" ref="chartview"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { clearInterval } from 'timers';
export default {
  props: ["dataChart1"],
  data() {
    return {
      myChart: "",
      timer: null
    };
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
        series: [
          {
            name: "title",
            type: "pie",
            radius: ["50%", "70%"],
            hoverOffset: 20,
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
                show: true
              }
            },
            data: [
              { value: 335, name: "直接访问", timers: 5000 },
              { value: 310, name: "邮件营销", timers: 5000 },
              { value: 234, name: "联盟广告", timers: 5000 },
              { value: 135, name: "视频广告", timers: 5000 },
              { value: 548, name: "搜索引擎", timers: 5000 }
            ],

            animationDurationUpdate: 1000,
            animationEasingUpdate: "linear"
          }
        ]
      };
      this.myChart.setOption(option, true);
      var app = {};
      app.currentIndex = -1;
      var _self = this;
      function moves() {
        console.log("----------------------");
        var dataLen = option.series[0].data.length;
        _self.myChart.dispatchAction({
          //pieUnSelect
          type: "downplay",
          seriesIndex: 0,
          dataIndex: app.currentIndex
        });
        app.currentIndex = (app.currentIndex + 1) % dataLen;
        _self.myChart.dispatchAction({
          //pieSelect
          type: "highlight",
          seriesIndex: 0,
          dataIndex: app.currentIndex
        });
        console.log(_self.timer)
      }

      this.timer = setInterval(moves, 3000, false);

      this.myChart.on("mouseover", function(params) {
        window.clearInterval(_self.timer);
        // return;
      });
      this.myChart.on("mouseout", function(params) {
        _self.timer = setInterval(moves, 3000, false);
      });
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
