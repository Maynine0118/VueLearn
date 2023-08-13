<template>
    <div class="todo-myfooter" v-if="total">
        <input type="checkbox" class="todo-myitem-checkbox" :checked="AllDone" @change="checkAll">
        <span class="todo-myfooter-span">已完成{{ donetotal }}/{{ total }}</span>
        <button class="todo-myfooter-button" @click="clearDone">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'MyFooter',
    props: ['todos', 'clearDone', 'selectAll'],
    computed: {
        //计算已完成的
        donetotal() {
            //括号函数可以简写，只有一行可以省略return；rudece专门用于统计
            return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
        },
        //总共
        total() {
            return this.todos.length
        },
        //是否全选
        AllDone() {
            if (this.total === 0) return false
            return this.total === this.donetotal
        }
    },
    methods: {
        //全选或全不选
        checkAll(e) {
            this.selectAll(e.target.checked)
        }
    }
}
</script>

<style>
.todo-myfooter {
    box-sizing: content-box;
    margin: auto;
    margin-top: 16px;
    padding-left: 2px;
    padding-right: 2px;
    width: 95%;
    height: 32px;
    display: flex;
    align-items: center;
}

.todo-myfooter .todo-myfooter-span {
    margin-left: 16px;
}

.todo-myfooter .todo-myfooter-button {
    margin-left: auto;
}
</style>