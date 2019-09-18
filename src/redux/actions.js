import { SUBMIT_FORM } from "./actionTypes";


export const submitForm = userInfo => ({
  type: SUBMIT_FORM,
  payload: { ...userInfo }
});

