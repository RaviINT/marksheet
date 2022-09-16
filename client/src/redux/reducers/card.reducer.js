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
  grade: "",
  remarks: "",
  sum: 0,
};
const arr = [
  { MIN: 91, MAX: 100, GRADES: "A1", REMARKS: "Excellent" },
  { MIN: 81, MAX: 90, GRADES: "A2", REMARKS: "Very Good" },
  { MIN: 71, MAX: 80, GRADES: "B1", REMARKS: "Good" },
  { MIN: 61, MAX: 70, GRADES: "B2", REMARKS: "Average" },
  { MIN: 51, MAX: 60, GRADES: "C1", REMARKS: "Need to study" },
  { MIN: 41, MAX: 50, GRADES: "C2", REMARKS: "Poor" },
  { MIN: 0, MAX: 40, GRADES: "D", REMARKS: "Fail" },
];
function returnGradesAndRemarks(number, key) {
  let print;
  arr.forEach((e) => {
    if (e.MIN <= number && e.MAX >= number) {
      console.log(e);
      print = e[key];
    }
  });
  return print;
}
const CardReducer = (state = initialState, { type, payload, index }) => {
  switch (type) {
    case ADD_SUBJECT: {
      console.log("pay", payload);
      let sum = 0;
      for (let i = 0; i < [...state.part_1, payload].length; i++) {
        sum +=
          [...state.part_1, payload][i].fa +
          [...state.part_1, payload][i].fa_oral +
          [...state.part_1, payload][i].sa +
          [...state.part_1, payload][i].sa_oral;
      }

      const grade = returnGradesAndRemarks(
        Math.ceil((sum / 800) * 100).toFixed(2),
        "GRADES"
      );
      // const cgpa=Math.ceil((sum / 800) * 100).toFixed(2)
      const remarks = returnGradesAndRemarks(
        Math.ceil((sum / 800) * 100).toFixed(2),
        "REMARKS"
      );
      console.log(returnGradesAndRemarks(100, "REMARKS"), sum);
      return {
        ...state,
        part_1: [...state.part_1, payload],
        grade: grade,
        remarks: remarks,
      };
    }
    case REMOVE_SUBJECT: {
      const filter = state.part_1.filter((e, i) => i !== index);
      const AfterDeleteSub = filter;
      let sum = 0;
      for (let i = 0; i < filter.length; i++) {
        sum +=
          filter[i].fa + filter[i].fa_oral + filter[i].sa + filter[i].sa_oral;
      }
      const grade = returnGradesAndRemarks(
        Math.ceil((sum / 800) * 100).toFixed(2),
        "GRADES"
      );
      // const cgpa=Math.ceil((sum / 800) * 100).toFixed(2)
      const remarks = returnGradesAndRemarks(
        Math.ceil((sum / 800) * 100).toFixed(2),
        "REMARKS"
      );
      return {
        ...state,
        part_1: AfterDeleteSub,
        grade: grade,
        remarks: remarks,
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
