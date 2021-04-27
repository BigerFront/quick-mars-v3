<template>
  <div class="biz-container">
    <div class="chart" ref="bizHotWordcloud"></div>
  </div>
</template>

<script>
import { businessOptTrans } from '../data-transfer';
export default {
  name: 'Business',
  components: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      this.drawChart();
    });
  },
  methods: {
    drawChart() {
      const echarts = this.$echarts;
      let qkChart = echarts.init(this.$refs.bizHotWordcloud);
      let charts = {
        // 按顺序排列从大到小
        cityList: [
          '金融行业',
          '电子政务',
          '文创版权',
          '教育行业',
          '智慧停车',
          '医疗互联',
          '物流行业',
        ],
        cityData: [1500, 1200, 900, 600, 400, 300, 100],
      };
      let top10CityList = charts.cityList;
      let top10CityData = charts.cityData;
      let color = [
        'rgba(14,109,236',
        'rgba(255,91,6',
        'rgba(100,255,249',
        'rgba(248,195,248',
        'rgba(110,234,19',
        'rgba(255,168,17',
        'rgba(218,111,227',
      ];

      let lineY = [];
      for (let i = 0; i < charts.cityList.length; i++) {
        let x = i;
        if (x > color.length - 1) {
          x = color.length - 1;
        }
        let data = {
          name: charts.cityList[i],
          color: color[x] + ')',
          value: top10CityData[i],
          itemStyle: {
            normal: {
              show: true,
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                1,
                0,
                [
                  {
                    offset: 0,
                    color: color[x] + ', 0.3)',
                  },
                  {
                    offset: 1,
                    color: color[x] + ', 1)',
                  },
                ],
                false,
              ),
              barBorderRadius: 10,
            },
            emphasis: {
              shadowBlur: 15,
              shadowColor: 'rgba(0, 0, 0, 0.1)',
            },
          },
        };
        lineY.push(data);
      }

      let option = businessOptTrans(top10CityList, lineY, color);

      qkChart.setOption(option, true);

      window.addEventListener('resize', () => {
        qkChart.resize();
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.biz-container {
  .chart {
    height: 3rem;
  }
}
</style>
