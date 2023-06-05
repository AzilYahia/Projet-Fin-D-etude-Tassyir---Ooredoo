import axios from 'axios';

// Create a custom Axios instance
let axiosInstance;
if(localStorage.getItem('token')){
 axiosInstance = axios.create({
    // baseURL: 'https://pfe.ramzi-issiakhem.com/api/v1/', // Set your base URL
    headers: {
        common: {
            'Content-Type': 'application/json',
            // Retrieve the token from local storage
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    },
});
}else{
     axiosInstance = axios.create({});
}

export default axiosInstance;
