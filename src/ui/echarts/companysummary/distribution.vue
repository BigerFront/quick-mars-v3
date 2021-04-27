<template>
  <div class="distribution-container">
    <div class="chart" ref="distributionChart"></div>
  </div>
</template>

<script>
export default {
  name: 'Distribution',
  components: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      this.drawchart();
    });
  },
  methods: {
    drawchart() {
      let echarts = this.$echarts;
      let qkChart = echarts.init(this.$refs.distributionChart);
      let option = {
        color: [
          '#EAEA26',
          '#906BF9',
          '#FE5656',
          '#01E17E',
          '#3DD1F9',
          '#FFAD05',
          '#4465fc',
        ],
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)',
        },
        polar: {},
        angleAxis: {
          interval: 1,
          type: 'category',
          data: [],
          z: 10,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#0B4A6B',
              width: 5,
              type: 'solid',
            },
          },
          axisLabel: {
            interval: 0,
            show: true,
            color: '#0B4A6B',
            margin: 8,
            fontSize: 16,
          },
        },
        radiusAxis: {
          min: 40,
          max: 120,
          interval: 20,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#0B3E5E',
              width: 1,
              type: 'solid',
            },
          },
          axisLabel: {
            formatter: '{value} %',
            show: false,
            padding: [0, 0, 20, 0],
            color: '#0B3E5E',
            fontSize: 16,
          },
          splitLine: {
            lineStyle: {
              color: '#0B3E5E',
              width: 2,
              type: 'solid',
            },
          },
        },
        calculable: true,
        series: [
          {
            type: 'pie',
            radius: ['6%', '10%'],
            hoverAnimation: false,
            labelLine: {
              normal: {
                show: false,
                length: 30,
                length2: 50,
              },
              emphasis: {
                show: false,
              },
            },
            tooltip: {
              show: false,
            },
            data: [
              {
                name: '',
                value: 0,
                itemStyle: {
                  normal: {
                    color: '#0B4A6B',
                  },
                },
              },
            ],
          },
          {
            type: 'pie',
            radius: ['90%', '95%'],
            hoverAnimation: false,
            labelLine: {
              normal: {
                show: false,
                length: 30,
                length2: 50,
              },
              emphasis: {
                show: false,
              },
            },
            tooltip: {
              show: false,
            },
            data: [
              {
                name: '',
                value: 0,
                itemStyle: {
                  normal: {
                    color: '#0B4A6B',
                  },
                },
              },
            ],
          },
          {
            stack: 'a',
            type: 'pie',
            radius: ['20%', '80%'],
            roseType: 'area',
            zlevel: 10,
            label: {
              normal: {
                show: true,
                formatter: '{b}',
                textStyle: {
                  fontSize: 12,
                },
                position: 'outside',
              },
              emphasis: {
                show: false,
              },
            },
            labelLine: {
              normal: {
                show: true,
                length: 15,
                length2: 50,
                lineStyle: {
                  type: 'dotted',
                },
              },
              emphasis: {
                show: true,
              },
            },
            data: [
              {
                value: 35,
                name: '湖南',
              },
              {
                value: 28,
                name: '河北',
              },
              {
                value: 23,
                name: '广东',
              },
              {
                value: 18,
                name: '四川',
              },
              {
                value: 13,
                name: '浙江',
              },
              {
                value: 8,
                name: '江苏',
              },
              {
                value: 5,
                name: '湖北',
              },
            ],
          },
        ],
      };

      qkChart.setOption(option, true);

      window.addEventListener('resize', () => {
        qkChart.resize();
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.distribution-container {
  .chart {
    height: 3rem;
  }
}
</style>
