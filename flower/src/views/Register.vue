<template>
  <div>
    <div>
      <Header></Header>
    </div>
    <div class="login_warpper">
        <div class="login-box">
            <div class="ml-4" >
                <!-- <span class="icon icon-iphone"></span> -->
                <input class="input-box" v-model="uname" type="text" name="" placeholder="请输入用户名">
            
                <!-- <span class="icon icon-iphone"></span> -->
                <input class="input-box" v-model="upwd" type="password" name="" placeholder="请输入密码">
                <input class="input-box" v-model="uupwd" type="password" name="" placeholder="确认密码">

                <button class="login_btn" @click="register">注册</button>
            </div>

        </div>
    </div>
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>

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
      uupwd:''
    }
  },
  methods:{
    register(){
      if(this.uname.length<6||this.uname.length>10){
        alert("请输入6-10位的用户名");
      }else if(this.upwd.length<6||this.upwd.length>10){
        alert("请输入6-10位的密码");
      }else if(this.upwd!=this.uupwd){
        alert("两次输入的密码不一致")
      }else{
        console.log(this.upwd,this.uname);
        this.axios.post('/register?','uname='+this.uname+'&upwd='+this.upwd).then(res=>{
          var code=res.data.code;
          if(code==0){
            alert('注册失败，因为用户名已存在!');
            this.uname='';
            this.upwd='';
            this.uupwd='';
          }else if(code==1){
            alert('注册成功');
            this.uname='';
            this.upwd='';
            this.uupwd='';
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
