const initialState = {
  id: 0,
  username: '',
  password: '',
  isLoggedIn: false,
}

export default function authReducer(state = initialState, action){
  
  switch (action.type){
    case 'login-success':
        return {
            ...action.payload,
            isLoggedIn: true,
        }
    case 'logout-success':
        return {...initialState};  
    default:
        return state;
  }
}
