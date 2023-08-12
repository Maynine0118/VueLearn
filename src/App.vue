<template>
    <div class="todo-container">
        <MyHeader :addTodo="addTodo"></MyHeader>
        <MyList :todos="todos" :changeCheckbox="changeCheckbox" :deleteTodo="deleteTodo"></MyList>
        <MyFooter :todos="todos" :clearDone="clearDone" :selectAll="selectAll"></MyFooter>
    </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'

export default {
    name: 'App',
    components: { MyHeader, MyList, MyFooter },
    data() {
        return {
            todos: [
                { id: '001', title: '吃饭', done: true },
                { id: '002', title: '抽烟', done: false },
                { id: '003', title: '喝酒', done: false },
                { id: '004', title: '烫头', done: false }
            ]
        }
    },
    methods: {
        addTodo(todo) {
            this.todos.unshift(todo)
        },
        changeCheckbox(id) {
            this.todos.forEach((todo) => {
                if (todo.id === id) todo.done = !todo.done
            }
            )
            console.log('点击box')
        },
        deleteTodo(id) {
            this.todos = this.todos.filter((todo) => { return todo.id != id })

        },
        clearDone() {
            this.todos = this.todos.filter((todo) => {
                return !todo.done
            })
        },
        selectAll(value) {
            this.todos.forEach((todo) => {
                todo.done = value
            })
        }
    }
}
</script>

<style>
.todo-container {
    width: 600px;
    min-height: 300px;
    margin: auto;
    background-color: rgb(255, 255, 255);
    border: solid 1px #e2e2e2;
    border-radius: 3%;
}
</style>