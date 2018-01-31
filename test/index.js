const toast = VueToast.default;

Vue.use(toast);

new Vue({
  name:'c-app',
  el: '#container',
  created() {
      
  },
  data() {
    return {
      
    }
  },
  methods:{
    fToast(){
		var self = this;
		this.$toast('toast-无参数');
		setTimeout(() => {
			this.$toast('toast-对象参数',{duration:2000});
		},2000);
		setTimeout(() => {
			Vue.toast('toast-回调函数',function(){
				Vue.toast('回调函数');
			});
		},4000);
		self.$toast('20s的toast',{duration:20000,id:20});
		setTimeout(function(){
			Vue.toast('关闭20');
			Vue.clearToast(20);
		},3000);
		setTimeout(function(){
			self.$toast('30s的toast',{duration:30000,id:30,horizontalPosition:'left'});
			self.$toast('40s的toast',{duration:40000,id:40,horizontalPosition:'right'});
			setTimeout(function(){
				Vue.toast('关闭所有');
				Vue.clearToast();
			},3000);
		},4000);
    }
  },
  components: {
    
  }
});

