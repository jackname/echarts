<template>
  <div class="charts1">
    <div id="chartviews" ref="chartview"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { setTimeout } from "timers";
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
          data: [
            {
              name: "类型一",
              value: 208.9,
              color: "red"
            },

            {
              name: "类型二",
              value: 173.55,
              color: "blue"
            },

            {
              name: "类型三",
              value: 152.2
            },

            {
              name: "类型四",
              value: 144.92
            },

            {
              name: "类型五",
              value: 97.32
            },

            {
              name: "类型六",
              value: 89.74
            },

            {
              name: "类型七",
              value: 45.07
            }
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
      data: [
        {
          name: "类型一",
          value: 254.83
        },

        {
          name: "类型二",
          value: 249.05
        },

        {
          name: "类型三",
          value: 169.16
        },

        {
          name: "类型四",
          value: 147.91
        },

        {
          name: "类型六",
          value: 114.07
        },

        {
          name: "类型五",
          value: 107.92
        },

        {
          name: "类型七",
          value: 55.27
        }
      ],
      date: "2019-05-18-19"
    };
    this.draw();
    var _self = this;
    setTimeout(() => {
      _self.sdata = "";
      _self.sdata = {
        category: "2019-05-18",
        data: [
          {
            name: "类型一",
            value: 354.83
          },

          {
            name: "类型二",
            value: 349.05
          },

          {
            name: "类型三",
            value: 269.16
          },

          {
            name: "类型四",
            value: 247.91
          },

          {
            name: "类型六",
            value: 214.07
          },

          {
            name: "类型五",
            value: 207.92
          },

          {
            name: "类型七",
            value: 255.27
          }
        ],
        date: "2019-05-18-20"
      };
      _self.draw();
    }, 3000);
  },
  methods: {
    draw() {
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
            label: {
              normal: {
                show: true,
                interval: 0
              }
            },
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
          xAxis: [{}],
          yAxis: [{}],
          series: [
            {
              id: "bar",
              type: "bar",
              barWidth: "20",
              tooltip: {
                show: false
              },
              label: {
                normal: {
                  show: true,
                  position: "right"
                }
              },
              data: []
            }
          ]
        },
        options: []
      };
      var xMaxInterval = 5;
      var str = [];
      for (let index = 0; index < this.rankData[0].data.length; index++) {
        str.unshift(index + 1);
      }
      for (var i = 0; i < this.rankData.length; i++) {
        var xMax = 20;
        if (this.rankData[i].data[0].value > 20) {
          xMax = "dataMax";
        }
        if (this.rankData[i].data[0].value / xMaxInterval >= 10) {
          xMaxInterval = this.rankData[i].data[0].value / 5;
        }
        option.options.push({
          title: {
            text: title,
            color: "#bfbfbf"
          },
          yAxis: [
            {
              show: true,
              type: "value",
              interval: xMaxInterval,
              max: xMax,
              axisTick: {
                show: false
              },
              axisLabel: {
                show: true,
                color: "rgba(121,121,121,0.9)",

                textStyle: {
                  color: "rgba(121,121,121,0.9)"
                }
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: "rgba(121,121,121,0.3)"
                }
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: ["rgba(121,121,121,0.3)", "rgba(121,121,121,0)"]
                }
              }
            }
          ],
          xAxis: [
            {
              type: "category",

              axisLine: {
                show: true,
                lineStyle: {
                  color: "rgba(121,121,121,0.3)"
                }
              },

              data: this.rankData[i].data
                .sort(function(a, b) {
                  return a.value - b.value;
                })
                .map(function(ele) {
                  return ele.name;
                })
              // .reverse()
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
              },

              data: str
            }
          ],
          series: [
            {
              id: "bar",
              itemStyle: {
                normal: {
                  // color: {
                  //   image: this.imageDom,
                  //   repeat: "repeat"
                  // },
                  color: function(params) {
                    var colorListr = {
                      类型一: "red",
                      类型二: "#00adb5",
                      类型三: "#ff5722",
                      类型四: "#5628b4",
                      类型五: "#20BF55",
                      类型六: "#f23557",
                      类型七: "#118df0",
                      类型八: "#11cbd7"
                    };
                    return colorListr[params.name];
                  },
                  label: {
                    show: true,
                    position: "top",
                    formatter: function(e) {
                      for (let i = 0; i < _self.rankData[i].length; i++) {
                        console.log(i);
                      }

                      return e.value;
                    }
                  },
                  shadowBlur: 20,
                  shadowColor: "rgba(40, 40, 40, 0.5)"
                }
              },
              label: {
                normal: {
                  position: "top"
                }
              },
              data: this.rankData[i].data
                .map(function(ele) {
                  return ele.value;
                })
                .sort(function(a, b) {
                  return a - b;
                })
            }
          ]
        });
      }
      this.myChart.setOption(option, true);
      this.rankData.shift();
      // console.log(this.rankData);
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
