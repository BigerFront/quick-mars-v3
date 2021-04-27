<template>
  <div class="wc-container">
    <div class="chart" ref="ProductionWordcloud"></div>
  </div>
</template>

<script>
import 'echarts-wordcloud';

import { wordcloudMockData } from '../mockdata/intro-mockdata';
import { wordcloudOptTrans } from '../data-transfer';

export default {
  name: 'WordCloud',
  components: {},
  data() {
    return {
      timer: null,
    };
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      this.drawChart();
      this.timer = setInterval(() => {
        this.drawChart();
      }, 7000);
    });
  },
  methods: {
    drawChart() {
      const echarts = this.$echarts;
      let qkChart = echarts.init(this.$refs['ProductionWordcloud']);
      let option = wordcloudOptTrans(wordcloudMockData);
      qkChart.setOption(option, true);
      window.addEventListener('resize', () => {
        qkChart.resize();
      });
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>
<style lang="scss" scoped>
.wc-container {
  .chart {
    height: 3rem;
  }
}
</style>
