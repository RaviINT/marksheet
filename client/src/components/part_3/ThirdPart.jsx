import React, { useState } from "react";
import "../../styles/part_3/ThirdPart.css";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import ThirdPartModal from "../modals/ThirdPartModal";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { remove_days } from "../../redux/actions/actions";

function ThirdPart() {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState(null);
  const { part_3 } = useSelector((state) => state.CardReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="heading" onClick={() => setShow(true)}>
        Part-III Attendence
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
              <th rowSpan={2}></th>
              <th rowSpan={2}>No of Working Days</th>
              <th rowSpan={2}>No of Total Days</th>
              <th rowSpan={2}>Percentage</th>
              <th className="nikal" rowSpan={2}>
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {part_3.map((e, i) => (
              <tr key={e.id}>
                <td className="term">{e.term}</td>
                <td className="term">{e.working}</td>
                <td className="term">100</td>
                <td className="term">
                  {((e.working / 100) * 100).toFixed(2)}%
                </td>
                <td className="nikal">
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
                    onClick={() => dispatch(remove_days(part_3, i))}
                    color="red"
                    size={20}
                    style={{ marginLeft: "10px", cursor: "pointer" }}
                  />
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
