import axios from "axios";

let GETrequest = {
    //retrieve 20 random employees
    searchEmployee: function() {
        return axios.get('https://randomuser.me/api/?inc=picture,name,phone,email&results=20');
      }
}
export default GETrequest