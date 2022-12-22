import axios from "axios";
import queryString from "query-string";
class Instance {
  constructor() {
    this.instance = axios.create({
      baseURL: "/api",
      timeout: 10 * 1000, //10초
    });

    /**
     * ? 요청 인터셉터 - 2개의 콜백 함수를 받음
     * * 1) 요청 직전 - 파라미터 : axios config
     * * 2) 요청 에러 - 파라미터 : error
     */
    this.instance.interceptors.request.use(
      function (config) {
        try {
          // get 요청에 대해 data를 queryString으로 parse
          if (config.method === "get" && config.url && config.data) {
            config.url = queryString.stringifyUrl({
              url: config.url,
              query: config.data,
            });
          }
        } catch (err) {
          console.error("axios instance - queryString error");
          console.error(err);
        }

        let token;
        try {
          // get token
          token = store.state.user.token;
        } catch {
          //
        }

        if (token) {
          config.headers["jwt-auth-token"] = token;
        }

        return config;
      },
      function (error) {
        return Promise.reject(error);
      },
    );

    /**
     * ? 응답 인터셉터 - 2개의 콜백 함수를 받음
     * * 1) 응답 직전 - 파라미터 : http response
     * * 2) 응답 에러 - 파라미터 : http error
     */
    this.instance.interceptors.response.use(
      function (response) {
        // statusCode : 2xx
        return response;
      },

      function (error) {
        // statusCode : outside the range of 2xx
        errorHandler(error);
        return Promise.reject(error);
      },
    );
  }
}

export default new Instance().instance;