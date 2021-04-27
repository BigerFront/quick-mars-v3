<template>
  <div class="intro-container">
    <div class="wrap">
      <header>
        <div class="weather">
          <img :src="imgSrc" />
          <span class="tem">{{ weatcherData.tem }}°C</span>
          <span class="wea">{{ weatcherData.wea }}</span>
        </div>
        <h2>{{ title }}</h2>
        <div class="time-box">
          <span class="time">{{ nowTime }}</span>
          <span class="date">
            <span>{{ week }}</span>
            <span>{{ date }}</span>
          </span>
        </div>
      </header>
      <!-- main box -->
      <section class="main-box">
        <div class="item left">
          <div class="panel">
            <h2>营收状况</h2>
            <income />
            <div class="pannel-footer"></div>
          </div>
          <div class="panel">
            <h2>业务范围</h2>
            <business />
            <div class="panel-footer"></div>
          </div>
          <div class="panel">
            <h2>人才队伍</h2>
            <talent />
            <div class="panel-footer"></div>
          </div>
        </div>

        <div class="item center">
          <div class="resume">
            <div class="resume-hd">
              <ul>
                <li>
                  <count-to
                    :startVal="startVal"
                    :endVal="490"
                    :duration="6000"
                    separator=""
                  ></count-to>
                </li>
                <li>
                  <count-to
                    :startVal="startVal"
                    :endVal="63"
                    :duration="6000"
                    separator=""
                  ></count-to>
                </li>
                <li>
                  <count-to
                    :startVal="startVal"
                    :endVal="4300"
                    :duration="7800"
                    separator=""
                  ></count-to>
                </li>
              </ul>
            </div>
            <div class="resume-bd">
              <ul>
                <li>公司总人数（单位：人）</li>
                <li>技术人员占比（单位：%）</li>
                <li>产品投资额（单位：万元）</li>
              </ul>
            </div>
          </div>

          <div class="map">
            <div class="chart" ref="chartChinaMap"></div>
            <div class="map1"></div>
            <div class="map2"></div>
            <div class="map3"></div>
          </div>
        </div>

        <div class="item right">
          <div class="panel">
            <h2>产品热词</h2>
            <word-cloud />
            <div class="panel-footer"></div>
          </div>

          <div class="panel">
            <h2>客户分布</h2>
            <distribution />
            <div class="panel-footer"></div>
          </div>
          <div class="panel">
            <h2>发展历程</h2>
            <history />
            <div class="panel-footer"></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// import * as dayjs from 'dayjs';
import CountTo from 'vue-count-to';
// import '@ui/js/flexible';
import { flexibleOn, flexibleOff } from '@ui/js/flexable';
// import '@ui/js/dash-flexible.umd';

import '@ui/js/china';

import {
  GeoCoordMap,
  changshaXA,
  changshaXN,
  bjYCD,
  getGeoMapOption,
  convertAirlineSeries,
} from './js/geo-coordmap-data';

// import {} from '@ui/echarts/mockdata';

import Income from '@ui/echarts/companysummary/income';
import WordCloud from '@ui/echarts/companysummary/WordCloud';
import business from '@ui/echarts/companysummary/business';
import distribution from '@ui/echarts/companysummary/distribution';
import history from '@ui/echarts/companysummary/history';
import talent from '@ui/echarts/companysummary/talent';

