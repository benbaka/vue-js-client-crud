<template>

    <div class="open">

    <transition name="fade" mode="out-in" appear>
        <div class="col-md-6">
            <h4>Tasks List</h4>
            <table class="table table-bordered table-hover">
                <tbody>
                <tr v-for="(task, index) in tasks" v-bind:key="index">
                    <td>{{task.name}}</td>
                    <td>{{task.description}} <span v-if="task.completed" class="badge badge-success">Done</span><span v-else class="badge badge-danger">Pending ...</span>
                        </td>


                </tr>
                </tbody>
            </table>
        </div>

    </transition>
    </div>
</template>

    <script>

import DataService from "../services/DataService";


    export default {
        name: "TaskList",
        data() {
            return {
                show: true,
                tasks: [],
                currentTask: null,
                currentIndex: -1,
                title: "",

            }
        },

        methods: {
            isCompleted(task){
              if(task.completed){
                  return true
              }
              else{
                  return false;
              }
            },
            retrieveTasks(){
                DataService.getAll()
                    .then(response=>{
                        this.tasks = response.data.data;
                        console.log(response.data.data);
                        //console.log(this.tasks.data);
                    })
                    .catch(e=>{
                        console.log(e)
                    });
            },
        },
        mounted(){
            this.retrieveTasks();
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