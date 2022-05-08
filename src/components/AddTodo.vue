<template>
  <form @submit.prevent="onSubmit">
    <h2 :style="{
      color: title.length <= 5 ? 'blue' : 'green',
      fontSize: title.length <= 5 ? '2rem ' : '4rem'
    }">{{title}}</h2>
    <input  type="text" v-model="title" v-on:keypress.enter="onSubmit"/>
    <button  type="submit">Add todo</button>

  </form>
</template>
<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit() {
      // console.log('submit', this.title)
      if (this.title !== '' && this.title.trim()){
        const newTodo = {
          id: Date.now(),
         title:this.title,
         completed:false
        }
        this.$emit('add-todo', newTodo)
        this.title = ''
      }
    },
    // inputKeyPress(event) {
    //   console.log(event.key)
    //   if (event.key === 'Enter') {
    //     this.onSubmit()
    //   }
    // }
  },
  watch: {
    title(value) {
      if (value.length > 10)  this.title = ''
      console.log(value)
    }
  }
}
</script>
<style scoped>
/*form {*/
/*  display: flex;*/
/*}*/
input {
  width: 50%;
}
</style>