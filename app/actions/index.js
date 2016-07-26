import axios from 'axios';

export const CREATE_USER = 'CREATE_USER';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER_WITH_ID = 'FETCH_USER_WITH_ID';
export const DELETE_USER = 'DELETE_USER';

const ROOT_URL = 'http://localhost:3000';
const API_KEY = '';//'?key=raditsimplereactcs';

export function fetchUsers(){
  const request = axios.get(`${ROOT_URL}/api/users${API_KEY}`);
  return{
    type : FETCH_USERS,
    payload : request
  };
}

export function createUser(props){
  const request = axios.post(`${ROOT_URL}/api/users${API_KEY}`, props);
  return{
    type: CREATE_USER,
    payload : request
  };
}

export function fetchUserWithId(id){
  const request =  axios.get(`${ROOT_URL}/api/users/${id}${API_KEY}`);
  console.log(request);
  return{
    type : FETCH_USER_WITH_ID,
    payload: request
  }
}

export function deleteUser(id){
  const request = axios.delete(`${ROOT_URL}/api/users/${id}${API_KEY}`);
  return{
    type: DELETE_USER,
    payload : request
  }

}
