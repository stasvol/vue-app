<template>
  <div id="app">
  <h1>Todo application</h1>
  <AddTodo
      @add-todo="addTodo"
  />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>
  <hr>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App" count="0"/>-->
  <loader v-if="isLoading"/>
  <TodoList
      v-else-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
      @remove-todo="removeTodo"
  />
    <p v-else>No Todos !!!</p>
<!--    <router-view />-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import Loader from './components/Loader'

export default {
  name: 'App',
  data() {
    return {
      todos:[
    // { id:1, title: 'Купити хліб' , completed: false},
    // { id:2, title: 'Купити масло' , completed: false},
    // { id:3, title: 'Купити сир' , completed: false}
     ],
      isLoading: true,
      filter: 'all'
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
        .then(response => response.json())
        .then(json =>{
          // setTimeout(() => {
          this.todos = json
          this.isLoading = false
          // },2000)
        })
  },
  // watch: {
  //   filter(value){
  //     console.log(value)
  //   }
  // },
  computed: {
    filteredTodos() {
      if (this.filter === 'all') {
        return  this.todos
      }
      if (this.filter === 'completed') {
        return this.todos.filter(todo => todo.completed);
      }
      if (this.filter === 'not-completed') {
        return this.todos.filter(todo => !todo.completed);
      }
      }
    },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
     addTodo(todo) {
       this.todos.push(todo)
     }
  },
  components: {
    // HelloWorld
    AddTodo,
    TodoList,
    Loader
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
