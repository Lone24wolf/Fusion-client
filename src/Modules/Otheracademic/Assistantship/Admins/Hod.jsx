import React, { useState } from "react";
import { Button, Table } from "@mantine/core";

function HoDPage() {
  const [requests, setRequests] = useState([
    { id: 1, studentName: "Alice", rollNumber: "2021001" },
    { id: 2, studentName: "Bob", rollNumber: "2021002" },
  ]);

  const handleApprove = (id) => {
    setRequests((prev) => prev.filter((request) => request.id !== id));
  };

  const handleReject = (id) => {
    setRequests((prev) => prev.filter((request) => request.id !== id));
  };

  return (
    <div>
      <h2>HoD - Thesis Requests</h2>
      <Table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Roll Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.studentName}</td>
              <td>{request.rollNumber}</td>
              <td>
                <Button onClick={() => handleApprove(request.id)}>
                  Approve
                </Button>
                <Button onClick={() => handleReject(request.id)}>Reject</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default HoDPage;
