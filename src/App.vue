<template>
    <div class="todo-container">
        <MyHeader @addTodo="addTodo"></MyHeader>
        <MyList :todos="todos"></MyList>
        <MyFooter :todos="todos" @clearDone="clearDone" @selectAll="selectAll"></MyFooter>
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
        //添加事件
        addTodo(todo) {
            this.todos.unshift(todo)
        },
        //通过修改checkbox修改done值
        changeCheckbox(id) {
            this.todos.forEach((todo) => {
                if (todo.id === id) todo.done = !todo.done
            }
            )
        },
        //删除事件
        deleteTodo(id) {
            this.todos = this.todos.filter((todo) => { return todo.id != id })

        },
        //清楚所有已完成事件
        clearDone() {
            this.todos = this.todos.filter((todo) => {
                return !todo.done
            })
        },
        //全选或全不选
        selectAll(value) {
            this.todos.forEach((todo) => {
                todo.done = value
            })
        },
        handleBlur(id, title) {
            this.todos.forEach((todo) => {
                if (todo.id === id) todo.title = title
            }
            )
        }
        // editItem(id, input_title) {
        //     this.todos.forEach((todo) => {
        //         if (todo.id === id) {
        //             if (todo.isEdit) todo.title = input_title
        //             todo.isEdit = !todo.isEdit
        //         }
        //     })
        // }
    },
    //挂载时绑定然后销毁时解绑是最好的写法
    mounted() {
        this.$bus.$on('changeCheckbox', this.changeCheckbox)
        this.$bus.$on('deleteTodo', this.deleteTodo)
        this.$bus.$on('handleBlur', this.handleBlur)
        // this.$bus.$on('editItem', this.editItem)
    },
    beforeDestroy() {
        this.$bus.$off('changeCheckbox')
        this.$bus.$off('deleteTodo')
        this.$bus.$off('handleBlur')
        // this.$bus.$off('editItem', this.editItem)
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