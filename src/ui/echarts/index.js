import ECharts from 'vue-echarts';
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';

import { CanvasRenderer, SVGRenderer } from 'echarts/renderers';
import {
  BarChart,
  LineChart,
  PieChart,
  MapChart,
  RadarChart,
  ScatterChart,
  EffectScatterChart,
  LinesChart,
} from 'echarts/charts';

import {
  GridComponent,
  PolarComponent,
  GeoComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent,
} from 'echarts/components';

echarts.use([
  CanvasRenderer,
  SVGRenderer,
  BarChart,
  LineChart,
  PieChart,
  MapChart,
  RadarChart,
  ScatterChart,
  EffectScatterChart,
  LinesChart,
  PolarComponent,
  GeoComponent,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent,
]);

function registEcharts(Vue) {
  Vue.component('v-chart', ECharts);
  Vue.prototype.$echarts = echarts;
}
export default registEcharts;
