import EasyToastVue from './EasyToast.vue'
import assign from 'object-assign';

export default {
  install(Vue, defaultOptions = {}) {
    const CONSTRUCTOR = Vue.extend(EasyToastVue)
	const CACHE = {}
    assign(EasyToastVue.DEFAULT_OPT, defaultOptions)

    function toast() {
		const args = arguments,
			  toString = Object.prototype.toString;
		let options = {},
			msg = '',
			callback = '';
		if(toString.call(args[0]) == '[object String]' &&
			toString.call(args[1]) == '[object Function]'
		){
			msg = args[0];
			callback = args[1],
			options = args[2] || {};
			options.callback = callback;
		}
		else if(toString.call(args[0]) == '[object String]'){
			msg = args[0];
			options = args[1] || {};
		}
		else{
			throw new Error('[toast]: params is not correct');
		}
		options.msg = msg;
		let toast = CACHE[options.id] || (CACHE[options.id] = new CONSTRUCTOR)
		if (!toast.$el) {
			let vm = toast.$mount()
			document.querySelector(options.parent || 'body').appendChild(vm.$el)
		}
		options = assign({},EasyToastVue.DEFAULT_OPT,options);
		toast.queue.push(options)
	}
	Vue.toast = Vue.prototype.$toast = toast;
	Vue.clearToast = Vue.prototype.$clearToast = function(id){
		if(id){
			removeChild(id);
		}
		else{
			Object.keys(CACHE).forEach(item => {
				removeChild(item);
            });
		}
	}
  }
}

function removeChild(id){
	var self = document.getElementById(id),
		parent = null,
		removed = null;
	if(self){
		parent = self.parentElement;
		removed = parent.removeChild(self);
	}
	return removed;
}
