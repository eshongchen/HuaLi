<template>
  
  <div>
    <!-- 头部广告 -->
    <a href="javascript:;" class="ad" >
    </a>
    <!-- 顶部组件header -->
    <div>
      <Header></Header>
    </div>
    <!--  -->
    
    <!-- 轮播图 -->
    <div class="carousel " id="demo">
        <div class=" w-100 carousel-inner  ">
            <div class="carousel-item active">
                <img  class="h-100 w-100" src=" http://img02.hua.com/slider/20_day520_pc.jpg?0511">
            </div>
            <div class="carousel-item">
                <img  class="h-100 w-100" src="http://img02.hua.com/slider/18_byz_pc.jpg">
            </div>
            <div class="carousel-item">
                <img class="h-100 w-100"  src="http://img02.hua.com/slider/20_birthday_pc.jpg">
            </div>
            <div class="carousel-item">
                <img  class="h-100 w-100" src="http://img02.hua.com/banner/longtou.jpg">
            </div>
        </div>
        <a class="carousel-control-prev" data-slide="prev" href="#demo"><span class="carousel-control-prev-icon"></span></a>  
        <a class="carousel-control-next" data-slide="next" href="#demo"><span class="carousel-control-next-icon"></span></a>                
        <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0"  class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
            <li data-target="#demo" data-slide-to="3"></li>
        </ul>
        <!-- 轮播图中导航浮动 -->
        <div class="baaner-d p-xl-3">
            <h4 style="font-size: 14px" class="text_color">鲜花用途</h4>
            <ul  class="baaner-d-f1">
                <li><a href="">爱情鲜花</a></li>
                <li><a href="">生日鲜花</a></li>
                <li><a href="">友情鲜花</a></li>
                <li><a href="">问候长辈</a></li>
                <li><a href="">探病慰问</a></li>
                <li><a href="">道歉鲜花</a></li>
                <li><a href="">祝贺鲜花</a></li>
                <li><a href="">婚庆鲜花</a></li>
                <li><a href="">商务鲜花</a></li>
            </ul>
            <h4 style="font-size: 14px" class="text_color">鲜花花材</h4>
            <ul  class="baaner-d-f1">
                <li><a href="">玫瑰</a></li>
                <li><a href="">康乃馨</a></li>
                <li><a href="">百合</a></li>
                <li><a href="">向日葵</a></li>
                <li><a href="">弗朗</a></li>
                <li><a href="">郁金香</a></li>
                <li><a href="">马蹄莲</a></li>
               
            </ul>
        </div>
        <div class="baaner-r">
            <div class="baaner-r-item">
                <a href=""><img src="http://img02.hua.com/tuijian/rightbox_9012455.jpg"></a>
                 <div class="rightbox">
                    <p class="rightbox-name">亲爱的你</p>
                    <p class="rightbox-price price"><span data-id="9012455" style="opacity: 1;">368</span>元</p>
                </div>
            </div>
            <div class="baaner-r-item">
                <a href=""><img src="http://img02.hua.com/tuijian/rightbox_9010969.png"></a>
                 <div class="rightbox">
                    <p class="rightbox-name">你最珍贵</p>
                    <p class="rightbox-price price"><span data-id="9012455" style="opacity: 1;">249</span>元</p>
                </div>
            </div>
            
        </div>
    </div>  
    <!-- F2 -->
    <div class=" f2 mt-3 ">
        <div><h3>爱情鲜花 <span class="f2-title">送让你砰然心动的人</span></h3></div>
        <div class="f2-body">
            <div class="banner-box">
                    <a href="/aiqingxianhua/" target="_blank"><img  height="100%" width="100%" src="../assets/images/lover.png" style="display: inline;"></a>
                    <a class="banner-link" href="" target="_blank">爱情鲜花专区 &gt;&gt;</a>
            </div>
            <div class="banner-list ">
                <div class="banner-item p-2 " v-for="(item,index) in rose" :key="index">
                    <router-link :to="`/details/${item.Fid}`">
                        <div class="img-box" href="">
                            <img  height="240" width="220" :src="item.Imag">
                        </div>
                        <span class="product-title">{{item.Cpmc}}</span>
                        <p class="price" style="margin:0">
                            <span class="price-sign">¥</span>
                            <span class="price-num" data-pp="9010966">{{item.Price}}</span>
                        </p>
                        <p style="font-size:12px ;color: #737373;">已售 {{item.Sales}} 件</p>
                    </router-link>
                </div>
            </div>
        </div>           
               
    </div>
    <!-- F3 -->
    <div class=" f2 mt-3">
        <div><h3 >送长辈鲜花 <span class="f2-title">赠父母/恩师/长辈</span></h3></div>
        <div class="f2-body" >
            <div class="banner-box" style="background-color: #c2dca1">
                    <a href="/aiqingxianhua/" target="_blank"><img  height="100%" width="100%" src="../assets/images/elder.png" style="display: inline;"></a>
                    <a class="banner-link" href="" target="_blank">长辈鲜花专区 &gt;&gt;</a>
            </div>
            <div class="banner-list ">
                <div class="banner-item p-2 " v-for="(item,index) in elder" :key="index">
                    <router-link :to="`/details/${item.Fid}`">
                        <div class="img-box" href="">
                            <img  height="240" width="220" :src="item.Imag">
                        </div>
                        <span class="product-title">{{item.Cpmc}}</span>
                        <p class="price" style="margin:0">
                            <span class="price-sign">¥</span>
                            <span class="price-num" data-pp="9010966">{{item.Price}}</span>
                        </p>
                        <p style="font-size:12px ;color: #737373;">已售 {{item.Sales}} 件</p>
                    </router-link>
                </div>
               
            </div>
        </div>           
               
    </div>
    <!-- F4 -->
    <div class=" f2 mt-3">
        <div><h3 >永生花 <span class="f2-title">许·她一生承诺</span></h3></div>
        <div class="f2-body">
            <div class="banner-box" style="background-color: #d6d8ec">
                    <a href="/aiqingxianhua/" target="_blank"><img height="100%"  width="100%" src="../assets/images/song.jpg" style="display: inline;"></a>
                    <a class="banner-link" href="" target="_blank">永生鲜花专区 &gt;&gt;</a>
            </div>
            <div class="banner-list ">
                <div class="banner-item p-2" v-for="(item,index) in preserved" :key="index">
                    <router-link :to="`/details/${item.Fid}`">
                        <div class="img-box" href="">
                            <img  height="240" width="220" :src="item.Imag">
                        </div>
                        <span class="product-title">{{item.Cpmc}}</span>
                        <p class="price" style="margin:0">
                            <span class="price-sign">¥</span>
                            <span class="price-num" data-pp="9010966">{{item.Price}}</span>
                        </p>
                        <p style="font-size:12px ;color: #737373;">已售 {{item.Sales}} 件</p>
                    </router-link>
                </div>
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
      return {
          rose:[],//玫瑰数据
          preserved:[],//永生花
          elder:[],//长辈数据
          
      }
  },
  methods:{
    
  },
  mounted(){
    //   请求首页玫瑰
        this.axios.get('/index?kind=玫瑰').then(res=>{
          var data=res.data.slice(0,8);
         
          for(var item  of data){
            item.Imag=require(`../assets/images/img/${item.Imag}`);

          } 
        //   console.log(data);
          this.rose= data;
        //   console.log(this.rose);
        });
        //   请求首页永生花
        this.axios.get('/index?kind=永生花').then(res=>{
          var data=res.data.slice(0,8);
         
          for(var item  of data){
            item.Imag=require(`../assets/images/img/${item.Imag}`);

          } 
        //   console.log(data);
          this.preserved= data;
        });
        //   请求首页问候长辈
        this.axios.get('/index?kind=问候长辈').then(res=>{
          var data=res.data.slice(0,8);
         
          for(var item  of data){
             item.Imag=require(`../assets/images/img/${item.Imag}`);
          } 
        //   console.log(data);
          this.elder= data;
        });
  }
  
}
</script>
<style  scoped>
  .ad{
    height: 80px;
    background: url('../assets/images/pc_newuser_order_100.png') 50% 0px no-repeat;
    height: 80px;
    display: block;
  }
  .F2{
	height: 40px;

}
.F2-left{
	width: 230px;
	padding: 0 20px;
	font-size: 15px;
	height: 100%;
	background-color: #ff6a00;
	margin-left: 30px;

}

