import http from "../http-common";


class DataService {
    getAll(){
        return http.get("/api/tasks/list")
    }
}

export default new DataService();
