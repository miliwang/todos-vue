<!--
 * @Author: your name
 * @Date: 2019-11-21 18:42:42
 * @LastEditTime: 2019-11-22 13:50:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Set
 * @FilePath: /todos-vue/src/views/LifeCycle.vue
 -->
<template>
  <div class="about">
    <h1>生命周期钩子函数</h1>
    <ul>
      <li></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "lifecycle",
  components: {
  },
  beforeCreate () {
  },
  // 数据更新时调用
  beforeUpdate: function () {
    // localStorage["todos"] = this.count === 0 ? "[]" : JSON.stringify(this.todoList);
  }
};
</script>
