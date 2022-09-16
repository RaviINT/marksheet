import React, { useState } from "react";
import "../../styles/part_2/SecondPart.css";
import Table from "react-bootstrap/Table";
import SecondPartModal from "../modals/SecondPartModal";
import { useSelector, useDispatch } from "react-redux";
import { remove_skills } from "../../redux/actions/actions";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

function SecondPart() {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState(null);
  const { part_2 } = useSelector((state) => state.CardReducer);
  const dispatch = useDispatch();

  return (
    <div id="box">
      <div id="part_2" onClick={() => setShow(true)}>
        Part-II Co-Scholastic Areas
      </div>
      <Table
        striped
        bordered
        hover
        size="md"
        className="table-responsive border border-dark"
      >
        <thead>
          <tr>
            <th rowSpan={1} style={{ fontSize: "20px" }}>
              Skills
            </th>
            <th rowSpan={1} style={{ fontSize: "20px", paddingTop: "42px" }}>
              Grade
            </th>
            <th className="nikal" style={{ fontSize: "20px" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {part_2.map((e, i) => (
            <tr key={e.id}>
              <td>{e.skills}</td>
              <td>{e.grade}</td>
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
                  onClick={() => dispatch(remove_skills(part_2, i))}
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
