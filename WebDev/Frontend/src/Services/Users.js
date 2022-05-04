import http from "./http-common";

class UsersService {

    signupUser(data) {
        return http.post(`/users/`, data);
    }

    getUsers() {
        return http.get(`/users/`);
    }
    getUser(pk) {
        return http.get(`/user/${pk}/`);
    }
}

export default new UsersService();