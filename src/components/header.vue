<!--
 * @Author: mili
 * @Date: 2019-11-21 17:35:42
 * @LastEditTime: 2019-11-21 20:58:51
 * @LastEditors: Please set LastEditors
 * @Description: 头部
 * @FilePath: /Autohome/todomvc-vue1/src/components/header.vue
 -->
<template>
  <div class="hello">
    <header class="header">
      <h1>todos</h1>
      <!-- 添加 Todo，绑定回车事件 -->
      <input class="new-todo" placeholder="What needs to be done?" autofocus v-model="todoTxt" @keyup.enter="addTodo" v-focus>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    todoList: Array,
    todo: String,
    count: Number
  },
  data: function () {
    return {
      todoTxt: ""
    };
  },
  methods: {
    // 添加 TodoItem
    addTodo: function () {
      // console.log(this.todo);
      // this.todoList.push({ 'id': this.count++, 'txt': this.todoTxt, 'isCompleted': false, 'isEdited': false });
      // // localStorage['todos'] = JSON.stringify(this.todoList);
      // this.todoTxt = '';
      // this.left++;
      this.$emit("addTodo", this.todoTxt);
    }
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus();
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
