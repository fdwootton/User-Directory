import axios from 'axios';

let apiCall = {
    //retrieve 20 random users
      search: function() {
      return axios.get('https://randomuser.me/api/?inc=picture,name,phone,email&results=40&nat=us');
    }
}
export default apiCall;