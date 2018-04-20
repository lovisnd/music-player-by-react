// import _ from 'lodash';
import { cube } from './math.js';
import printMe from './print.js';
import './style.css'

function component() {
  var element = document.createElement('pre');
  var btn = document.createElement('button');
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = [
    'Hello webpack webpack-dev-server!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);
  return element;
}

let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);


if (module.hot) {
	module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
   })
}