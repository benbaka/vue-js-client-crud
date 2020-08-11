import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            alias: "/tasks",
            name: "tasks",
            component: () => import("./components/TaskList")
        },
        {
            path: "/new",
            name: "new",
            component: () => import("./components/NewTask")
        }
    ]
})