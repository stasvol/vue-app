<template>
  <div>
    <h2>Todo application</h2>
    <router-link to="/">Home</router-link>
    <AddTodo
        @add-todo="addTodo"
    />
<!--    <hr>-->
    <!--  <img alt="Vue logo" src="./assets/logo.png">-->
    <!--  <HelloWorld msg="Welcome to Your Vue.js App" count="0"/>-->

    <TodoList
        v-bind:todos="todos"
        @remove-todo="removeTodo"
    />
  </div>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'

export default {
  name: 'App',
  data() {
    return {
      todos:[
        // { id:1, title: 'Купити хліб' , completed: false},
        // { id:2, title: 'Купити масло' , completed: false},
        // { id:3, title: 'Купити сир' , completed: false}
      ]
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
        .then(response => response.json())
        .then(json => this.todos = json)
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
    TodoList
  },
}
</script>