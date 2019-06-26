<template>
  <div>
    <table>
      <thead>
        <tr>
          <td>
            <input type="checkbox" name="checkboxs" v-model="checked" @click="checkAll">
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
            <input type="checkbox" name="checkboxs" v-model="item.checked" >
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
            <em>-</em>
            <input v-model.number="item.purchaseQuantity" class="number">
            <em>+</em>
          </td>
          <td>￥{{item.unitPrice * item.purchaseQuantity}}</td>
          <td>
            <button>删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'goodsList',
  data () {
    return {}
  },
  methods: {
    checkAll () {
    //   this.$store.commit('checkAll')
      this.checked()
    }
  },
  computed: {
    ...mapState({
      goodsList: state => state.goodsList,
      checked: state => state.checked
    }),
    ...mapGetters(['checked'])
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
thead tr,
tfoot tr {
  background: #e3e3e3;
  height: 40px;
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
