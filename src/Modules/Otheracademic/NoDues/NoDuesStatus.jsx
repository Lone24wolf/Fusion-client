import React from "react";
import { Table, Title, Button } from "@mantine/core";

function NoDuesStatus() {
  // Dummy status data for each department
  const noDuesStatus = [
    { department: "Hostel", status: "Clear" },
    { department: "Mess", status: "Not Clear" },
    { department: "Library", status: "Clear" },
    { department: "Computer Lab", status: "Clear" },
    { department: "Design Studio", status: "Not Clear" },
    { department: "Placement Cell", status: "Clear" },
    { department: "Discipline Office", status: "Clear" },
    { department: "I-Card DSA", status: "Not Clear" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <Title order={2} align="center" style={{ marginBottom: "20px" }}>
        No-Dues Status
      </Title>
      <Table
        striped
        highlightOnHover
        style={{
          width: "75%", // Increase the width of the table
          backgroundColor: "transparent", // Remove the white card background
        }}
      >
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Department</th>
            <th style={{ textAlign: "center" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {noDuesStatus.map((item, index) => (
            <tr key={index}>
              <td style={{ textAlign: "center" }}>{item.department}</td>
              <td
                style={{
                  textAlign: "center",
                  color: item.status === "Clear" ? "green" : "orange",
                }}
              >
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <center>
        <Button mt="md" style={{ marginTop: "20px" }}>
          Submit
        </Button>
      </center>
    </div>
  );
}

export default NoDuesStatus;
