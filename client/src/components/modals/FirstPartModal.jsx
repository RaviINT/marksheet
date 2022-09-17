import React from "react";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik } from "formik";
import * as Yup from "yup";
import "../../styles/modals/FirstPartModal.css";
import { useDispatch, useSelector } from "react-redux";
import { add_subject, edit_subject } from "../../redux/actions/actions";

const SignupSchema = Yup.object().shape({
  // subject: Yup.required("required"),
  fa: Yup.number()
    .required("FA should be enter")
    .positive()
    .integer()
    .min("10")
    .max("40"),
  fa_oral: Yup.number()
    .required("FA Oral should be enter")
    .positive()
    .integer()
    .min("1")
    .max("10"),
  sa: Yup.number()
    .required("SA should be enter")
    .positive()
    .integer()
    .min("10")
    .max("40"),
  sa_oral: Yup.number("SA Oral should be enter")
    .required()
    .positive()
    .integer()
    .min("1")
    .max("10"),
  subject: Yup.string().required("Subject Required"),
});

function FirstPartModal({ show, setShow, edit, setEdit, editData }) {
  // const [subject, setSubject] = useState("");
  console.log("edittt", editData, edit);
  const { part_1 } = useSelector((state) => state.CardReducer);
  console.log("Part1--->", part_1);
  const dispatch = useDispatch();
  const subjects = [
    "English",
    "Hindi",
    "Maths",
    "Science",
    "Social Studies",
    "Sanskrit",
    "Computer",
    "EVS",
  ];
  const handleClose = () => {
    setShow(false);
    setEdit(false);
  };
  
  function addSubject(values) {
    console.log("i", values);
    dispatch(add_subject(values));
    setShow(false);
    setEdit(false);
    toast.success("Subject is successfully Added", {
      position: "bottom-right",
    });
  }
  function editSubject(values) {
    // console.log("iiid", id);
    dispatch(edit_subject(values));
    setShow(false);
    setEdit(false);
    toast.success("Subject is successfully Edited", {
      position: "bottom-right",
    });
  }
  const selectedSubjects = part_1.map((ele) => ele.subject);
  return (
    <div>
      <ToastContainer />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="head">
            {edit ? "Edit" : "Add"} your Subject
          </Modal.Title>
        </Modal.Header>
        <Formik
          initialValues={{
            subject: edit ? editData.subject : "",
            fa: edit ? editData.fa : "",
            fa_oral: edit ? editData.fa_oral : "",
            sa: edit ? editData.sa : "",
            sa_oral: edit ? editData.sa_oral : "",
          }}
          validateOnMount={true}
          validationSchema={SignupSchema}
          onSubmit={edit ? editSubject : addSubject}
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
                  id="subject"
                  name="subject"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.subject}
                  disabled={edit}
                >
                  <option value="" disabled>
                    Select One Subject
                  </option>
                  {edit ? (
                    <>
                      {subjects.map((sub, i) => (
                        <option key={i}>{sub}</option>
                      ))}
                    </>
                  ) : (
                    <>
                      {subjects.map((sub, i) => {
                        return (
                          !selectedSubjects.includes(sub) && (
                            <option key={i}>{sub}</option>
                          )
                        );
                      })}
                    </>
                  )}
                </select>
              </div>
              {errors.subject && touched.subject && (
                <div style={{ color: "red", textAlign: "center" }}>
                  {errors.subject}
                </div>
              )}
              <div>
                <div className="con">
                  <div className="input_box">
                    <label>FA</label>
                    <input
                      id="fa"
                      placeholder="Min-10 & Max-40"
                      type="number"
                      value={values.fa}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.fa && touched.fa
                          ? "text-input error"
                          : "text-input"
                      }
                    />
                    {errors.fa && touched.fa && (
                      <div className="err">{errors.fa}</div>
                    )}
                  </div>

                  <div className="input_box">
                    <label>FA Oral</label>
                    <input
                      id="fa_oral"
                      placeholder="Min-1 & Max-10"
                      type="number"
                      value={values.fa_oral}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.fa_oral && touched.fa_oral
                          ? "text-input error"
                          : "text-input"
                      }
                    />
                    {errors.fa_oral && touched.fa_oral && (
                      <div className="err">{errors.fa_oral}</div>
                    )}
                  </div>
                  <div className="input_box">
                    <label>SA</label>
                    <input
                      id="sa"
                      placeholder="Min-10 & Max-40"
                      type="number"
                      value={values.sa}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.sa && touched.sa
                          ? "text-input error"
                          : "text-input"
                      }
                    />
                    {errors.sa && touched.sa && (
                      <div className="err">{errors.sa}</div>
                    )}
                  </div>
                  <div className="input_box">
                    <label>SA Oral</label>
                    <input
                      id="sa_oral"
                      placeholder="Min-1 & Max-10"
                      type="number"
                      value={values.sa_oral}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.sa_oral && touched.sa_oral
                          ? "text-input error"
                          : "text-input"
                      }
                    />
                    {errors.sa_oral && touched.sa_oral && (
                      <div className="err">{errors.sa_oral}</div>
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

export default FirstPartModal;
