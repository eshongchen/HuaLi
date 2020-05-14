<template>
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <div class="box">
            <img width="1200" style="margin:30px;" src="https://img02.hua.com/banner/huacai_rose_160722.jpg" alt="玫瑰订购">
        </div>
        <div class="list">
                <div class="grid-item" v-for="(item,index) of data" :key="index">
                    <div class="grid-panel">
                        <div class="img-box">
                            <router-link :to="`/details/${item.Fid}`">
                                <a href="javascript:;" target="_blank" data-link="9012177">
                                    <img width="220" height="240" :src="item.Imag" alt="">
                                </a>
                            </router-link>
                            
                        </div>
                    </div>
                    <div class="info-cont">
                        <div class="price">
                            <span class="price-sign">¥</span>
                            <span class="price-num" data-pp="9012177">{{item.Price}}</span>
                        </div>
                        <div class="title">
                            <router-link :to="`/details/${item.Fid}`">  
                                <a href="javascript:;" target="_blank" >
                                    <span class="product-title">{{item.Cpmc}}</span>
                                    <span class="feature">{{item.Instro}}</span>
                                </a>
                            </router-link>
                            
                        </div>
                    </div>
                    <div class="operate">
                        <div>
                            <a  @click="add(item.Fid)" class="btn btn-primary  btn-addcart" >加入购物车</a>
                        </div>
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
import {mapMutations} from 'vuex'
import { setInterval, clearInterval } from 'timers';
export default {
  components:{
    Header,
    Footer
  },
  data(){
      return{
          data:[],
          keyword:''
          
      }
  },
  methods:{
      ...mapMutations({
            Loginout:'logout'
        }),
        // 添加购物车方法
      add(Fid){
        //   获取用户id
         var uid= this.$store.state.id;
        //  console.log(uid);
        // 发送get请求
         this.axios.get('/add?uid='+uid+'&fid='+Fid).then(res=>{
             if(res.data.code==1){
               alert("添加成功");
             }
         });
      },
    //   更新搜索列表方法
      updateList(){
        this.keyword=this.$route.params.keyword;
                //   console.log(this.$route.params.keyword);
        this.axios.get('search/'+this.keyword).then(res=>{
        
            for(var item of res.data){
                item.Imag=require('../assets/images/img/'+item.Imag);
            } 
            this.data=res.data;
            
        });
      }
      
  },
  mounted(){
       this.updateList();
 },
 
 
}
</script>
<style >
.box{
   width:100%; 
   /* border:3px solid #000; */
   /* margin: 0 auto; */
   /* text-align: center; */
}
.list{
	margin: 0 auto;
	width: 1200px;
	margin-left: 240px;
    /* height: 600px; */
    display: flex;
    flex-wrap: wrap;
}
.grid-item{
    width: 20%;
    height: 390px;
	margin-bottom: 20px;
    padding: 10px;
    border: 1px solid transparent;
    background-color: #fff;
    font-family: tahoma, arial, 'Hiragino Sans GB', '\5b8b\4f53', sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #737373;
    background-color: #ffffff;
    text-align: center;
}
.grid-item:hover{
	border: 1px solid #737373;
}
.grid-panel{
	width: 220px;
}
.img-box {
    position: relative;
    overflow: hidden;
    width: 220px;
    height: 240px;
    margin-bottom: 10px;
}
.info-cont .price {
    margin-bottom: 8px;
    color: #ff6a00;
    font-family: tahoma, arial, 'Hiragino Sans GB', '\5b8b\4f53', sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    font-weight: bolder;
}
 .title {
    font-size: 12px;
    line-height: 18px;
    overflow: hidden;
    height: 36px;
    margin-bottom: 8px;
    text-align: justify;
    color: #737373;
}
.product-title {
    font-size: 12px;
    display: block;
    max-width: 220px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #888;
}
 .feature,.attention {
    color: #888;
}
.btn-addcart{
	background: #fff;
    border: 1px solid #ff6a00;
    color: #ff6a00;
}
.btn-addcart:hover{
	color: #ffffff;
    border-color: #f56600;
    background-color: #f56600;
}
</style>