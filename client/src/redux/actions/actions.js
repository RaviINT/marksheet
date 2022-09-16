import {
  ADD_SUBJECT,
  REMOVE_SUBJECT,
  EDIT_SUBJECT,
  ADD_SKILLS,
  REMOVE_SKILLS,
  EDIT_SKILLS,
  ADD_DAYS,REMOVE_DAYS,EDIT_DAYS
} from "../actionTypes/actionTypes";
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

export const add_skills = (data) => {
  return {
    type: ADD_SKILLS,
    payload: data,
  };
};
export const remove_skills = (data, index) => {
  return {
    type: REMOVE_SKILLS,
    payload: data,
    index: index,
  };
};
export const edit_skills = (data, index) => {
  return {
    type: EDIT_SKILLS,
    payload: data,
    index: index,
  };
};
export const add_days = (data) => {
  return {
    type: ADD_DAYS,
    payload: data,
  };
};
export const remove_days = (data, index) => {
  return {
    type: REMOVE_DAYS,
    payload: data,
    index: index,
  };
};
export const edit_days = (data, index) => {
  return {
    type: EDIT_DAYS,
    payload: data,
    index: index,
  };
};