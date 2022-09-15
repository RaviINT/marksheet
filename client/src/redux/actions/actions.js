import { ADD_SUBJECT, REMOVE_SUBJECT,EDIT_SUBJECT } from "../actionTypes/actionTypes";
export const add_subject = (data) => {
  return {
    type: ADD_SUBJECT,
    payload: data,
  };
};
export const remove_subject = (data, index) => {
  return {
    type: REMOVE_SUBJECT,
    payload: data,
    index: index,
  };
};
export const edit_subject = (data, index) => {
  return {
    type: EDIT_SUBJECT,
    payload: data,
    index: index,
  };
};