import http from "../http-common";


class DataService {
    getAll(){
        return http.get("/api/tasks/list")
    }

    show(id){
        return http.get("/api/task/show/" + id)
    }
}

export default new DataService();
