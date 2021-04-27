/**
 * Math.round(Math.random()*10); 基本均衡获取 0 到 10 的随机整数，其中获取最小值 0 和最大值 10 的几率少一半。
 * Math.floor(Math.random()*10);    // 可均衡获取 0 到 9 的随机整数。
 * Math.ceil(Math.random()*10);     // 获取从 1 到 10 的随机整数，取 0 的概率极小。
 */
/**
 * @function lightColorGen - 亮色生成器
 * @param { Number } minLight - 最低亮度，在[0, 100]区间
 * @returns { String } 颜色
 */
export function lightColorGen(minLight) {
  const { random } = Math;
  const mH = 360, // 色相环角度范围
    mS = 100, // 饱和度范围
    mL = 100 - minLight; // 亮度范围
  const H = ~~mH * random(),
    S = ~~mS * random(),
    L = minLight + ~~mL * random();

  let r, g, b;
  if (S === 0) {
    r = g = b = 1; //achromatic
  } else {
    const toRGB = function (p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    let Q = L < 0.5 ? L * (1 + S) : L + S - L * S;
    let P = 2 * L - Q;

    r = toRGB(P, Q, H + 1 / 3);
    g = toRGB(P, Q, H);
    b = toRGB(P, Q, H - 1 / 3);
  }

  let rHex = Math.round(r * 255).toString(16);
  rHex.length < 2 && (rHex = '0' + rHex);
  let gHex = Math.round(g * 255).toString(16);
  gHex.length < 2 && (gHex = '0' + gHex);
  let bHex = Math.round(b * 255).toString(16);
  bHex.length < 2 && (bHex = '0' + bHex);

  let randomHex = `#${rHex}${gHex}${bHex}`;

  return randomHex;
}

/**
 *
 * @param {*} len
 * @param {*} minLight 最低亮度
 */
export const getRandomColors = (len = 1, minLight = 100) => {
  let colors = [];
  if (!len) return colors;
  for (let i = 0; i < len; i++) {
    let hex = lightColorGen(minLight);

    colors.push(hex);
  }

  return colors;
};
