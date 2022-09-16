import {
  ADD_SUBJECT,
  REMOVE_SUBJECT,
  EDIT_SUBJECT,
  ADD_SKILLS,
  REMOVE_SKILLS,
  EDIT_SKILLS,
  ADD_DAYS,
  EDIT_DAYS,
  REMOVE_DAYS,
} from "../actionTypes/actionTypes";
const initialState = {
  part_1: [],
  part_2: [],
  part_3: [],
};
const CardReducer = (state = initialState, { type, payload, index }) => {
  switch (type) {
    case ADD_SUBJECT:
      console.log("pay", payload);
      return {
        ...state,
        part_1: [...state.part_1, payload],
      };
    case REMOVE_SUBJECT: {
      const filter = state.part_1.filter((e, i) => i !== index);
      const AfterDeleteSub = filter;

      return {
        ...state,
        part_1: AfterDeleteSub,
      };
    }
    case EDIT_SUBJECT: {
      console.log("pay", payload);
      const edit_subject = state.part_1.map((e) =>
        e.subject === payload.subject
          ? {
              ...e,
              fa: payload.fa,
              fa_oral: payload.fa_oral,
              sa: payload.sa,
              sa_oral: payload.sa_oral,
            }
          : e
      );
      return {
        ...state,
        part_1: edit_subject,
      };
    }
    case ADD_SKILLS:
      console.log("pay", payload);
      return {
        ...state,
        part_2: [...state.part_2, payload],
      };
    case REMOVE_SKILLS: {
      const filter = state.part_2.filter((e, i) => i !== index);
      const AfterDeleteSub = filter;

      return {
        ...state,
        part_2: AfterDeleteSub,
      };
    }
    case EDIT_SKILLS: {
      console.log("pay", payload);
      const edit_skills = state.part_2.map((e) =>
        e.skills === payload.skills
          ? {
              ...e,
              grade: payload.grade,
            }
          : e
      );
      return {
        ...state,
        part_2: edit_skills,
      };
    }
    case ADD_DAYS:
      console.log("pay", payload);
      return {
        ...state,
        part_3: [...state.part_3, payload],
      };
    case REMOVE_DAYS: {
      const filter = state.part_3.filter((e, i) => i !== index);
      const AfterDeleteSub = filter;

      return {
        ...state,
        part_3: AfterDeleteSub,
      };
    }
    case EDIT_DAYS: {
      console.log("pay", payload);
      const edit_days = state.part_3.map((e) =>
        e.term === payload.term
          ? {
              ...e,
              working: payload.working,
            }
          : e
      );
      return {
        ...state,
        part_3: edit_days,
      };
    }
    default:
      return state;
  }
};
export default CardReducer;
