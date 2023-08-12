<template>
    <li class="todo-myitem">
        <input type="checkbox" class="todo-myitem-checkbox">
        <span class="todo-myitem-span">大撒大撒</span>
    </li>
</template>

<script>
export default {
    name: 'MyItem'
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

.todo-myitem .todo-myitem-span {
    margin-left: 16px;
}

.todo-myitem:first-child {
    border-width: 2px;
}
</style>