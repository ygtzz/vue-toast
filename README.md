## vue-toast
a modified version from vue-easytoast

### Install

```bash
npm install vue-toast5 -S

yarn add vue-toast5
```

### QuickStart
```javascript
require('vue-toast/dist/vue-toast.css');

// in ES6 modules
import toast from 'vue-toast';

// in CommonJS
const toast = require('vue-toast');

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

- `id`: the toast's id
- `msg`: the message showed in toast
- `duration`: how long time the toast show,default is 2000,unit is milliscond
- `callback`: the callback function after toast hide
- `className`: a custom class for toast
- `parent`: the parent element to insert toast element,default is body
- `transition`: toast popup transition effect,default is fade,other option is slide

### Preview

![toast image](./doc/toast.png)