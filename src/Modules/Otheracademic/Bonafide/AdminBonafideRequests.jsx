import React, { useState } from "react";
import { Table, Button } from "@mantine/core";
import "./AdminBonafideRequests.css"; // Import CSS

function AdminBonafideRequests() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Nishanth",
      rollNo: "22BCS046",
      purpose: "Visa Application",
      approved: false,
    },
    {
      id: 2,
      name: "Hardik",
      rollNo: "21BCS033",
      purpose: "Internship",
      approved: false,
    },
  ]);

  const handleApprove = (id) => {
    const updatedRequests = requests.map((request) =>
      request.id === id ? { ...request, approved: true } : request,
    );
    setRequests(updatedRequests);
  };

  return (
    <div className="admin-bonafide-container">
      <h2 className="admin-bonafide-title">Bonafide Requests</h2>
      <Table highlightOnHover>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Roll No.</th>
            <th>Purpose</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.name}</td>
              <td>{request.rollNo}</td>
              <td>{request.purpose}</td>
              <td>
                {request.approved ? (
                  <span className="approved-status">Approved</span>
                ) : (
                  "Pending"
                )}
              </td>
              <td>
                {!request.approved && (
                  <Button
                    onClick={() => handleApprove(request.id)}
                    color="green"
                  >
                    Approve
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AdminBonafideRequests;
