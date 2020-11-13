import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=100&nat=us&inc=name,email,phone,picture&seed=random";


// Export an object with a "search" method that searches the Giphy API for the passed query
// eslint-disable-next-line import/no-anonymous-default-export
const  API =  {
  getUsers: function() {
    return axios.get(BASEURL);
  }
};
export default API 