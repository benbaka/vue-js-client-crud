<template>
    <div class="jumbotron">
        <div class="container">
            <div class="row">
                <div class="col-sm-8 offset-sm-2">
                    <div>
                        <h2>New Task - </h2>
                        <p class="lead">Add a new task to your daily list of doables to ensure you don't remember</p>
                        <form @submit.prevent="handleSubmit">
                            <div class="form-group ">
                                <label for="name"><b>Name</b></label>
                                <input type="text" v-model="task.name" id="name" name="name" class="form-control" :class="{ 'animated headShake  is-invalid':  $v.task.name.$error }" />
                                <div v-if="!$v.task.name.required" class="invalid-feedback">
                                    <span>Name is required</span>
                                </div>
                                <span v-if="!$v.task.name.minLength" class="invalid-feedback">Name must have more than 2 characters</span>

                            </div>
                            <div class="form-group">
                                <label for="name"><b>Description</b></label>
                                <input type="text" v-model="task.description" name="name" class="form-control" :class="{ 'animated headShake is-invalid':  $v.task.description.$error }" />
                                <div v-if=" !$v.task.description.required" class="invalid-feedback">
                                    <span>Description is required</span>
                                </div>
                                <span v-if="!$v.task.description.minLength" class="invalid-feedback">Name must have more than 2 characters</span>

                            </div>

                            <div class="pretty p-default p-thick p-pulse p-bigger">
                                <input type="checkbox" v-model="task.completed" name="completed"/>
                                <div class="state p-success-o">
                                    <label for="name"><b>Completed</b>   </label>
                                </div>
                            </div>
                            <hr>
                            <br><br>
                            <div class="form-group">
                                <label for="testAnswer">Test Question: <b>{{testQuestion}}</b></label>
                                <input type="text" v-model="testAnswer" name="testAnswer" class="form-control" :class="{'animated headShake is-invalid': $v.testAnswer.$error}"/>
                                <div v-if="!$v.testAnswer.required" class="invalid-feedback"><span>Evaluate the expression and put in the correct answer</span></div>
                                <div v-if="!$v.testAnswer.integer" class="invalid-feedback"><span>Answer must be a number</span></div>
                            </div>

                            <div class="form-group float-right">
                                <button class="btn btn-primary">Register</button>
                            </div>

                        </form>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    //import {required, email, minLength, sameAs} from "vuelidate/lib/validators"
    import {required, minLength, integer} from "vuelidate/lib/validators"


    // Custom validations
    function checkAnswer(){
        if(parseInt(this.testAnswer)===5){
            return true
        }
        else{
            return false
        }
    }
    export default {
        name: "NewTask",

        data(){
            return {
                testQuestion: "What is 3 + 3 = ? ",
                testAnswer: null,

                task: {
                    name: "",
                    description: "",
                    completed: false,
                },
                submitted: true
            }
        }
        ,
        validations: {
            task: {
                name: {required, minLength: minLength(2)},
                description: {required, minLength: minLength(2)}
            },
            testAnswer: {required, checkAnswer,  integer: integer}
        },
        methods: {
            handleSubmit(e){
                e.toString()
                this.submitted = true;

                this.$v.$touch();
                if(this.$v.$invalid){
                    return ;
                }
                alert("SUCCESS !! "+JSON.stringify(this.task));
            },


        },

    }
</script>

<style scoped>


</style>