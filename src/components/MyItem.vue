<template>
    <li class="todo-myitem">
        <input type="checkbox" :checked="todo.done" class="todo-myitem-checkbox" @change="changeCheckbox(todo.id)">
        <span class="todo-myitem-span">{{ todo.title }}</span>
        <button class="todo-myitem-deletebutton" @click="deleteItem(todo.id)">删除</button>
    </li>
</template>

<script>
export default {
    name: 'MyItem',
    props: ['todo', 'changeCheckbox', 'deleteTodo'],
    methods: {
        deleteItem(id) {
            if (confirm('确定删除吗?')) {
                this.deleteTodo(id)
            }
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

.todo-myitem-deletebutton {
    margin-left: auto;
    display: none;
}

.todo-myitem:hover button {
    display: block;
    background-color: orangered;
}

.todo-myitem .todo-myitem-span {
    margin-left: 16px;
}

.todo-myitem:first-child {
    border-width: 2px;
}
</style>