export default {
  name: 'AnalysisIntro',
  components: {
    Income,
    CountTo,
    WordCloud,
    business,
    distribution,
    history,
    talent,
  },
  data() {
    return {
      title: '北京区块链科技公司统计',
      weatcherData: {
        tem: 24.5,
        wea: '多云',
      },
      nowTime: '',
      week: '',
      date: '',
      timer: null,
      imgSrc: '',
      startVal: 0,
      geoCoordMap: {},
      XAData: [...changshaXA],
      XNData: [...changshaXN],
      YCData: [...bjYCD],
    };
  },
  computed: {},
  beforeMount() {
    flexibleOn(window, document);
  },
  mounted() {
    this.timer = setInterval(() => {
      this.getWeather();
    }, 1000 * 60 * 60);

    this.$nextTick(() => {
      this.getWeather();
      this.nowTimes();
      this.drawChinaMap();
    });
  },
  methods: {
    timeformatter(ts) {
      this.week = this.dayjs(ts).format('dddd');
      this.date = this.dayjs(ts).format('YYYY-MM-DD');
      this.nowTime = this.dayjs(ts).format('HH:mm:ss');
    },
    nowTimes() {
      this.timeformatter(new Date());
      setInterval(this.nowTimes, 1000);
      this.clear();
    },
    clear() {
      clearInterval(this.nowTimes);
      this.nowTimes = null;
    },
    getWeather() {
      // 第三方天气api接口
      this.imgSrc = require('./img/brand/xue.png');
      axios
        .get('/api', {
          params: {
            appid: '26148275',
            appsecret: '2id6H48Y',
            version: 'v6',
          },
        })
        .then((res) => {
          if (res.data && res.data.errcode !== 100) {
            if (res.data.wea_img == 'xue') {
              this.imgSrc = require('./img/brand/xue.png');
            } else if (res.data.wea_img == 'yin') {
              this.imgSrc = require('./img/brand/yin.png');
            } else if (
              res.data.wea_img == 'yu' ||
              res.data.wea_img == 'bingbao'
            ) {
              this.imgSrc = require('./img/brand/yu.png');
            } else if (res.data.wea_img == 'yun') {
              this.imgSrc = require('./img/brand/yun.png');
            } else if (res.data.wea_img == 'wu') {
              this.imgSrc = require('./img/brand/wu.png');
            } else if (res.data.wea_img == 'shachen') {
              this.imgSrc = require('./img/brand/shachen.png');
            } else if (res.data.wea_img == 'lei') {
              this.imgSrc = require('.//img/brand/lei.png');
            } else {
              this.imgSrc = require('./img/brand/qing.png');
            }
            this.weatcherData = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    drawChinaMap() {
      let echarts = this.$echarts;
      let qkChart = echarts.init(this.$refs.chartChinaMap);
      this.geoCoordMap = GeoCoordMap;
      let colors = ['#fff', '#fff', '#fff']; //航线的颜色
      let comboData = [
        ['长沙', this.XAData],
        ['长沙', this.XNData],
        ['北京', this.YCData],
      ];
      let series = convertAirlineSeries(comboData, colors, GeoCoordMap);
      let option = getGeoMapOption(series);

      qkChart.setOption(option, true);
      window.addEventListener('resize', () => {
        qkChart.resize();
      });
    },
  },
  beforeDestroy() {
    flexibleOff(window, document);
  },
};
</script>
<style lang="scss" scoped>
.intro-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;

  .wrap {
    background: url(./img/brand/bg.jpg) no-repeat #000;
    background-size: cover;
    line-height: 1.15;

    header {
      position: relative;
      height: 1rem;
      background: url(./img/brand/head_bg.png) no-repeat top center;
      background-size: 100% 100%;

      h2 {
        color: #7ef0ff;
        font-size: 0.475rem;
        text-align: center;
        line-height: 0.75rem;
        letter-spacing: 1px;
      }

      .weather {
        position: absolute;
        left: 1.375rem;
        top: 0.35rem;
        font-size: 0.25rem;
        color: rgba(126, 240, 255, 0.7);
        img {
          width: 0.45rem;
        }
        span {
          display: inline-block;
        }
        .tem {
          margin: 0 0.1rem 0 0.2rem;
        }
      }

      .time-box {
        position: absolute;
        right: 1.375rem;
        top: 0.5rem;
        color: rgba(126, 240, 255, 0.7);
        display: flex;
        .time {
          font-size: 0.28rem;
          margin-right: 0.18rem;
        }
        .date {
          span {
            display: block;
            &:nth-child(1) {
              font-size: 0.12rem;
              text-align: right;
            }
            &:nth-child(2) {
              font-size: 0.14rem;
            }
          }
        }
      }
    }

    .main-box {
      min-width: 1024px;
      max-width: 1920px;
      padding: 0.125rem 0.125rem 0;
      display: flex;

      .item {
        flex: 3;

        &.center {
          flex: 5;
          margin: 0 0.125rem 0.1rem;
          overflow: hidden;

          .resume {
            background: rgba(101, 132, 226, 0.1);
            padding: 0.1875rem;
            .resume-hd {
              position: relative;
              border: 1px solid rgba(25, 186, 139, 0.17);
              ul {
                display: flex;
                %li-line {
                  content: '';
                  position: absolute;
                  height: 50%;
                  width: 1px;
                  background: rgba(255, 255, 255, 0.2);
                  top: 25%;
                }
                li {
                  position: relative;
                  flex: 1;
                  text-align: center;
                  height: 1.2rem;
                  line-height: 1.2rem;
                  font-size: 0.65rem;
                  color: #ffeb7b;
                  padding: 0.05rem 0;
                  font-weight: bold;
                  &:nth-child(2) {
                    &:after {
                      @extend %li-line;
                      right: 0;
                    }
                    &:before {
                      @extend %li-line;
                      left: 0;
                    }
                  }
                }
              }
              &:before {
                content: '';
                position: absolute;
                width: 30px;
                height: 10px;
                border-top: 2px solid #02a6b5;
                border-left: 2px solid #02a6b5;
                top: 0;
                left: 0;
              }
              &:after {
                content: '';
                position: absolute;
                width: 30px;
                height: 10px;
                border-bottom: 2px solid #02a6b5;
                border-right: 2px solid #02a6b5;
                right: 0;
                bottom: 0;
              }
            }
            .resume-bd {
              ul {
                display: flex;
                li {
                  flex: 1;
                  height: 0.5rem;
                  line-height: 0.5rem;
                  text-align: center;
                  font-size: 0.225rem;
                  color: rgba(255, 255, 255, 0.7);
                  padding-top: 0.125rem;
                }
              }
            }
          }
        }

        %map-style {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 6.475rem;
          height: 6.475rem;
          background: url(./img/brand/map.png) no-repeat;
          background-size: 100% 100%;
          opacity: 0.3;
        }

        .map {
          position: relative;
          height: 10.125rem;
          .chart {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 5;
            height: 10.125rem;
            width: 100%;
          }
          .map1 {
            @extend %map-style;
          }
          .map2 {
            @extend %map-style;
            width: 8.0375rem;
            height: 8.0375rem;
            background-image: url(./img/brand/lbx.png);
            opacity: 0.6;
            -webkit-animation: rotate 15s linear infinite;
            animation: rotate 15s linear infinite;
            z-index: 2;
          }
          .map3 {
            @extend %map-style;
            width: 7.075rem;
            height: 7.075rem;
            background-image: url(./img/brand/jt.png);
            -webkit-animation: rotate1 10s linear infinite;
            animation: rotate1 10s linear infinite;
          }
        }

        .panel {
          position: relative;
          height: 3.875rem;
          border: 1px solid rgba(25, 186, 139, 0.17);
          background: rgba(255, 255, 255, 0.04) url(./img/brand/line.png);
          padding: 0 0.1875rem 0;
          margin-bottom: 0.1875rem;
          &:before {
            position: absolute;
            top: 0;
            left: 0;
            content: '';
            width: 10px;
            height: 10px;
            border-top: 2px solid #02a6b5;
            border-left: 2px solid #02a6b5;
          }
          &:after {
            position: absolute;
            top: 0;
            right: 0;
            content: '';
            width: 10px;
            height: 10px;
            border-top: 2px solid #02a6b5;
            border-right: 2px solid #02a6b5;
          }

          .panel-footer {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            &:before {
              position: absolute;
              bottom: 0;
              left: 0;
              content: '';
              width: 10px;
              height: 10px;
              border-bottom: 2px solid #02a6b5;
              border-left: 2px solid #02a6b5;
            }
            &:after {
              position: absolute;
              bottom: 0;
              right: 0;
              content: '';
              width: 10px;
              height: 10px;
              border-bottom: 2px solid #02a6b5;
              border-right: 2px solid #02a6b5;
            }
          }

          h2 {
            height: 0.6rem;
            line-height: 0.6rem;
            text-align: center;
            color: #fff;
            font-size: 0.225rem;
            font-weight: 400;
            a {
              margin: 0 0.1875rem;
              color: #fff;
              text-decoration: none;
            }
          }

          .chart {
            height: 3rem;
          }
        }
      }
    }
  }
}

@media (min-width: 1904px) {
  .container {
    max-width: 1904px;
  }
}

@-webkit-keyframes rotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes rotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@-webkit-keyframes rotate1 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
@keyframes rotate1 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

@media screen and (max-width: 1024px) {
  html {
    font-size: 42px !important;
  }
}
@media screen and (min-width: 1920) {
  html {
    font-size: 80px !important;
  }
}
</style>
