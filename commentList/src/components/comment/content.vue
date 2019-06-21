<template>
    <div class="content">
        <app-comment @show="showText"></app-comment>
        <h3>评论列表</h3>
        <p v-if="text.length==0">暂无评论，我来发表第一篇评论！</p>
		<div class="list" v-else>
			<div v-for="(item,index) in text" :key="index" >
				<b>匿名<span>{{time}}</span></b>
                <p>{{item}}</p>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
import Comment from './comment'
function getTime () {
  let now = new Date()
  let year = now.getFullYear()
  let month = now.getMonth() + 1
  let day = now.getDate()
  month = month.length < 2 ? '0' + month : month
  day = day.length < 2 ? '0' + day : day
  return year + '-' + month + '-' + day
}
export default {
  name: 'Contents',
  components: {
    'app-comment': Comment
  },
  data () {
    return {
      text: [],
      time: getTime()
    }
  },
  methods: {
    showText (content) {
      this.text.push(content)
    }
  },
  created () {}
}
</script>

<style>
.list{
    height: 300px;
    border: 1px solid #ccc;
    overflow: auto;
}
.content b {
    color: #01553D;
    font-size: 16px;
    display: block;
    margin: 8px 5px;
    font-weight: bolder;
}
.content b span {
    color: #333;
    font-size: 14px;
    margin-left: 20px;
}
.content p {
    padding: 8px 0 5px 15px ;
    font-size: 16px;
    color: #333;
}
</style>
