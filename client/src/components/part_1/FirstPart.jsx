import React, { useState, useEffect } from "react";
import "../../styles/part_1/FirstPart.css";
import Table from "react-bootstrap/Table";
import FirstPartModal from "../modals/FirstPartModal";
import { useSelector, useDispatch } from "react-redux";
import { remove_subject } from "../../redux/actions/actions";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CgPlayListAdd } from "react-icons/cg";
function FirstPart() {
  const [sum, setSum] = useState(0);
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState(null);
  const { part_1, grade } = useSelector((state) => state.CardReducer);
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
      <ToastContainer />
      <div id="part_1">Part-I Scholastic Areas</div>
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
            <th>
              <CgPlayListAdd
                size={25}
                style={{ marginBottom: "-4px", cursor: "pointer" }}
                color="green"
                onClick={() => {
                  if (part_1.length == 8) {
                    toast.error("All Subjects are added", {
                      position: "bottom-right",
                    });
                    return;
                  }
                  setShow(true);
                }}
                className="nikal"
              />
            </th>

            <th>FA</th>
            <th>Oral</th>
            <th>SA</th>
            <th>Oral</th>
            <th>Overall</th>
            <th className="nikal" id="element-to-hide action"
        data-html2canvas-ignore="true"  rowSpan={2}>
              Actions
            </th>
          </tr>
          <tr>
            <td className="tableHead" style={{ fontWeight: "bold" }}>
              SUBJECTS
            </td>

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
              <td className="subName">{e.subject} </td>
              <td>{e.fa}</td>
              <td>{e.fa_oral}</td>
              <td>{e.sa}</td>
              <td>{e.sa_oral}</td>
              <td style={{ fontWeight: "bold" }}>
                {e.fa + e.fa_oral + e.sa + e.sa_oral}
              </td>
              <td
                className="nikal"
                id="element-to-hide actionDiv"
                data-html2canvas-ignore="true"
                style={{ border: "none" }}
              >
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
                      dispatch(remove_subject(part_1, i));
                      toast.success(`${e.subject} is Deleted`, {
                        position: "bottom-right",
                      });
                    }}
                    color="red"
                    size={20}
                    style={{ cursor: "pointer" }}
                  />
                </div>
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
              {((sum / 800) * 100).toFixed(2)}%
            </td>
          </tr>

          <tr>
            <td colSpan={2} className="btm_name">
              RANK
            </td>

            <td colSpan={6} className="btm_name">
              {grade}
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
