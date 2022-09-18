import React from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { add_days, edit_days } from "../../redux/actions/actions";
import * as Yup from "yup";
import { Formik } from "formik";
import "../../styles/modals/ThirdPartModal.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupSchema = Yup.object().shape({
  working: Yup.number()
    .required("Days Required")
    .min(0, "Minimum atleast 0")
    .max(100, "Allowed maximum is 100"),
  term: Yup.string().required("Term Required"),
});
function ThirdPartModal({ show, setShow, edit, setEdit, editData }) {
  const { part_3 } = useSelector((state) => state.CardReducer);
  console.log("Part3--->", part_3);
  const dispatch = useDispatch();
  const handleClose = () => {
    setShow(false);
    setEdit(false);
  };
  function addDays(values) {
    dispatch(add_days(values));
    setShow(false);
    setEdit(false);
    toast.success(`${values.term} is successfully Added`, {
      position: "bottom-right",
    });
  }
  function editdays(values) {
    console.log("i", values);
    dispatch(edit_days(values));
    setShow(false);
    setEdit(false);
    toast.success(`${values.term} is successfully Edited`, {
      position: "bottom-right",
    });
  }
  const term = ["Term-I", "Term-II"];
  const selectedTerm = part_3.map((ele) => ele.term);
  return (
    <div>
      <ToastContainer />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="head">
            {edit ? "Edit" : "Add"} your Attendence
          </Modal.Title>
        </Modal.Header>
        <Formik
          initialValues={{
            working: edit ? editData.working : "",
            term: edit ? editData.term : "",
          }}
          validateOnMount={true}
          validationSchema={SignupSchema}
          onSubmit={edit ? editdays : addDays}
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
                  id="term"
                  name="term"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.term}
                  disabled={edit}
                >
                  <option value="" disabled>
                    Select term
                  </option>
                  {edit ? (
                    <>
                      {term.map((sub, i) => (
                        <option key={i}>{sub}</option>
                      ))}
                    </>
                  ) : (
                    <>
                      {term.map((sub, i) => {
                        return (
                          !selectedTerm.includes(sub) && (
                            <option key={i}>{sub}</option>
                          )
                        );
                      })}
                    </>
                  )}
                </select>
              </div>
              {errors.term && touched.term && (
                <div style={{ color: "red", textAlign: "center" }}>
                  {errors.term}
                </div>
              )}
              <div>
                <div className="con">
                  <div className="input_box">
                    <label id="label">Working</label>
                    <input
                      id="working"
                      placeholder="Max 100"
                      type="number"
                      value={values.working}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.working && touched.working
                          ? "text-input error"
                          : "text-input"
                      }
                    />
                    {errors.working && touched.working && (
                      <div className="err">{errors.working}</div>
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

export default ThirdPartModal;
