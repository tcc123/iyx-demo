<template>
  <div id="app">
    <ul>
      <li v-for="(item,index) in shoppingList" :key="index">
          <img :src="item.subimage1Filename" />
          <button @click="pushGoods(item)">加入购物车</button>
      </li>
    </ul>
    <table>
      <thead>
        <tr>
          <td>
            <input type="checkbox" name="checkboxs" v-model="checked" @click="checkAll"/>
          </td>
          <td>全选</td>
          <td>商品信息</td>
          <td>单价</td>
          <td>数量</td>
          <td>小计</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in goodsList" :key="index">
          <td>
            <input type="checkbox" name="checkboxs" v-model="item.checked" @change="select"/>
          </td>
          <td>
            <img :src="item.subimage1Filename" />
          </td>
          <td>
            <p>{{item.goodsTitle}}</p>
            <p>规格：{{item.specifications}}</p>
          </td>
          <td>￥{{item.unitPrice}}</td>
          <td>
            <em v-on:click="minius(index)">-</em>
            <input v-model.number="item.purchaseQuantity" class="number"/>
            <em v-on:click="add(index)">+</em>
          </td>
          <td>￥{{item.unitPrice * item.purchaseQuantity}}</td>
          <td><button v-on:click="checkDel(item,index)">删除</button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>总价:{{sum}}</tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      shoppingList: [],
      goodsList: [],
      goodsId: [],
      checked: false
    }
  },
  methods: {
    listInfo () {
      axios.get('http://10.10.2.80:7300/mock/5ce3666acb7870211c4d7b35/example/mock').then((response) => {
        this.shoppingList = response.data.data.list
      })
    },
    pushGoods (item) {
      if (this.goodsId.indexOf(item.id) === -1) {
        this.goodsId.push(item.id)
        this.goodsList.push(item)
        this.checked = false
      } else {
        let index = this.goodsList.findIndex(function (x) {
          return x.id === item.id
        })
        this.goodsList[index].purchaseQuantity++
      }
    },
    minius (index) {
      return this.goodsList[index].purchaseQuantity > 1 ? this.goodsList[index].purchaseQuantity-- : 1
    },
    add (index) {
      this.goodsList[index].purchaseQuantity++
    },
    checkDel (item, index) {
      this.goodsList.splice(index, 1)
      this.goodsId.splice(index, 1)
      item.purchaseQuantity = 1
      item.checked = false
    },
    checkAll () {
      // debugger
      for (let i = 0; i < this.goodsList.length; i++) {
        this.$set(this.goodsList[i], 'checked', !this.checked)
      }
    },
    select () {
      this.checked = true
      for (let i = 0; i < this.goodsList.length; i++) {
        if (!this.goodsList[i].checked) {
          this.checked = false
          break
        }
      }
    }
  },
  created () {
    this.listInfo()
  },
  computed: {
    sum (index) {
      let total = 0
      for (let i = 0; i < this.goodsList.length; i++) {
        let items = this.goodsList[i]
        if (items.checked === true) {
          total += items.unitPrice * items.purchaseQuantity
        }
      }
      return total
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0 auto;
  margin-top: 60px;
}
ul{
  list-style: none;
  width: 725px;
  margin: 0 auto;
}
li{
  float: left;
  width: 120px;
  height: 150px;
}
table {
  width: 725px;
  margin: 0px auto;
  border: 1px solid#eee;
}
tr {
  height: 100px;
  /* border-collapse: collapse; */
  border: 1px solid #000;
}
thead tr,tfoot tr{
  background: #e3e3e3;
  height: 40px;
}
td{
  padding: 5px 15px;
}
img {
  width: 100px;
  height: 100px;
}
em {
  display: inline-block;
  width: 21px;
  height: 21px;
  background: #eee;
}
.number {
  width: 50px;
  text-align: center;
}
</style>
