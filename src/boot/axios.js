// axios boot file (src/boot/axios.js)

import Vue from "vue";
import axios from "axios";

// We create our own axios instance and set a custom base URL.
// Note that if we wouldn't set any config here we do not need
// a named export, as we could just `import axios from 'axios'`
const axiosInstance = axios.create({
  // baseURL: "http://localhost:7071/api"
  baseURL: "https://proutils-api.azurewebsites.net/api",
  headers: {'x-functions-key': '/mX2wC1cafEmdrvbJ3brCq00aAosjMKiVzUDYLlJVgHOptaKI/13VQ=='}
});

// for use inside Vue files through this.$axios
Vue.prototype.$axios = axiosInstance;

// Here we define a named export
// that we can later use inside .js files:
export { axiosInstance };
