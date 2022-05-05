<template>
  <div>
    <ul>
      <TodoItem
          v-for="(todo,i) of todos"
          v-bind:todo="todo"
          :index="i"
          v-on:remove-todo="removeTodo"
      />
    </ul>
    <hr>
    <strong> Todos Counter: {{ todos.length }} </strong> | <i>Double: {{doubleTodoCount}} </i>
    <hr>
  </div>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  props: ['todos'],
  components: {
    TodoItem
  },
  methods: {
    removeTodo(id) {
      this.$emit('remove-todo', id)
    },
  // doubleTodoCount() {
  //   console.log('doubleTodoCount')
  //    return this.todos.length * 2
  // }
  },
  computed: {
    doubleTodoCount() {
      // console.log('doubleTodoCount')
      return this.todos.length * 2
    }
  },
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>