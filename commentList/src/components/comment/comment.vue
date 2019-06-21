<template>
  <div style="margin-top: 15px;">
    <div class="commentBox">
      <h3>发表评论</h3>
      <textarea name="" value="请填写评论内容" v-model="commentText"></textarea>
      <button class="btn" @click="addComment">发表</button>
      <button class="btn" @click="canelComment">取消</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Comment',
  data () {
    return {
      commentText: ''
    }
  },
  methods: {
    addComment () {
      this.$emit('show', this.commentText)
      this.commentText = ''
    },
    canelComment () {
      this.commentText = ''
    }
  },
  created () {}
}
</script>
<style>
.commentBox {
  margin-bottom: 50px;
}
h3 {
  color: #634322;
  background: #e9e5df;
  padding: 8px 15px;
  text-align: left;
  font-size: 16px;
  margin-bottom: 8px;
}
.commentBox textarea {
    overflow: auto;
    width: 100%;
    height: 80px;
    outline: none;
    resize: none;
}
.commentBox button {
    float: right;
    margin-left: 20px;
    padding: 5px 30px;
    background: #01553D;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
}
.btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.25;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer
}
</style>
