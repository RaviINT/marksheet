import React, { useState, useEffect } from "react";
import "../../styles/part_1/FirstPart.css";
import Table from "react-bootstrap/Table";
import FirstPartModal from "../modals/FirstPartModal";
import { useSelector, useDispatch } from "react-redux";
import { remove_subject } from "../../redux/actions/actions";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

function FirstPart() {
  const [sum, setSum] = useState(0);
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState(null);
  const { part_1 } = useSelector((state) => state.CardReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    var res = 0;
    for (var i = 0; i < part_1.length; i++) {
      res +=
        part_1[i].fa + part_1[i].fa_oral + part_1[i].sa + part_1[i].sa_oral;
    }
    setSum(res);
    console.log(res);
  }, [part_1]);
  return (
    <div id="box">
      <div id="part_1" onClick={() => setShow(true)}>
        Part-I Scholastic Areas
      </div>
      <Table
        striped
        bordered
        hover
        size="md"
        className="table-responsive border border-dark"
        style={{ padding: "0px" }}
      >
        <thead>
          <tr>
            <th rowSpan={2} className="tableHead col-sm-1">
              SL No
            </th>
            <th className="tableHead  col-sm-6" rowSpan={2}>
              SUBJECTS
            </th>

            <th>FA</th>
            <th>Oral</th>
            <th>SA</th>
            <th>Oral</th>
            <th>Overall</th>
            <th rowSpan={2}>Actions</th>
          </tr>
          <tr>
            <td>40</td>
            <td>10</td>
            <td>40</td>
            <td>10</td>
            <td>100</td>
          </tr>
        </thead>

        <tbody className="tableBody">
          {part_1.map((e, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td style={{ fontWeight: "bold" }}>{e.subject} </td>
              <td>{e.fa}</td>
              <td>{e.fa_oral}</td>
              <td>{e.sa}</td>
              <td>{e.sa_oral}</td>
              <td style={{ fontWeight: "bold" }}>
                {e.fa + e.fa_oral + e.sa + e.sa_oral}
              </td>
              <td>
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
                  onClick={() => dispatch(remove_subject(part_1, i))}
                  color="red"
                  size={20}
                  style={{ marginLeft: "10px", cursor: "pointer" }}
                />
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={2} className="btm_name">
              GRAND TOTAL
            </td>

            <td colSpan={6} className="btm_name">
              {sum}
            </td>
          </tr>

          <tr>
            <td colSpan={2} className="btm_name">
              PERCENTAGE
            </td>

            <td colSpan={6} className="btm_name">
              {((sum / 1000) * 100).toFixed(2)}%
            </td>
          </tr>

          <tr>
            <td colSpan={2} className="btm_name">
              RANK
            </td>

            <td colSpan={6} className="btm_name">
              D
            </td>
          </tr>
        </tbody>
      </Table>
      <FirstPartModal
        show={show}
        setShow={setShow}
        edit={edit}
        setEdit={setEdit}
        editData={editData}
      />
    </div>
  );
}

export default FirstPart;
