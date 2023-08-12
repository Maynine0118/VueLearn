<template>
    <ul class="todo-mylist">
        <MyItem></MyItem>
        <MyItem></MyItem>
        <MyItem></MyItem>
    </ul>
</template>

<script>
import MyItem from './MyItem.vue'

export default {
    name: 'MyList',
    components: { MyItem }
}
</script>

<style>
.todo-mylist {
    margin: auto;
    margin-top: 32px;
    padding-left: 0px;
    list-style: none;
}
</style>