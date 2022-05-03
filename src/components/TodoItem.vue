<template>
  <li>
   <span v-bind:class="{done: todo.completed}">
     <input type="checkbox" v-on:change="todo.completed = !todo.completed">
     <strong>{{index + 1}}</strong>
     {{todo.title.toUpperCase()}}
<!--     {{todo.title | uppercase}}-->
   </span>
    <button class="btn-rm" v-on:click="$emit('remove-todo', todo.id)">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo:{
      type: Object,
      require: true
    },
    index: Number
  },
  filters: {
    uppercase(value) {
       // console.log(value)
      return value.toUpperCase()
    }
  }
}
</script>
<style scoped>
 li {
   border: 1px solid #ccc;
   display: flex;
   justify-content: space-between;
   padding: .5rem 2rem;
   margin-bottom: 1rem;
 }
 .btn-rm {
   background: #cb3b3b;
   color: #fff;
   /*border-radius: 50%;*/
   font-weight: bold;
   cursor: pointer;
 }
 input {
   margin-right: 1rem;
 }
 .done {
   text-decoration: line-through;
 }
</style>
