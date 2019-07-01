<template>
  <div class="charts1">
    <div id="chartviews" ref="chartview"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { setTimeout, setInterval } from "timers";
import { type } from "os";
export default {
  props: ["dataChart1"],
  data() {
    return {
      myChart: "",
      imageDom: "",
      sdata: "",
      rankData: [
        {
          category: "2019-05-18",
          sdata: ["x1", "x2", "x3", "x4", "x5"],
          source: [
            ["time", "2012", "2013", "2014", "2015"],
            ["x1", 41.1, 30.4, 65.1, 53.3],
            ["x2", 86.5, 92.1, 85.7, 83.1],
            ["x3", 24.1, 67.2, 79.5, 86.4]
          ],
          date: "2019-05-18-16"
        }
      ]
    };
  },
  watch: {
    dataChart1: function() {
      this.draw();
    }
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById("chartviews"));
    this.imageDom = new Image(200, 100);
    this.imageDom.src = "static/img/1.jpg";

    this.sdata = {
      category: "2019-05-18",
      sdata: ["x1", "x2", "x3", "x4", "x5"],
      source: [
        ["time", "2012", "2013", "2014", "2015"],
        ["x1", 51.1, 70.4, 35.1, 43.3],
        ["x2", 66.5, 72.1, 25.7, 33.1],
        ["x3", 66.1, 47.2, 59.5, 76.4]
      ],

      date: "2019-05-18-19"
    };
    this.draw();
    var _self = this;
    setTimeout(() => {
      _self.sdata = "";
      _self.sdata = {
        category: "2019-05-18",
        sdata: ["x1", "x2", "x3", "x4", "x5"],
        source: [
          ["time", "2012", "2013", "2014", "2015"],
          ["x1", 141.1, 130.4, 165.1, 153.3],
          ["x2", 136.5, 122.1, 185.7, 183.1],
          ["x3", 124.1, 167.2, 179.5, 186.4]
        ],
        date: "2019-05-18-20"
      };
      _self.draw();
    }, 3000);
  },
  methods: {
    strSort(str) {
      var str = str;
      var xstr = {};
      for (let i = 0; i < str.length; i++) {
        console.log(str);
        xstr.a[i] = [];
        for (let j = 0; j < str[i].data.length; j++) {
          xstr.a[i].push(str[i].data[j]);
        }
      }
      console.log(xstr);
    },
    draw() {
      // this.strSort(this.rankData[0].series);
      // 排行数据
      this.rankData.push(this.sdata);
      // console.log(this.rankData[0]);
      // console.log(this.rankData[1]);
      var title = "title";
      var playInterval = 1000;
      var _self = this;
      // 基础设置
      var option = {
        baseOption: {
          animationDurationUpdate: playInterval * 1.5,
          animationEasingUpdate: "linear",
          timeline: {
            show: false,
            axisType: "category",
            orient: "vertical",
            autoPlay: true,
            loop: false,
            playInterval: playInterval,
            left: null,
            right: 30,
            top: 330,
            bottom: 100,
            height: null,

            symbol: "none",
            lineStyle: {
              color: "#ccc",
              show: false
            },
            checkpointStyle: {
              symbol: "none",
              color: "#bbb",
              borderColor: "#777",
              show: false,
              borderWidth: 1
            },
            controlStyle: {
              showNextBtn: false,
              showPrevBtn: false,
              normal: {
                color: "#666",
                show: false,
                borderColor: "#666"
              },
              emphasis: {
                color: "#aaa",
                borderColor: "#aaa"
              }
            },
            data: this.rankData.map(function(ele) {
              return ele.date;
            })
          },
          title: [
            {
              left: "center",
              top: "3%",
              textStyle: {
                fontSize: 25,
                color: "rgba(121,121,121, 0.9)"
              }
            },
            {
              left: "center",
              top: "5%"
            }
          ],
          grid: [
            {
              left: "20%",
              right: "20%",
              top: "12%",
              height: "auto",
              bottom: "25%"
            }
          ],
          tooltip: {
            trigger: "axis"
          },
          // legend: {
          //   data: _self.rankData[0].series.map(function(ele) {
          //     return ele.name;
          //   })
          // },
          yAxis: [
            {
              type: "value"
            }
          ],
          xAxis: [
            {
              type: "category",
              label: {
                show: true,
                position: "top"
              }
              // data: _self.rankData[0].sdata.map(function(ele) {
              //   return ele;
              // })
            },
            {
              position: "bottom",
              offset: 20,
              type: "category",
              axisLine: {
                show: false,
                lineStyle: {
                  color: "rgba(121,121,121,0.3)"
                }
              }
            }
          ],
          series: []
        },
        options: []
      };
      var xMaxInterval = 5;
      var str = [];

      for (var i = 0; i < this.rankData.length; i++) {
        option.options.push({
          title: {
            text: title
          },
          legend: {},
          tooltip: {},
          label: {  
            show: true,
            position: "top"
          },
       
       
          dataset: {            
            source:_self.rankData[i].source.sort(function(a, b) {
                  return b[2] - a[2];
                })
                .map(function(ele) {
                  // console.log(ele)
                  return ele;
                })
          },
          series: [
            { type: "bar", seriesLayoutBy: "column" },
            { type: "bar", seriesLayoutBy: "column" },
            { type: "bar", seriesLayoutBy: "column" },
            { type: "bar", seriesLayoutBy: "column" },
          ]
        });

      
      }
      console.log(option);
      this.myChart.setOption(option, true);
       this.rankData.shift();
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
  height: 580px;
  text-align: left;
}
</style>
