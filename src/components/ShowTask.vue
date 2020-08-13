<template>
    <transition name="fade" mode="out-in" appear>
        <div>
            <div class="row">
                <div class="col-md-10"></div>
                <div class="col-md-2"><go-back></go-back></div>
            </div>

            <h3>Showing Task # {{task_id}}</h3>

            <p class="lead">A Basic show of a task's detail ....</p>


            <div class="row">
                <div class="col-lg-5">
                    <dl class="row">
                        <dt class="col-sm-3">Id #:</dt>
                        <dd class="col-sm-9">{{task.id}}</dd>
                        <dt class="col-sm-3">Name:</dt>
                        <dd class="col-sm-9"> {{task.name}}</dd>
                        <dt class="col-sm-3">Description:</dt>
                        <dd class="col-sm-9">{{task.description}}</dd>
                        <dd class="col-sm-1"><div class="form-check form-check-inline">
                            <div v-if="task.completed">
                                <input class="form-check-input" type="checkbox" value="option1" checked>
                            </div>
                            <div v-else>
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                            </div>
                        </div></dd>
                        <dt class="col-sm-3">
                            <label class="form-check-label" for="inlineCheckbox1">Completed</label>
                        </dt>
                    </dl>
                </div>

            </div>
        </div>

    </transition>
</template>

<script>
    import DataService from "../services/DataService";
    import GoBack from "./GoBack";

    export default {
        name: "ShowTask",
        components: {GoBack},
        data(){
            return {
                task_id: this.$route.params.id,
                task: {},
            }
        },

        methods: {
            show_task() {
                DataService.show(this.task_id)
                    .then(response => {
                        this.task = JSON.parse(response.data.data).data;

                        console.log(this.task.id);

                    })
                    .catch(e => {
                        console.log(e)
                    })
            }
        },
        mounted(){
            this.show_task();
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