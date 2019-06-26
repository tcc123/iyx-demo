<template>
  <div>
    <table>
      <thead>
        <tr>
          <td>
            <input type="checkbox" name="checkboxs" v-model="check" @click="checkAll">
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
            <input type="checkbox" name="checkboxs" v-model="item.checked" @change="select">
          </td>
          <td>
            <img :src="item.subimage1Filename">
          </td>
          <td>
            <p>{{item.goodsTitle}}</p>
            <p>规格：{{item.specifications}}</p>
          </td>
          <td>￥{{item.unitPrice}}</td>
          <td>
            <em @click="minius(index)">-</em>
            <input v-model.number="item.purchaseQuantity" class="number">
            <em @click="add(index)">+</em>
          </td>
          <td>￥{{item.unitPrice * item.purchaseQuantity}}</td>
          <td>
            <button @click="checkDel(item,index)">删除</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>总价:{{sum}}</tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'goodsList',
  data () {
    return {
      check: false
    }
  },
  watch: {
    // 监听checked,如果checked数据发生改变则改变check的值
    checked: function () {
      this.check = this.checked
    }
  },
  methods: {
    checkAll () {
      this.$store.commit('checkAll', this.check)
      // this.checked()
    },
    select () {
      this.$store.commit('select')
    },
    minius (index) {
      this.$store.commit('minius', index)
    },
    add (index) {
      this.$store.commit('add', index)
    },
    checkDel (item, index) {
      this.$store.commit('checkDel', {index: index, item: item})
    }
  },
  computed: {
    ...mapState({
      goodsList: state => state.goodsList,
      checked: state => state.checked
    }),
    sum () {
      let total = 0
      for (let i = 0; i < this.goodsList.length; i++) {
        let items = this.goodsList[i]
        if (items.checked === true) {
          total += items.unitPrice * items.purchaseQuantity
        }
      }
      return total
    }
  },
  created () {}
}
</script>
<style>
div {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  margin-top: 60px;
}
table {
  width: 725px;
  margin: 0px auto;
  border: 1px solid#eee;
}
tr {
  height: 100px;
  /* border-collapse: collapse; */
  border: 1px solid #eee;
}
thead tr,tfoot tr{
  text-align: center;
  background: #e3e3e3;
  height: 40px;
  line-height: 40px;
}
td {
  padding: 5px 15px;
  vertical-align: middle;
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
