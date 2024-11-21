import React, { useState } from "react";
import { Table } from "@mantine/core";

function AcadAdminPage() {
  const [requests] = useState([
    {
      id: 1,
      studentName: "Alice",
      rollNumber: "2021007",
      status: "Approved by HoD",
    },
    {
      id: 2,
      studentName: "Bob",
      rollNumber: "2021008",
      status: "Approved by Academic Admin",
    },
    {
      id: 2,
      studentName: "Bob",
      rollNumber: "2021008",
      status: "Approved by Academic Admin",
    },
    {
      id: 2,
      studentName: "Bob",
      rollNumber: "2021008",
      status: "Approved by Academic Admin",
    },
    {
      id: 2,
      studentName: "Bob",
      rollNumber: "2021008",
      status: "Approved by Academic Admin",
    },
  ]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <h2>Department Admin - Assistantship Requests</h2>
      <div style={{ width: "180%", maxWidth: "1200px" }}>
        <Table striped highlightOnHover withBorder style={{ fontSize: "14px" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>Student Name</th>
              <th style={{ textAlign: "center" }}>Roll Number</th>
              <th style={{ textAlign: "center" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td style={{ textAlign: "center" }}>{request.studentName}</td>
                <td style={{ textAlign: "center" }}>{request.rollNumber}</td>
                <td style={{ textAlign: "center" }}>{request.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default AcadAdminPage;
