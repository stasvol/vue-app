<template>
  <li>
   <span v-bind:class="{done: todo.completed}">
     <input type="checkbox" v-on:change="todo.completed = !todo.completed">
     <strong class="size">{{index + 1}}</strong>

<!--     {{uppercase(todo.title)}}-->
<!--     Class-->
     <span :class="!todo.completed ? 'primary' : 'danger' "><strong >{{index + 1}}</strong>{{uppercase(todo.title)}}</span>

<!--     <span :class="{-->
<!--       'primary': true,-->
<!--        'danger': todo.title.length > 20-->
<!--     }">{{uppercase(todo.title)}}</span>-->

<!--          <span :class="['primary', {'bold':todo.title.length < 15}]">{{uppercase(todo.title)}}</span>-->

<!--     {{todo.title}}-->
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
  methods: {
    uppercase(value) {
      console.log(value)
      return value.toUpperCase()
    }
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

[v-cloak] {
  display: none;
}

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
 .size {
   margin-right: .5rem;
 }
 .primary {
   color: #36af0e;
 }
 .danger {
   color: #b41616;
 }
 .bold {
   font-size: 2rem;
   color: #0f938b;
 }


</style>
