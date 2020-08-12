<template>
    <transition name="fade" mode="out-in" appear>
        <div>
            Showing Task # {{$route.params.id}}
        </div>

    </transition>
</template>

<script>
    export default {
        name: "ShowTask"
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }



</style>