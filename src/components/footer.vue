<!--
 * @Author: mili
 * @Date: 2019-11-21 17:41:31
 * @LastEditTime: 2019-11-22 14:15:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Autohome/todomvc-vue1/src/components/footer.vue
 -->
<template>
  <div>
    <!-- This footer should hidden by default and shown when there are todos -->
    <footer class="footer" v-show="count !== 0">
      <!-- This should be `0 items left` by default -->
      <span class="todo-count"><strong>{{ left }}</strong> item left</span>
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        <li>
          <a :class="{selected: isSelected === 'all'}" href="javascript:;" @click="onSelected('all')">All</a>
        </li>
        <li>
          <a :class="{selected: isSelected === 'active'}" href="javascript:;" @click="onSelected('active')">Active</a>
        </li>
        <li>
          <a :class="{selected: isSelected === 'completed'}" href="javascript:;"
            @click="onSelected('completed')">Completed</a>
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button class="clear-completed" @click="clearTodos" v-show="count - left > 0">Clear completed</button>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Footer",
  props: {
    count: Number,
    left: Number
  },
  data () {
    return {
      isSelected: "all",
      number: 0
    };
  },
  watch: {
    number: function (val, oldVal) {
      return this.count;
    }
  },
  methods: {
    // 清除 Todo列表中标志已经完成项目
    clearTodos: function () {
      this.$emit("clearTodos");
    },
    onSelected: function (type) {
      this.isSelected = type;
      this.$emit("onSelected", type);
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
