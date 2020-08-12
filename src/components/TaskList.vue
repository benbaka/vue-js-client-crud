<template>

    <div class="open">

    <transition name="fade" mode="out-in" appear>
        <div class="col-md-10">
            <h4>Tasks List</h4>
            <table class="table table-bordered table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(task, index) in tasks" v-bind:key="index">
                    <td>{{task.id}}</td>
                    <td>{{task.name}}</td>
                    <td>{{task.description}} <span v-if="task.completed" class="badge badge-success">Done</span>
                        </td>
                    <td> Edit | Delete | Show </td>

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