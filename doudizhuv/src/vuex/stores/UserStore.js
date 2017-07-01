import Vue from 'vue';
import Vuex from 'vuex';
import {getLoginbean} from '../actions/UserAction'
Vue.use(Vuex);			//vuex初始化

let userStore = new Vuex.Store({
  state:{			//存储空间
    loginbean:null
  },
  mutations:{			//事件响应，修改存储的方法集
    zhuce:function(state,data){
      state.loginbean = data;
    },
    login:function(state,data){
      state.loginbean = data;
    },
    
  }
});
userStore.getLoginbean= async function(){
  let loginbean=this.state.loginbean;
  alert(loginbean);
  if(loginbean!=null){
    return loginbean;
  }else{
    alert('重新获取loginbean');
    return await getLoginbean();
  }
}
export default userStore;