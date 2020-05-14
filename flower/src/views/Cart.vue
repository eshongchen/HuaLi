<template>
    <div>
      <div>
          <Header></Header>
      </div>
      <div class="w-100 my-5">
          <div class="cart-panel">
		<div class="cart-hd">
			<ul class="order-title">
                <li class="selecter"></li>
                <li class="product">商品名称</li>
                <li class="market-price">单价</li>
                <li class="market-price">总价</li>
                <li class="num">数量</li>
                <li class="operate">操作</li>
            </ul>	
		</div>
		<div class="bd">
                    <ul class="order-list" id="9012095" v-for="(item,index) in data" :key="index">
                        <li class="selecter">
                            <input type="checkbox" name="class1" value="鲜花" checked="mi">
                           
                        </li>
                        <li class="img-box"><a href="javascript:;" target="_blank">
                                <img class="w-100 h-100" :src="item.Imag"></a></li>
                                
                        <li class="product">
                            <a href="javascript:;" target="_blank">
                                <span class="product-title" style="line-height:40px;">{{item.Cpmc}}</span>
                                <span class="feature"></span>
                            </a>
                        </li>
                        <li class="market-price">
                            <span class="price-sign">¥</span>
                            <span class="price-num">
                                {{item.Price}}
                            </span>
                        </li>
                        <li class="market-price">
                            <span class="price-sign">¥</span>
                            <span class="price-num">
                                {{item.Price*item.count}}
                            </span>
                        </li>
                        <li class="num">
                            <div class="input-num">
                                <a href="javascript:void(0);" @click="dec($store.state.id,item.fid,item.count)" class="btn">-</a>
                                
                                <input type="text" class="form-control input-sm" name="cpsl" :value="item.count" maxlength="3">
                                <a href="javascript:void(0)" class="btn " @click="add($store.state.id,item.fid,item.count)">+</a>
                            </div>
                        </li>
                        <li class="operate"><a href="javascript:void(0)" @click="requsetDel($store.state.id,item.fid)" class="delBtn">删除</a></li>
                    </ul>
        </div>
	  </div>
      </div>
      <div>
          <Footer></Footer> 
      </div>
    </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import { connect } from "tls";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      data: [],
      num: 0
    };
  },
  mounted() {
    this.jiazailist();
    //  console.log(this.data)
  },
  methods: {
    dec(uid, fid, count) {
      count--;
      this.num = count;
      if (count <= 0) {
        this.requsetDel(uid, fid);
      } else {
        this.upDated(uid, fid, count);
      }
    },
    add(uid, fid, count) {
      count++;
      //   console.log(count);
      this.num = count;
      this.upDated(uid, fid, count);
    },
    upDated(uid, fid, count) {
      this.axios.post(
        "/cartUpdate?",
        "uid=" + uid + "&fid=" + fid + "&count=" + count
      );
    },
    requsetDel(uid, fid) {
    //   console.log(uid, fid);
      this.axios.post("/cartDel?", "uid=" + uid + "&fid=" + fid).then(res => {
        if (res.data.affectedRows) {
        } else {
          alert("删除失败");
        }
      });
    },
    jiazailist() {
      var uid = this.$route.params.uid;
      this.axios.get("/cartlist?uid=" + uid).then(res => {
        // console.log(res.data.result);
        for (var item of res.data.result) {
          item.Imag = require("../assets/images/img/" + item.Imag);
        }
        this.data = res.data.result;
      });
    }
  },
  updated() {
    this.jiazailist();
  }
};
</script>
<style scoped>
.cart-panel {
  text-align: left;
  font-family: tahoma, arial, "Hiragino Sans GB", "\5b8b\4f53", sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #737373;
  background-color: #ffffff;
}
.cart-hd {
  margin: auto;
  padding: 0 20px;
  list-style: none;
  background-color: #ebebeb;
  width: 1200px;
}
.order-title {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
}
.order-title li {
  font-weight: bold;
  display: inline-block;
  /* float: left; */
  padding: 10px 0;
}

.cart-panel .order-title li.selecter {
  width: 36px;
  height: 40px;
}
.cart-panel .order-title li.product {
  width: 432px;
}
.cart-panel .order-title li.market-price,
.cart-panel .order-title li.num,
.cart-panel .order-title li.operate {
  width: 120px;
}
.bd {
  margin: 0;
  padding: 0 20px;
}
.cart-panel .order-list:first-child {
  border-top: none;
}
.cart-panel .order-list {
  font-size: 14px;
  margin: 0;
  padding: 15px 0;
  list-style: none;
  display: inline-block;
}
.cart-panel .order-list li {
  line-height: 20px;
  display: inline-block;
  height: 70px;
  float: left;
}
.selecter {
  padding-top: 42px;
}
.cart-panel .order-list .selecter {
  width: 36px;
  height: 88px;
  text-align: left;
  cursor: pointer;
}
.bd {
  margin: auto;
  padding: 0 20px;
  list-style: none;
  /*background-color: #ebebeb;*/
  width: 1200px;
}
.cart-panel .order-list li.img-box,
.cart-panel .order-list .promo-item .img-box {
  width: 80px;
}
.cart-panel .order-list li.product,
.cart-panel .order-list .promo-item .product {
  width: 332px;
  padding: 24px 0;
}
.cart-panel .order-list li.market-price,
.cart-panel .order-list .promo-item .market-price {
  width: 120px;
  padding: 0;
  line-height: 88px;
}
.cart-panel .order-list li.num,
.cart-panel .order-list .promo-item .num {
  width: 120px;
}
.input-num {
  margin: 17px 0;
  display: flex;
  align-items: center;
}
.input-num .btn {
  width: 20px;
  height: 20px;
  margin: 0px 10px;
  padding: 0;
  border: 1px solid #aaa;
  color: #000;
  align-items: center;
}

.cart-panel .order-list li.num {
  width: 130px;
  margin: 16px 0;
  /*text-align: center;*/
}
.input-num .form-control {
  display: inline-block;
  width: 40px;
  height: 24px;
  border-color: #d9d9d9;
}
li.operate {
  width: 120px;
  font-size: 12px;
  padding: 32px 0 24px 42px;
}
li a {
  color: #222;
}
</style>