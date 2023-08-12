<template>
    <div class="todo-myfooter">
        <input type="checkbox" class="todo-myitem-checkbox">
        <span class="todo-myfooter-span">已完成0/3</span>
        <button class="todo-myfooter-button">点击添加事件</button>
    </div>
</template>

<script>
export default {
    name: 'MyFooter'
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