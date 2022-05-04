import http from "./http-common";

class LoginService {

    Login(data) {
        return http.post(`/login/`, data);
    }
    Logout(data) {
        return http.post(`/logout/`, data);
    }

    ValidateToken() {
        return http.post(`/ValidateToken`, data);
    }

}

export default new LoginService();
