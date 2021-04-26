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
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AnalysisIntro',
  components: {},
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
    };
  },
  computed: {},
  mounted() {
    this.getWeather();
    this.timer = setInterval(() => {
      this.getWeather();
    }, 1000 * 60 * 60);

    this.nowTimes();
  },
  methods: {
    timeformatter(ts) {
      let newDate = new Date(ts);
      let year = newDate.getFullYear();
      let month =
        newDate.getMonth() + 1 < 10
          ? '0' + (newDate.getMonth() + 1)
          : newDate.getMonth() + 1;
      let date =
        newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate();
      let hh =
        newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours();
      let mm =
        newDate.getMinutes() < 10
          ? '0' + newDate.getMinutes()
          : newDate.getMinutes();
      let ss =
        newDate.getSeconds() < 10
          ? '0' + newDate.getSeconds()
          : newDate.getSeconds();
      let week = newDate.getDay();
      let weeks = ['日', '一', '二', '三', '四', '五', '六'];
      let getWeek = '星期' + weeks[week];
      this.week = getWeek;
      this.date = year + '.' + month + '.' + date;
      this.nowTime = hh + ':' + mm + ':' + ss;
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
          console.log(res);
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
      height: 4rem;
      background: url(./img/brand/head_bg.png) no-repeat top center;
      background-size: 100% 100%;

      h2 {
        color: #7ef0ff;
        font-size: 2.75rem;
        text-align: center;
        line-height: 3.75rem;
        letter-spacing: 1px;
      }

      .weather {
        position: absolute;
        left: 3.375rem;
        top: 1.35rem;
        font-size: 0.25rem;
        color: rgba(126, 240, 255, 0.7);
        img {
          width: 0.95rem;
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
        right: 3.375rem;
        top: 0.95rem;
        color: rgba(126, 240, 255, 0.7);
        display: flex;
        .time {
          font-size: 0.28rem;
          margin-right: 0.58rem;
        }
        .date {
          span {
            display: block;
            &:nth-child(1) {
              font-size: 0.22rem;
              text-align: right;
            }
            &:nth-child(2) {
              font-size: 0.14rem;
            }
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
</style>
