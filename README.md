## vue-toast
a modified version from vue-easytoast

### Install

```bash
npm install vue-toast5 -S

yarn add vue-toast5
```

### QuickStart
```javascript
require('vue-toast5/dist/vue-toast.css');

// in ES6 modules
import toast from 'vue-toast5';

// in CommonJS
const toast = require('vue-toast5');

// in Global variable
const toast = VueToast.default;

Vue.use(toast);
```
```javascript
this.$toast('toast-无参数');
this.$toast('toast-对象参数',{duration:2000});
Vue.toast('toast-回调函数',function(){
    alert('回调函数');
});
```

### Params

Parameter | Type |Default| Description
--------- | ---- | ------|-----------
id | `string` |  | the toast's id
msg | `string` |  | the message showed in toast
callback | `function` |  | the callback function after toast hide
parent | `string`| `body` | the parent element to insert toast element
className | `string`, `array` | | a custom class for toast
horizontalPosition | `string` | `center` | Position horizontal of toast. There are 3 pre-defined positions: `center`,`left`,`right`
verticalPosition | `string` | `middle` | Position vertical of toast. There are 3 pre-defined positions: `middle`,`top`,`bottom`
duration | `number` | 2000 | how long time the toast show,unit is milliscond
mode | `string` | `override` | `override` or `queue`. If `override`, the last toast will forcibly flush previous
transition | `string` | `fade` | Built-in transitions: `fade`, `slide-[up/down/left/right]`. See also [Transitions](http://v1.vuejs.org/guide/transitions.html)

### methods

- `Vue.clearToast([id])`：remove all toast or special toast by id

### Preview

![toast image](./doc/toast.png)