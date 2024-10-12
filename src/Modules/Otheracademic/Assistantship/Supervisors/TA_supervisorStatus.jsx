import "./TA_supervisorStatus.css"; // Import the CSS file
import React from "react";
import { Table, Paper, Title } from "@mantine/core";

function AssistantshipFormStatus() {
  const data = [
    {
      rollNo: "67890",
      name: "Jane Smith",
      branch: "ECE",
      validTill: "2024-12-31",
      status: "Pending",
    },
    // Add more entries as needed
  ];

  return (
    <Paper className="status-paper">
      <Title order={2} align="center" className="status-title">
        Assistantship Form Status
      </Title>
      <Table striped highlightOnHover className="status-table">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Valid Till</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.rollNo}</td>
              <td>{item.name}</td>
              <td>{item.branch}</td>
              <td>{item.validTill}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Paper>
  );
}

export default AssistantshipFormStatus;
