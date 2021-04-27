<template>
  <div class="talent-container">
    <div class="chart" ref="telentChartId"></div>
  </div>
</template>

<script>
import {
  telentDataTransfer,
  piedoughnutOptTrans,
} from '@ui/echarts/data-transfer';
import { telentMockData } from '@ui/echarts/mockdata/intro-mockdata';
export default {
  name: 'TelentChart',
  components: {},
  data() {
    return {
      scaleData: [],
    };
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      this.drawchart();
    });
  },
  methods: {
    drawchart() {
      const echarts = this.$echarts;
      let qkChart = echarts.init(this.$refs.telentChartId);
      this.scaleData = telentMockData;
      let colors = [
        '#00ffff',
        '#00cfff',
        '#006ced',
        '#ffe000',
        '#ffa800',
        '#ff5b00',
        '#ff3000',
      ];

      let placeHolderStyle = {
        normal: {
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0,
        },
      };

      let option = piedoughnutOptTrans(
        telentDataTransfer(this.scaleData, colors, placeHolderStyle),
      );

      qkChart.setOption(option, true);

      window.addEventListener('resize', () => {
        qkChart.resize();
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.talent-container {
  .chart {
    height: 3rem;
  }
}
</style>
