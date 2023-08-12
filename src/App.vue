<template>
    <div class="todo-container">
        <MyHeader></MyHeader>
        <MyList></MyList>
        <MyFooter></MyFooter>
    </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'

export default {
    name: 'App',
    components: { MyHeader, MyList, MyFooter }
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