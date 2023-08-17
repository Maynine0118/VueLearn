<template>
    <transition appear name="animate__animated animate__bounce" enter-active-class="animate__fadeInLeft"
        leave-active-class="animate__fadeOutLeft">
        <li class="todo-myitem">
            <input type="checkbox" :checked="todo.done" class="todo-myitem-checkbox" @change="changeCheckbox(todo.id)">
            <span class="todo-myitem-span" v-show="!todo.isEdit">{{ todo.title }}</span>
            <input class="todo-myitem-input" v-show="todo.isEdit" :value="todo.title" @blur="handleBlur(todo, $event)"
                ref="inputTitle">
            <button class="todo-myitem-editbutton" @click="handleEdit(todo)">编辑</button>
            <button class="todo-myitem-deletebutton" @click="deleteItem(todo.id)">删除</button>
        </li>
    </transition>
</template>

<script>

import 'animate.css'
export default {
    name: 'MyItem',
    props: ['todo'],
    methods: {
        deleteItem(id) {
            if (confirm('确定删除吗?')) {
                this.$bus.$emit('deleteTodo', id)
            }
        },
        changeCheckbox(id) {
            this.$bus.$emit('changeCheckbox', id)
        },
        handleEdit(todo) {
            if (Object.prototype.hasOwnProperty.call(todo, 'isEdit')) {
                todo.isEdit = true
            } else {
                this.$set(this.todo, 'isEdit', true)
            }
            this.$nextTick(function () {
                this.$refs.inputTitle.focus()
            })
        },
        handleBlur(todo, e) {
            todo.isEdit = false
            if (!e.target.value.trim()) return alert('输入不能为空')
            this.$bus.$emit('handleBlur', todo.id, e.target.value)
        }

    }
}
</script>

<style>
.todo-myitem {
    border: solid #e2e2e2;
    border-width: 0px 2px 2px 2px;
    box-sizing: content-box;
    margin: auto;
    padding-left: 2px;
    padding-right: 2px;
    width: 95%;
    height: 32px;
    display: flex;
    align-items: center;
}

.todo-myitem:hover {
    background-color: rgb(112, 112, 112);
}

.todo-myitem-editbutton {
    margin-left: auto;
    display: none;
}

.todo-myitem-deletebutton {
    margin-left: 5px;
    display: none;
}

.todo-myitem:hover button {
    display: block;
    background-color: orangered;
}

.todo-myitem .todo-myitem-span {
    margin-left: 16px;
}

.todo-myitem-input {
    margin-left: 16px;
}

.todo-myitem:first-child {
    border-width: 2px;
}
</style>