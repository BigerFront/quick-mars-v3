import { getRandomColors } from './utils';

export const telentDataTransfer = (
  scaleData,
  colors = [],
  placeHolderStyle = {},
) => {
  let _placeHolderStyle = {
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

  let resData = [];
  const dataLen = scaleData && scaleData.length ? scaleData.length : 0;
  if (dataLen === 0) return resData;
  let _colors = Object.assign([], colors);
  if (dataLen > colors.length) {
    let diffColors = getRandomColors(dataLen - colors.length, 100);

    _colors = [...colors, ...diffColors];
  }

  for (let i = 0; i < dataLen; i++) {
    resData.push(
      {
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
          normal: {
            borderWidth: 6,
            shadowBlur: 10,
            borderColor: _colors[i],
            shadowColor: _colors[i],
          },
        },
      },
      {
        value: 2,
        name: '',
        itemStyle: Object.assign(_placeHolderStyle, placeHolderStyle),
      },
    );
  }

  return resData;
};

export const piedoughnutOptTrans = (scaleData = [], rich = {}) => {
  let _rich = Object.assign(
    {
      white: {
        color: '#ddd',
        align: 'center',
        padding: [3, 0],
      },
    },
    rich,
  );
  let option = {
    series: [
      {
        name: '',
        type: 'pie',
        clockWise: false,
        radius: ['66%', '68%'],
        center: ['50%', '50%'],
        hoverAnimation: false,
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'outside',
              color: '#ddd',
              formatter: (params) => {
                let percent = 0;
                let total = 0;
                for (let i = 0; i < scaleData.length; i++) {
                  total += scaleData[i].value;
                }
                percent = ((params.value / total) * 100).toFixed(0);
                if (params.name !== '') {
                  return params.name + '\n{white|' + '占比' + percent + '%}';
                } else {
                  return '';
                }
              },
              rich: _rich,
            },
            labelLine: {
              length: 10,
              length2: 30,
              show: true,
              color: '#00ffff',
            },
          },
        },
        data: scaleData,
      },
    ],
  };

  return option;
};

/* wordcloud */
export const wordcloudOptTrans = (originData = []) => {
  let option = {
    series: [
      {
        type: 'wordCloud',
        gridSize: 1,
        sizeRange: [12, 50],
        rotationRange: [-90, 90],
        rotationStep: 45,
        shape: 'diamond',
        width: '90%',
        textPadding: 0,
        autoSize: {
          enable: true,
          minSize: 6,
        },
        textStyle: {
          normal: {
            textBorderColor: 'rgba(255,255,255,0.3)',
            textBorderWidth: 1,
            color: () => {
              return (
                'rgb(' +
                [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                ].join(',') +
                ')'
              );
            },
          },
          emphasis: {
            fontSize: 12,
            // shadowBlur: 10,
            // shadowColor: 'rgba(255,255,255, .1)'
          },
        },
        data: originData,
      },
    ],
  };

  return option;
};

/* Business */
export const businessOptTrans = (
  dataList = [],
  lineYData = [],
  colors = [],
) => {
  let opts = {
    color: colors,
    tooltip: {
      trigger: 'item',
    },
    grid: {
      borderWidth: 0,
      top: '5%',
      left: '2%',
      right: '2%',
      bottom: '0%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'value',
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: 'category',
        inverse: true,
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          inside: false,
          textStyle: {
            color: '#b3ccf8',
            fontSize: 13,
          },
        },
        data: dataList,
      },
      {
        type: 'category',
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: true,
          inside: false,
          textStyle: {
            color: '#b3ccf8',
            fontSize: 13,
          },
          formatter: (val) => {
            return `${val}`;
          },
        },
        splitArea: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        data: dataList.reverse(),
      },
    ],
    series: [
      {
        name: '',
        type: 'bar',
        zlevel: 2,
        barWidth: '10px',
        data: lineYData,
        animationDuration: 1500,
        label: {
          normal: {
            color: '#b3ccf8',
            show: false,
            position: [0, '-15px'],
            textStyle: {
              fontSize: 13,
            },
            formatter: (a, b) => {
              return a.name;
            },
          },
        },
      },
    ],
  };

  return opts;
};
