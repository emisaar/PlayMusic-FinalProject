import http from "./http-common";

class ScoresService {

    getGlobalScores() {
        return http.get(`/gameVariables/`);
    }

    getScores(pk) {
        return http.get(`/gameVariable/${pk}/`);
    }
    getAttempts() {
        return http.get(`/attempts/`);
    }
    getSessionTime() {
        return http.get(`/sessionData/`);
    }
}

export default new ScoresService();