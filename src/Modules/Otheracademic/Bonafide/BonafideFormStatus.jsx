import React from "react";
import { Table, Title, Button } from "@mantine/core";
import "./BonafideFormStatus.css"; // Import the CSS file

function BonafideFormStatus() {
  const data = [
    {
      rollNo: "12345",
      name: "John Doe",
      branch: "CSE",
      status: "Pending",
    },
    {
      rollNo: "67890",
      name: "Jane Smith",
      branch: "ECE",
      status: "Approved",
    },
    {
      rollNo: "11223",
      name: "Robert Brown",
      branch: "EEE",
      status: "Rejected",
    },
    {
      rollNo: "33445",
      name: "Alice Green",
      branch: "MECH",
      status: "Pending",
    },
    {
      rollNo: "55667",
      name: "Maria White",
      branch: "CIVIL",
      status: "Approved",
    },
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
        Bonafide Form Status
      </Title>
      <Table
        striped
        highlightOnHover
        style={{
          width: "170%", // Increase the width of the table
          backgroundColor: "transparent", // Remove the white card background
        }}
      >
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Roll No</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Branch</th>
            <th style={{ textAlign: "center" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ textAlign: "center" }}>{item.rollNo}</td>
              <td style={{ textAlign: "center" }}>{item.name}</td>
              <td style={{ textAlign: "center" }}>{item.branch}</td>
              <td
                style={{
                  textAlign: "center",
                  color:
                    item.status === "Approved"
                      ? "green"
                      : item.status === "Rejected"
                        ? "red"
                        : "orange",
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
export default BonafideFormStatus;
