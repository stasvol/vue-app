<template >
  <div style="background: #baf3f3" v-cloak>
    <h2 style="color: #b41616; fontSize: 3rem">Example</h2>
      <hr>
    <div v-cloak class="list">
           <span v-html="myHTML"></span>

      <hr>
            <ul style="listStyle: none ">
             <li v-for="({title},i) in todo" style="border: 1px solid silver; padding: 5px; display:flex"> {{i+1}}. {{title}}</li>
           </ul>

      <hr>
           <h3 :title="title">{{title}}!!!</h3> &nbsp;
           <h4 v-text="title"></h4> &nbsp;
           <h3 v-once>{{title}} --  v-once</h3> &nbsp;
           <button @click="title='CHANGE -> NAME~STRING'">change</button>

      <hr>
          <span v-pre>{{todo.title}} -- pre</span> &nbsp;
      <hr>
      <div><li v-for="(el, i) in 3">{{i}}. {{el}}</li></div>

      <hr>
      <div><li v-for="(value, key) in person">{{key}}:  {{value}}</li></div>

      <hr>
      <div>
        <input  type="text"
                class="input"
                @keyup.enter="addItem($event)"
                ref="myInput"
        />
      </div>
      <ul v-if="items.length" class="list">
        <li  class="rm"
             v-for="(item,i) in items"
             @click="removeItem(i), logItems(item)"
        >
                {{item}}
          <input type="text"
                 @click.prevent.stop
                 :key="item"
          />
<!--                 @click="stopPropagation"-->

        </li>
      </ul>
    <!--  <h3 v-else>Item not. Add item</h3>-->
      <h3 v-show="items.length===0">Item not. Add item</h3>
    </div>
      <hr>
  </div>
</template>

<script>
export default {
  data:() =>({
    title: "Fallback options",
    todo:[
      { id:1, title: 'Купити хліб' , completed: false},
      { id:2, title: 'Купити масло' , completed: false},
      { id:3, title: 'Купити сир' , completed: false}
    ],
    myHTML: '<h3> h3 TEG HTML </h3>',
    person: {
      fulName: 'Rembo',
      name: 'Filik',
      age: 30
    },
    items: [1,2,3,4,5,6,7,8]
  }),
  methods: {
    stopPropagation:(event)=> {
      event.stopPropagation()
    },
    removeItem(i) {
      this.items.splice(i,1)
    },
    logItems(item) {
      console.log(item)
    },
    addItem(event) {
      this.items.unshift(this.$refs.myInput.value)
      console.log(event.key)
      this.$refs.myInput.value = ''
    }
  },
  computed: {
    filterItem() {
      return this.items.filter(el => el % 2 === 0)
    }
  }
  // props: {
  //   todo:{
  //     type: Object,
  //     require: true
  //   },
  //   index: Number
  // },
}
</script>

<style scoped>
[v-cloak] {
  display: none;
}
.list {
  list-style: none;
}
.rm {
  cursor: pointer;
}
.input {
  height: 20px;
}
</style>