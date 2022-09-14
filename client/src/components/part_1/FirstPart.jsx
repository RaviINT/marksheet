import React, { useState, useEffect } from "react";
import "../../styles/part_1/FirstPart.css";
import Table from "react-bootstrap/Table";
import data from "../../data/data.json";
import FirstPartModal from "../modals/FirstPartModal";

function FirstPart() {
  const [sum, setSum] = useState(0);
  const [show, setShow] = useState(false);
  console.log("data", data);
  useEffect(() => {
    var res = 0;
    for (var i = 0; i < data.part_1.length; i++) {
      res += data.part_1[i].total;
    }
    setSum(res);
    console.log(res);
  }, []);
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
          {data.part_1.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td style={{ fontWeight: "bold" }}>{e.subject}</td>
              <td>{e.fa}</td>
              <td>{e.fa_oral}</td>
              <td>{e.sa}</td>
              <td>{e.sa_oral}</td>
              <td style={{ fontWeight: "bold" }}>{e.total}</td>
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
              {(sum / 1000) * 100}%
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
      <FirstPartModal show={show} setShow={setShow} />
    </div>
  );
}

export default FirstPart;
