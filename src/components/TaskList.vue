<template>

    <div class="open">

    <transition name="fade" mode="out-in" appear>
        <div v-if="show">
            <h3>Listing All tasks here.</h3>
        </div>
    </transition>
    </div>
</template>

    <script>
    export default {
        name: "TaskList",
        data() {
            return {
                show: true
            }
        }
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