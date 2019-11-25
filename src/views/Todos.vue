<!--
 * @Author: your name
 * @Date: 2019-11-21 17:35:42
 * @LastEditTime: 2019-11-22 14:17:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Autohome/todomvc-vue1/src/views/Home.vue
 -->
<template>
  <div class="home">
    <!-- This section should be hidden by default and shown when there are todos -->
    <Header @addTodo="addTodo" :index="count" />
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" :checked="count === 0 ? false : left === 0 "
        @change="onChangeAllCheck">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <!-- These are here just to show the structure of the list items -->
        <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
        <li class="todo" :class="{completed:item.isCompleted,editing:item.isEdited}" v-for="item in todoList"
          :key="item.txt">
          <div class="view">
            <input class="toggle" type="checkbox" checked="item.isCompleted" v-model="item.isCompleted"
              @change="onChangeChecked">
            <label @dblclick="onEditClicked(item)">{{ item.txt }}</label>
            <button class="destroy" @click="delTodo(item)"></button>
          </div>
          <input class="edit" value="Create a TodoMVC template" @keyup.enter="editTodo(item)" @blur="editTodo(item)"
            v-model="editTxt" v-focus>
        </li>
      </ul>
    </section>
    <Footer @onSelected="onSelected" :count="count" :left="left" @clearTodos="clearTodos" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
var data = localStorage["todos"] || "[]";
var todo = JSON.parse(data);
export default {
  name: "todo",
  components: {
    Header,
    Footer
  },
  data: function () {
    return {
      todoTxt: "",
      editTxt: "",
      todoList: todo,
      compeled: "compeled",
      edit: "edit",
      isSelected: "all",
      count: todo.length || 0,
      left: todo.length,
      todo: JSON.parse(data)
    };
  },
  beforeCreate () {
    this.$store.commit("increment", todo);
  },
  watch: {
    todoList: function (val, oldVal) {
      return this.$store.state.todo;
    }
  },
  methods: {
    // 添加 TodoItem
    addTodo: function (txt, count) {
      this.todoList.push({ "id": count, "txt": txt, "isCompleted": false, "isEdited": false });
      let data = Object.assign(this.$store.state.todo, this.todoList);
      this.$store.commit("increment", data);
      this.count = count;
      ++this.left;
    },
    onChangeAllCheck: function (e) {
      if (this.isSelected === "active") {
        this.left = 0;
        this.todoList = JSON.parse(localStorage["todos"] || "[]");
      }
      if (this.isSelected === "completed") {
        this.left = this.count;
      }
      todo = JSON.parse(localStorage["todos"] || "[]");
      this.todoList = todo.map((item) => {
        item.isCompleted = !(this.left === 0);
        return item;
      });
      this.left = this.left === 0 ? this.todoList.length : 0;
      this.$store.commit("increment", this.todoList);
    },
    // 点击复选框
    onChangeChecked: function () {
      this.left = this.todoList.filter((item) => {
        return !item.isCompleted ? item : "";
      }).length;
      this.$store.commit("increment", this.todoList);
    },
    // 显示编辑框
    onEditClicked: function (todo) {
      this.todoList = this.todoList.map(item => {
        item.isEdited = item === todo;
        item === todo ? this.editTxt = todo.txt : "";
        return item;
      });
      this.$store.commit("increment", this.todoList);
    },
    // 编辑当前 TodoItem
    editTodo: function (todo) {
      this.todoList.map(item => {
        item === todo ? item.txt = this.editTxt : "";
        item.isEdited = false;
        return item;
      });
      this.$store.commit("increment", this.todoList);
    },
    // 删除当前 TodoItem
    delTodo: function (currt) {
      this.todoList = this.todoList.filter((item) => {
        if (item === currt) {
          // 判断当前删除项是否为未完成项
          if (!item.isCompleted)--this.left;
          return "";
        }
        return item;
      });
      this.count = this.todoList.length;
      this.$store.commit("increment", this.todoList);
    },
    // 清除 Todo列表中标志已经完成项目
    clearTodos: function () {
      this.todoList = this.todoList.filter((item) => {
        return !item.isCompleted;
      });
      this.count = this.left = this.todoList.length;
      this.$store.commit("increment", this.todoList);
    },
    onSelected: function (select) {
      todo = JSON.parse(localStorage["todos"] || "[]");
      this.todoList = todo.filter((item) => {
        if (select === "active") {
          return !item.isCompleted ? item : "";
        }
        if (select === "completed") {
          return item.isCompleted ? item : "";
        }
        return item;
      });
      // this.count = this.todoList.length;
    }
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus();
      }
    }
  },
  // 数据更新时调用
  beforeUpdate: function () {
    // localStorage["todos"] = this.count === 0 ? "[]" : JSON.stringify(this.todoList);
  }
};
</script>
