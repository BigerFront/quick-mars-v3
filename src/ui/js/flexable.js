export function flexibleOn(window, document) {
  // 返回文档的root元素
  const docEl = document.documentElement;
  // 获取设备的dpr，即当前设置下物理像素与虚拟像素的比值
  let dpr = window.devicePixelRatio || 1;
  setRemUnit(docEl);

  // 当页面展示或重新设置大小的时候，触发重新
  window.addEventListener('resize', setRemUnit, true);
  window.addEventListener('pageshow', dashPageShow, true);

  checkDPRSupport(dpr, docEl);
  setBodyFontSize(dpr);
}

export function flexibleOff(window, document) {
  // 返回文档的root元素
  const docEl = document.documentElement;
  window.removeEventListener('resize', setRemUnit, true);
  window.removeEventListener('pageshow', dashPageShow, true);
  docEl.style.fontSize = '';
}

(function init(window, document) {
  flexibleOn(window, document);
})(window, document);

// flexibleOn(window, document);

// 设置默认字体大小，默认的字体大小继承自body
function setBodyFontSize(dpr) {
  if (document.body) {
    // 调整body标签的fontSize，fontSize = (12 * dpr) + 'px'
    document.body.style.fontSize = 12 * dpr + 'px';
  } else {
    document.addEventListener('DOMContentLoaded', setBodyFontSize);
  }
}

// set 1rem = viewWidth / 24
function setRemUnit(docEl) {
  // 设置root元素的fontSize = 其clientWidth / 24 + 'px'
  var rem = docEl.clientWidth / 24;
  console.log('>>>>>>>>>>>>>>>', rem);
  docEl.style.fontSize = rem + 'px';
}

function dashPageShow(e) {
  if (e.persisted) {
    setRemUnit();
  }
}

function checkDPRSupport(dpr, docEl) {
  // 检测0.5px的支持，支持则root元素的class中有hairlines
  if (dpr >= 2) {
    let fakeBody = document.createElement('body');
    let testElement = document.createElement('div');
    testElement.style.border = '.5px solid transparent';
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines');
    }
    docEl.removeChild(fakeBody);
  }
}
