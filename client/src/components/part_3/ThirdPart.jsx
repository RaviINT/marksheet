import React, { useState } from "react";
import "../../styles/part_3/ThirdPart.css";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import ThirdPartModal from "../modals/ThirdPartModal";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { remove_days } from "../../redux/actions/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CgPlayListAdd } from "react-icons/cg";
function ThirdPart() {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState(null);
  const { part_3 } = useSelector((state) => state.CardReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <ToastContainer />

      <div style={{ textAlign: "center" }}>
        <span>
          <CgPlayListAdd
            color="green"
            className="nikal"
            size={25}
            style={{ cursor: "pointer" }}
            onClick={() => {
              if (part_3.length == 2) {
                toast.error("All Terms are added", {
                  position: "bottom-right",
                });
                return;
              }
              setShow(true);
            }}
          />
        </span>
        <span className="heading">Part-III Attendence</span>
      </div>

      <div id="table">
        <Table
          striped
          bordered
          hover
          size="sm"
          className="table-responsive border border-dark"
        >
          <thead>
            <tr>
              <th rowSpan={2} className="per">
                Term
              </th>
              <th rowSpan={2} className="per">
                No of Working Days
              </th>
              <th rowSpan={2} className="per">
                No of Total Days
              </th>
              <th rowSpan={2} className="per">
                Percentage
              </th>
              <th className="nikal per" data-html2canvas-ignore="true" rowSpan={2}>
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {part_3.map((e, i) => (
              <tr key={e.id}>
                <td className="term per">{e.term}</td>
                <td className="term per">{e.working}</td>
                <td className="term per">100</td>
                <td className="term per">
                  {((e.working / 100) * 100).toFixed(2)}%
                </td>
                <td className="nikal" data-html2canvas-ignore="true" id="action">
                  <div>
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
                  </div>
                  <div>
                    <MdDelete
                      onClick={() => {
                        dispatch(remove_days(part_3, i));
                        toast.success(`${e.term} is Deleted`, {
                          position: "bottom-right",
                        });
                      }}
                      color="red"
                      size={20}
                      style={{ marginLeft: "10px", cursor: "pointer" }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <ThirdPartModal
        show={show}
        setShow={setShow}
        edit={edit}
        setEdit={setEdit}
        editData={editData}
      />
    </div>
  );
}

export default ThirdPart;
