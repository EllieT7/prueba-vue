<template>
  <img width="50" alt="Vue logo" src="./assets/logo.png">
  <h2>Prueba - Lista de tareas</h2>
  <TodoList/>
</template>

<script>
import TodoList from './components/TodoList.vue'
export default {
  name: 'App',
  components: {
    TodoList,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align:center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
