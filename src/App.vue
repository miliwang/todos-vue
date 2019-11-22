<!--
 * @Author: your name
 * @Date: 2019-11-21 18:42:42
 * @LastEditTime: 2019-11-22 13:46:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /todos-vue/src/App.vue
 -->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">todos</router-link> |
      <router-link to="/lifeCycle">生命周期</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
