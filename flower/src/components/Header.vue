
<template>
    <div>
        <div class="header  d-flex justify-content-between px-5" >
            <div class="h-right">
                    <ul class="list-unstyled d-flex  nav nav-tabs  border-bottom-0 " >
                        <li class="nav-item">
                            <a class="nav-link text-dark"  href="javascript:;" >
                              <i class="iconfont icon-xingxing "></i>
                                 收藏鲜花网(hua.com)
                            </a>
                        </li>
                        <li class="nav-item " style="position: relative" >
                            <a   class="nav-link text-dark" href="javascript:;">
                                <i class="iconfont icon-weixin "></i>
                            关注微信</a>
                            <div class="nav-wei" >
                                <img class="w-100" src="http://img02.hua.com/pc/pimg/wechat_qrcode.jpg">
                                <p>扫码关注<br>回复“礼物”，更多惊喜！</p>
                            </div>
                        </li>
                        <li class="nav-item " style="position: relative;">
                            <a  class="nav-link text-dark" href="javascript:;">
                                <i class="iconfont icon-shouji "></i>
                            花礼网</a>
                                 <div class="nav-wei ">
                                    <img class="w-100" src="http://img02.hua.com/pc/pimg/wechat_qrcode.jpg">
                                    <p>新人专享100app红包！</p>
                                </div>
                            </li>
                    </ul>
                    
            </div>
            <div class="h-left mt-2" >
                <ul class="breadcrumb mb-5  bg-transparent">
                        <li class="breadcrumb-item" >
                            <div v-if="!$store.state.isLogined">
                                <router-link to="/login">
                                <a href="javascript:;" class="mr-2 text-dark">你好！请登录</a>
                                </router-link>
                                <router-link to="/register">
                                <a href="javascript:;" class="text-dark text-hover">注册</a>
                                </router-link>
                            </div>
                            <div v-else>
                                <a href="javascript:;" class="mr-2 text-dark">用户名:{{$store.state.username}}</a>
                                <a @click="outLogin()" class="text-dark text-hover">注销</a>
                            </div>
                        </li>
                        
                            <li class="breadcrumb-item">
                            <a href="javascript:;" class="text-dark text-hover">订单查询</a>
                            </li>
                        <li class="breadcrumb-item " style="position: relative;">
                            <a href="javascript:;" class="text-dark text-hover">客服服务</a>
                            <div class="nav-wei">
                                <ul class="list-unstyled">
                                    <li><a href="javascript:;" class="  text-dark">在线付款</a></li>    
                                    <li><a href="javascript:;" class=" text-dark">帮助中心</a> </li>    
                                    <li><a href="javascript:;" class="  text-dark">售后服务</a> </li>    
                                    <li><a href="javascript:;" class="  text-dark">配送范围</a> </li>    
                                    <li><a href="javascript:;" class=" text-dark">留言反馈</a> </li>    

                                </ul>
                            </div>
                        </li>
                        <li class="breadcrumb-item">
                            <router-link :to="`/cart/${$store.state.id}`"><a href="" class="text-dark text-hover">购物车</a>
                            </router-link>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="javascript:;" class="text-dark">中国鲜花礼品网:中国鲜花网领先品牌</a>
                        </li>
                    </ul>
            </div>
        </div>
        <div  class="F1-seach d-flex justify-content-around w-100 px-5">
        <!-- 花礼网logo -->
            <div class="mt-5">
                <a href="">
                    <img src="http://img02.hua.com/pc/assets/img/pc_hualogo.png">
                </a>
            </div >
        <!-- 搜索栏 -->
            <div class="mt-5 d-flex flex-column">
                <div>
                    <input class="seach-kuang" v-model="keyword" placeholder="商品关键词" type="text" name="">
                    
                    <span>
                        <button  @click="update"  class=" seach-btn">搜索</button>
                    </span>
                        
                </div>
                <div class="seach-bom">
                    <a href="javascript:;">红玫瑰</a> |
                    <a href="javascript:;">永生花</a> |
                    <a href="javascript:;">生日鲜花</a> |
                    <a href="javascript:;">礼品卡</a>
                </div>
            </div>
        <!-- F1联系方式 -->
            <div class="mt-5 ">
                <i class="iconfont icon-dianhua3"></i>
                400-889-8188 
                <span style="color: #999;"> |</span>
                <a href="javascript:;" class="text-dark ml-2">
                    <i class="iconfont icon-erji"></i>
                    在线客服
                </a>

            </div>
        </div>
        <img  alt="">
    </div>
