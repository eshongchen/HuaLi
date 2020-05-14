<template>
  <div>
    <div>
      <Header></Header>
    </div>
    <!-- 详情 -->
    <div>
      <div class="details-box">
        <div class="product-l">
            <div>
                <img class="details-imgXl" :src="data.Imag" alt="">
            </div>
            <div>
                <img class="details-imgSm" :src="data.Imag" alt="">
            </div>
        </div>
        <div class="product-r">
            <!-- 花标题 -->
            <div>
               <h3 class="product-title">{{data.Cpmc}}</h3>
            </div>
            <!-- 花-body -->
            <div class="attribute ">
                <dl>
                    <dt>类 别：</dt>
                    <dd>{{data.Category}}</dd>
                </dl>
                <dl>
                    <dt>材 料：</dt>
                    <dd>{{data.Instro}}</dd>
                </dl>
                <dl>
                    <dt>包 装：</dt>
                    <dd>蓝色高档定制礼盒</dd>
                </dl>
                    <dl>
                        <dt>备 注：</dt>
                        <dd>柔情时光，岁月如歌，我为你描绘幸福的模样。</dd>
                    </dl>
                    <dl>
                        <dt>附 送：</dt>
                        <dd>下单填写留言，即免费赠送精美贺卡！</dd>
                    </dl>
                <dl>
                    <dt>配 送：</dt>
                    <dd> 顺丰快递深圳发货, 全国可达, 包邮! </dd>
                </dl>
                   
            </div>
            <p style="margin:10px 0 20px 0;font-size:16px;">价格:￥ <span style="color: #FF734C;font-weight:bold;">{{data.Price}}</span>元 </p>

            <p style="margin:10px 0 20px 0;font-size:16px;">已售 <span style="color: #FF734C;font-weight:bold;">{{data.Sales}}</span> 件 </p>
            <!-- btn -->
            <div>
                <a @click="add(data.Fid)" class="btn btn-primary btn-lg btn-addcart" id="">加入购物车</a>
            </div>
        </div>
      </div>
        <div style="width:600px;height:600px;margin:0 auto;">
           <h3>      商品评价：暂未更新，敬请期待！</h3> 
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
export default {
  components:{
    Header,
    Footer
  },
  data(){
      return {
          data:[],
      }
  },
  methods:{
      ...mapMutations({
            Loginout:'logout'
        }),
      add(Fid){
         var uid= this.$store.state.id;
         console.log(uid);
         this.axios('/add?uid='+uid+'&fid='+Fid).then(res=>{
             if(res.data.code==1){
               alert("添加成功");
             }
         });
      }
  },
  mounted(){
      var id = this.$route.params.id;
        // console.log( this.$route.params.id);
        this.axios.get('/details/'+id).then(res=>{
            var data=res.data.result[0];
            data.Imag=require(`../assets/images/img/${data.Imag}`);
            this.data=data;
            // console.log(this.data);
        });
  }
  
}
</script>
<style scoped>
.details-box{
    text-align: left;
	margin: 50px auto;
	width: 80%;
	height: 706px;
	border: 1px solid #d9d9d9;
	padding: 40px 30px;
}
.product-l{
	width: 520px;
	height: 577px;
	
}
.product-r{
	float: right;
	width: 560px;
	height: 644px;
	margin-top:-577px;;
	border: 1px solid #d9d9d9;
	padding: 30px;
}
.details-imgXl{
	width: 430px;
	height: 470px;
	margin-left: 40px;
}
.details-imgSm{
	width: 68px;
	height: 68px;
	margin: 20px 70px;
    padding: 1px;
    border: 1px solid #d9d9d9;
}
.product-title{
	
	font-size: 18px;
	color: #4d4d4d;
	font-weight: bolder;
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
.attribute{
	margin-bottom: 15px;
    padding-bottom: 15px;
	border-bottom: 1px solid #d9d9d9;
	font-family: tahoma, arial, 'Hiragino Sans GB', '\5b8b\4f53', sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #737373;
}
</style>