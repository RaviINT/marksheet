import React, { useState } from "react";
import "../../styles/part_2/SecondPart.css";
import Table from "react-bootstrap/Table";
import SecondPartModal from "../modals/SecondPartModal";
import { useSelector, useDispatch } from "react-redux";
import { remove_skills } from "../../redux/actions/actions";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CgPlayListAdd } from "react-icons/cg";
function SecondPart() {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState(null);
  const { part_2 } = useSelector((state) => state.CardReducer);
  const dispatch = useDispatch();

  return (
    <div id="box">
      <ToastContainer />
      <div id="part_2">Part-II Co-Scholastic Areas</div>
      <Table
        striped
        bordered
        hover
        size="md"
        className="table-responsive border border-dark"
      >
        <thead>
          <tr>
            <th rowSpan={2} className="tableHead col-sm-1">
              SL No
            </th>
            <th>
              <CgPlayListAdd
                size={25}
                style={{ marginBottom: "-4px", cursor: "pointer" }}
                color="green"
                onClick={() => {
                  if (part_2.length == 9) {
                    toast.error("All Skills are added", {
                      position: "bottom-right",
                    });
                    return;
                  }
                  setShow(true);
                }}
                className="nikal"
              />
            </th>

            <th rowSpan={2}>Grade</th>
            <th className="nikal" data-html2canvas-ignore="true" rowSpan={2}>
              Actions
            </th>
          </tr>
          <tr>
            <td className="tableHead" style={{ fontWeight: "bold" }}>
              Skills
            </td>
            {/* <td>Grade</td> */}
          </tr>
        </thead>

        <tbody>
          {part_2.map((e, i) => (
            <tr key={e.id}>
              <td>{i + 1}</td>
              <td style={{ fontWeight: "bold" }}>{e.skills}</td>
              <td>{e.grade}</td>
              <td className="nikal" data-html2canvas-ignore="true">
                <FiEdit
                  onClick={() => {
                    setEditData(e);
                    setShow(true);
                    setEdit(true);
                  }}
                  color="blue"
                  size={18}
                  style={{ cursor: "pointer" }}
                />
                <MdDelete
                  onClick={() => {
                    dispatch(remove_skills(part_2, i));
                    toast.success(`${e.skills} is Deleted`, {
                      position: "bottom-right",
                    });
                  }}
                  color="red"
                  size={20}
                  style={{ marginLeft: "10px", cursor: "pointer" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <SecondPartModal
        show={show}
        setShow={setShow}
        edit={edit}
        setEdit={setEdit}
        editData={editData}
      />
    </div>
  );
}

export default SecondPart;
