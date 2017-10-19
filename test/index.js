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
      this.$toast('toast-无参数');
      setTimeout(() => {
        this.$toast('toast-对象参数',{duration:2000});
      },2000);
      setTimeout(() => {
        Vue.toast('toast-回调函数',function(){
          alert('回调函数');
        });
      },4000);
    }
  },
  components: {
    
  }
});

