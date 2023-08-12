<template>
    <input class="todo-content-input" type="text" placeholder="请输入你的内容名称，按回车健确认2" @keyup.enter="add">
</template>

<script>
import { nanoid } from 'nanoid'

export default {
    name: 'MyHeader',
    props: ['addTodo'],
    methods: {
        add(e) {
            if (!e.target.value.trim()) return alert('输入不能为空')
            const todo = { id: nanoid(), title: e.target.value, done: false }
            this.addTodo(todo)
            e.target.value = ''
        }
    }
}
</script>
    
<style>
.todo-content-input {
    display: block;
    margin: auto;
    margin-top: 16px;
    width: 95%;
    box-sizing: content-box;
    height: 32px;
    line-height: 16px;
    border: solid 2px;
    border-color: #e2e2e2;
}
</style>