</template>

<style  scoped>
  
* {
	margin: 0;
	padding: 0;

 }
/*变色的颜色*/
.text_color{
	color: #ff6a00;
}
/*a标签变色前的颜色*/

a.text-dark:hover, a.text-dark:focus {
     color: #ff6a00 !important; 
}
.header{
    font-size: 12px;
    min-width: 1200px;
    height: 35px;
    border-bottom: 1px solid #e6e6e6;
    background-color: #f2f2f2;
    padding: 0px 40px;
  }
  .nav-tabs{
  	margin-left: 150px;
  	border-bottom: 0;
  }
  .nav-link{
  	padding: 0;
  	color: #111;
  }
  .nav-link:hover {
  	border: 0;
  	background-color: #f2f2f2;
  	transform: 0;
  }
  .iconfont{

	color: #ff6a00;
}
.nav-item:nth-child(2),.nav-item:nth-child(3){
	width: 100px;
	overflow: visible;
}
.nav-item>i{
	font-size: 24px;
  }
.nav-tabs > li > a {

	padding: 5px;
    margin-right: 10px;
    line-height: 1.42857143;
}

.nav-link:hover div{
	display: block;
}
.nav-wei{
	position: absolute;
    top: 70%;
    left: 0;
    z-index: 1000;
    text-align: center;
	width: 134px;
	
	margin-top: 10px;
	display: none;
	float: left;
}
.nav-wei>img{

	width: 75%;
}
.nav-item:hover>.nav-wei{
	float: left;
	display: block;
	background-color: #fff;
}
.breadcrumb-item + .breadcrumb-item::before{
  content:"|";
}
.F1-seach{
	height: 120px;
}
/*搜索框样式*/
.seach-kuang{
	padding: 0 10px;
	width: 239px;
	height: 34px;
	border:1px #ff6a00 solid;
}
.seach-btn{
	width: 82px;
	height: 34px;
	margin-top: 1px;
	background-color: #ff6a00;
	border: 0;
	
}
.seach-bom{
	margin: 5px 0 10px  0;
	font-size: 12px;
	color: #999999;
}	
.seach-bom>a{
	color: #999999;

}
.icon-dianhua3,.icon-erji{
	font-size: 30px !important;
}
.breadcrumb-item:nth-child(3):hover>.nav-wei{
	float: left;
	display: block;
	background-color: #fff;
	left: 10px;
	border:1px #999 solid;
	border-top: 0;
	width: 70px;
	padding: 10px 0;
	top: 40%;
}
.breadcrumb-item:nth-child(3),.breadcrumb-item:nth-child(3)>ul>li{
	height: 40px;
}

</style>
<script>
import '../assets/styles/iconfont.css'
import {mapMutations} from 'vuex'
export default {
    inject:['reload'],
    data(){
        return{
             keyword:"",
             key:'',
             reFresh:true
        }
           
        
    },
    methods:{
        ...mapMutations({
            Loginout:'logout'
        }),
        outLogin(){
          this.Loginout();
        },
        update(){
            this.key=this.keyword;
            console.log(this.key);
            // this.$router.push(`/searchlist/${this.key}`);
        }
    },
    watch:{
        key(){
            this.$router.push(`/searchlist/${this.key}`);
            this.reload();
        },
    }
    
    
    
   
}
</script>

