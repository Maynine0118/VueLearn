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
            todos: JSON.parse(localStorage.getItem('todos')) || []
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
    },
    watch: {
        //简写形式不能深度检测，当勾选改变时，无法存储勾选情况
        // todos(value) {
        //     localStorage.setItem('todos', JSON.stringify(value))
        // }
        todos: {
            deep: true,
            handler(value) {
                localStorage.setItem('todos', JSON.stringify(value))
            }
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