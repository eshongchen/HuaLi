<template>
  <div>
    <div>
      <Header></Header>
    </div>
    <div class="login_warpper">
        <div class="login-box">
            <div class="ml-4" id="app">
                <!-- <span class="icon icon-iphone"></span> -->
                <input class="input-box" v-model="uname" type="text" name="" placeholder="请输入用户名">
            
                <!-- <span class="icon icon-iphone"></span> -->
                <input class="input-box" v-model="upwd" type="password" name="" placeholder="请输入密码">

                <button class="login_btn" @click="login()">登录</button>
            </div>

        </div>
    </div>
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>

import {mapMutations} from 'vuex';
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  components:{
    Header,
    Footer
  },
 
  data(){
    return{
      uname:'',
      upwd:'',
      
    }
  },
  methods:{
     ...mapMutations([
            'logined'
        ]),
    login(){
      if(this.uname.length<6||this.uname.length>10){
        alert("请输入6-8位的用户名");
        return false;
      }else if(this.upwd.length<6||this.upwd.length>10){
        alert("请输入6-8位的密码")
      }else{
        console.log(this.uname+' '+this.upwd);
        this.axios.post('/login?','uname='+this.uname+'&upwd='+this.upwd).then(res=>{
          if(res.data.code==1){
             //登录成功,修改state的状态
                    this.logined({id:res.data.result[0].uid,username:res.data.result[0].uname});
                    
                    //将服务器返回id,username等相关信息存储到webstorage中
                    console.log(res.data.result)
                    sessionStorage.setItem('id',res.data.result[0].uid);
                    sessionStorage.setItem('username',res.data.result[0].uname);
                    sessionStorage.setItem('isLogined',true);

                    this.$router.push('/')
                    
          }else if(res.data.code==0){
            alert("用户名或密码输入错误");
          }
        });
      }
    }
  }

  
}


</script>
<style  scoped>
 .login_warpper{

    width: 100%;
    height: 474px;
    background-image: url(http://img02.hua.com/pc/assets/img/login_bg.jpg);
    background-size: cover;
    background-position: 50% 0;
    background-repeat: no-repeat;
}
.login-box {
    position: relative;
    width: 360px;
    height: 438px;
    border-radius: 8px;
    float: right;
    background-color: rgba(200,200,200,0.3);
    margin: 18px 80px 0 0;
    overflow: hidden;
}
.input-box {
	margin: 0 auto;
	margin-top: 30px;
    /*position: relative;*/
    width: 300px;
    height: 36px;
    border: 1px solid #E9ECF0;
    border-radius: 2px;
    /*font-size: 0;*/
    padding-left: 8px;
}
.login_btn{
	margin:50px auto;
	text-align: center;
	border: 0;
	outline: 0;
	width: 200px;
	height: 50px;
	background-color: #d6d8ec;
	border-radius: 4px;
}
</style>
