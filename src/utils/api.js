import axios from "axios";

export default {
    //get 20 random employees
  searchEmployee: function() {
    return axios.get('https://randomuser.me/api/?inc=picture,name,phone,email&results=20');
  }
};