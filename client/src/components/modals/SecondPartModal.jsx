import React from "react";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik } from "formik";
import * as Yup from "yup";
import "../../styles/modals/SecondPartModal.css";
import { useDispatch, useSelector } from "react-redux";
import { add_skills, edit_skills } from "../../redux/actions/actions";

const SignupSchema = Yup.object().shape({
  skills: Yup.string().required("Subject Required"),
  grade: Yup.string().required("Grade Required"),
});

function SecondPartModal({ show, setShow, edit, setEdit, editData }) {
  // const [subject, setSubject] = useState("");
  console.log("edittt", editData, edit);
  const { part_2 } = useSelector((state) => state.CardReducer);
  console.log("Part1--->", part_2);
  const dispatch = useDispatch();
  const skills = [
    "Development",
    "Attitude",
    "Responsilbility",
    "Self Confidence",
    "Participations in Group Work",
    "Neetness",
    "Music",
    "Disciplane",
    "Hard Work",
  ];
  const grades = ["A+", "A", "B+", "B", "C+", "C", "D+", "D"];
  const handleClose = () => {
    setShow(false);
    setEdit(false);
  };
  function addSkills(values) {
    console.log("i", values);
    dispatch(add_skills(values));
    setShow(false);
    setEdit(false);
    toast.success(`${values.skills} is successfully Added`, {
      position: "bottom-right",
    });
  }
  function editSkills(values) {
    console.log("i", values);
    dispatch(edit_skills(values));
    setShow(false);
    setEdit(false);
    toast.success(`${values.skills} is successfully Edited`, {
      position: "bottom-right",
    });
  }
  const selectedSkills = part_2.map((ele) => ele.skills);
  return (
    <div>
      <ToastContainer />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="head">
            {edit ? "Edit" : "Add"} your Skills
          </Modal.Title>
        </Modal.Header>
        <Formik
          initialValues={{
            skills: edit ? editData.skills : "",
            grade: edit ? editData.grade : "",
          }}
          validateOnMount={true}
          validationSchema={SignupSchema}
          onSubmit={edit ? editSkills : addSkills}
        >
          {({
            values,
            touched,
            errors,
            // dirty,
            // isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            // isValid,
            // handleReset,
          }) => (
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "10px ",
                }}
              >
                <select
                  id="skills"
                  name="skills"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.skills}
                  disabled={edit}
                >
                  <option value="" disabled>
                    Select Skills
                  </option>
                  {edit ? (
                    <>
                      {skills.map((sub, i) => (
                        <option key={i}>{sub}</option>
                      ))}
                    </>
                  ) : (
                    <>
                      {skills.map((sub, i) => {
                        return (
                          !selectedSkills.includes(sub) && (
                            <option key={i}>{sub}</option>
                          )
                        );
                      })}
                    </>
                  )}
                </select>
              </div>
              {errors.skills && touched.skills && (
                <div style={{ color: "red", textAlign: "center" }}>
                  {errors.skills}
                </div>
              )}
              <div>
                <div className="con">
                  <div className="input_box">
                    <label>Grade</label>
                    <select
                      id="grade"
                      name="grade"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.grade}
                    >
                      <option value="" disabled>
                        Select Grade
                      </option>
                      {grades.map((e) => (
                        <option key={e}>{e}</option>
                      ))}
                    </select>

                    {errors.grade && touched.grade && (
                      <div className="err">{errors.grade}</div>
                    )}
                  </div>
                </div>
                <div style={{ width: "100px", margin: "auto" }}>
                  <button id="btn" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </Modal>
    </div>
  );
}

export default SecondPartModal;