.F2-right{
	width: 970px;
}
.carousel{
	width: 100%;
	height:440px;
	overflow: hidden;
	border-top: 4px #ff6a00 solid;
}

.carousel-control-prev,.carousel-control-next{
/* 宽高 */
width:4%;height:20%;
/* 位置 */
top:40%;
/* 背景色 */
/*background-color: #aaa;*/
border-radius: 4px;
}
.carousel-control-prev{left:24%; }
.carousel-control-next{right:24%; }
.carousel-indicators>li{
	display: block;
	width: 14px;
	height: 14px;
	border-radius: 50%;
	background-color:rgba(255, 255, 255, 0.3);
}
.carousel-indicators>.active{
	background-color: #ff6a00;
}
/*<!-- 轮播图中导航浮动 -->*/
.baaner-d{
	width: 250px;
	position: absolute;
	height: 100%;
	background-color: #fff;
	top:0%;
	left: 178px;
	border-bottom: 4px #ff6a00 solid;
}
.baaner-d-f1{
	margin: 0 0 8px;
    padding: 0 0 8px;
   
    border-bottom: 1px solid #e9e9e9;
    list-style: none;
    box-sizing: border-box;
}
.baaner-d-f1 li{
	font-size: 12px;
    line-height: 22px;
    margin-right: 10px;
    padding: 0;
    display: inline-block;
}
.baaner-d-f1 li a{
	color: #666;
}
.baaner-r{
	width: 250px;
	position: absolute;
	height: 100%;
	background-color: #fff;
	top:0%;
	right: 178px;
	
}
.rightbox{
	top: 50px;
    left: 20px;
	position: absolute;
    color: #232628;
    font-family: PingFangSC, tahoma, arial, 'Hiragino Sans GB', '\5FAE\8F6F\96C5\9ED1', sans-serif;

}
.baaner-r-item{
	border-bottom: 1px solid #e9e9e9;
	position: relative;
}
.f2{
	width: 100%;
    /* display: block; */
}
.f2-body{
    /* margin: 0 auto; */
    display: inline-block;
}
.f2-title{
    
	color: #737373;
	font-size: 14px;
}
.banner-box{
    
	height: 666px;
	width: 298px;
	background-color: #ffc0bb;
	border:1px solid #e9e9e9;
    
}

.banner-link{
	font-family: tahoma, arial, 'Hiragino Sans GB', '\5FAE\8F6F\96C5\9ED1', sans-serif;
    font-size: 30px;
    line-height: 48px;
    display: block;
    width: 244px;
    height: 52px;
    margin-left:20px ;
    margin-top:-150px;
    text-align: center;
    color: #fff;
    border: 3px solid #fff;
}
.floor-products {
    float: right;
    width: 957px;
    margin: 0;
    padding: 0;
    list-style: none;
}
.banner-list{
    /* display: flex; */
    margin-left:298px; 
	float: left;
	width: 1052px;
	height: 666px;
	/*background-color: #444;*/
	margin-top:-666px;
}
.banner-item{
    margin: 2px 8px ;
	float: left;
    
	width: 238px;
	height: 332px;
	text-align: center;
	border:1px solid #e9e9e9;
}
.product-title{
	display: inline-block;
    max-width: 95%;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    vertical-align: top;
    font-size: 12px;
    color: #737373;
}
.price{

	font-size: 14px;
    font-weight: bold;
    color: #000;
}
</style>