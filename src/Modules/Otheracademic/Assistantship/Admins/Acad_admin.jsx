import React, { useState } from "react";
import { Table } from "@mantine/core";

function AcadAdminPage() {
  const [requests] = useState([
    {
      id: 1,
      studentName: "Alice",
      rollNumber: "2021003",
      status: "Approved by HoD",
    },
    {
      id: 2,
      studentName: "Bob",
      rollNumber: "2021004",
      status: "Pending with HoD",
    },
  ]);

  return (
    <div>
      <h2>Academic Admin - Assistantship Requests</h2>
      <Table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Roll Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.studentName}</td>
              <td>{request.rollNumber}</td>
              <td>{request.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AcadAdminPage;
