<template>
  <div id="app">
    <div>
      <h3>请输入事项</h3>
      <input type="text" v-model="inputValue" placeholder="添加事项">
      <button @click="send">提交</button>
    </div>
    <hr>
    <h3>正在进行</h3>
    <ul>
      <li v-for="(item,index) in list" :key="index" v-if="item.done === false">
        <input type="checkbox" @change="handleChange(index)">{{item.inputValue}}
        <button class="btn" value="delete" @click="handleDelete(index)">X</button>
      </li>
    </ul>
    <hr>
    <h3>已经完成</h3>
    <ul>
      <li v-for="(item,index) in list" :key="index" v-if="item.done === true">
        <input type="checkbox" checked @change="handleChange(index)">{{item.inputValue}}
        <button class="btn" value="delete" @click="handleDelete(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      inputValue: '',
      list: []
    }
  },
  methods: {
    send: function () {
      let todoObj = {
        inputValue: this.inputValue,
        done: false
      }
      this.list.push(todoObj)
      this.inputValue = ''
    },
    handleDelete: function (index) {
      this.list.splice(index, 1)
    },
    handleChange: function (index) {
      this.list[index].done = !this.list[index].done
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
  width: 400px;
  margin: 60px auto;
  border: 1px solid #2c3e2c;
}
ul li {
  list-style: none;
  width: 200px;
  border-radius: 4px;
  background: #eee;
  margin-bottom: 10px;
  margin-left: 60px;
  text-align: left;
  padding-right: 5px;
}
.btn {
  float: right;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #eee;
  padding: 0;
  text-align: center;
  color: red;
}
</style>
