<template>
    <ul class="todo-mylist">
        <MyItem v-for="todo in todos" :key="todo.id" :todo="todo" :changeCheckbox="changeCheckbox" :deleteTodo="deleteTodo">
        </MyItem>
    </ul>
</template>

<script>
import MyItem from './MyItem.vue'

export default {
    name: 'MyList',
    components: { MyItem },
    props: ['todos', 'changeCheckbox', 'deleteTodo']
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