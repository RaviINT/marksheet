import {
  ADD_SUBJECT,
  REMOVE_SUBJECT,
  EDIT_SUBJECT,
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
    default:
      return state;
  }
};
export default CardReducer;
