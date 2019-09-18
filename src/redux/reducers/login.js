import { SUBMIT_FORM } from '../actionTypes';

const initialState = {
  name: '',
  email: '',
  password: ''
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM: {
      const { name, email, password, repeatedPassword } = action.payload;
      
      return {
        ...state,
        name,
        email,
        password,
        repeatedPassword
      }
    }

    default:
      return state;
  }
}
