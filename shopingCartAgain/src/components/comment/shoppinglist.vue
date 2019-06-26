<template>
  <div>
    <ul>
      <li v-for="(item,index) in shoppingList" :key="index">
          <img :src="item.subimage1Filename" />
          <button @click="pushGoods(item)">加入购物车</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'shoppingList',
  data () {
    return {
      // shoopingList:
    }
  },
  methods: {
    ...mapActions(['listInfo']),
    pushGoods (item) {
      this.$store.commit('updateCount', item)
    }
  },
  computed: {
    ...mapState({
      shoppingList: state => state.shoppingList
    })
  },
  created () {
    // console.log(this.$store)
    this.listInfo()
  }
}
</script>
<style>
div{
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
img {
  width: 100px;
  height: 100px;
}
</style>
