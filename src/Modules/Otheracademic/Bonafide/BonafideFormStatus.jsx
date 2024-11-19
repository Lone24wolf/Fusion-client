import React from "react";
import { Table, Paper, Title, Button } from "@mantine/core";
import "./BonafideFormStatus.css"; // Import the CSS file

function BonafideFormStatus() {
  const data = [
    {
      rollNo: "67890",
      name: "Jane Smith",
      branch: "ECE",
      validTill: "2024-12-31",
      status: "Pending",
    },
    {
      rollNo: "67890",
      name: "Jane Smith",
      branch: "ECE",
      validTill: "2024-12-31",
      status: "Pending",
    },
    {
      rollNo: "67890",
      name: "Jane Smith",
      branch: "ECE",
      validTill: "2024-12-31",
      status: "Pending",
    },
    {
      rollNo: "12345",
      name: "John Doe",
      branch: "CSE",
      validTill: "2024-11-30",
      status: "Approved",
    },
    {
      rollNo: "11223",
      name: "Alice Brown",
      branch: "ME",
      validTill: "2025-01-15",
      status: "Pending",
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
      <Paper
        className="status-paper"
        style={{
          width: "120%", // Increase the width of the paper
          padding: "30px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          transform: "translateY(-20px)",
        }}
      >
        <Title order={2} align="center" style={{ marginBottom: "20px" }}>
          Bonafide Form Status
        </Title>
        <Table
          striped
          highlightOnHover
          withBorder
          withColumnBorders
          style={{
            width: "100%", // Keep table width full
            borderSpacing: "20px 0", // Increase spacing between columns
          }}
        >
          <thead>
            <tr>
              <th style={{ textAlign: "center", padding: "10px" }}>Roll No</th>
              <th style={{ textAlign: "center", padding: "10px" }}>Name</th>
              <th style={{ textAlign: "center", padding: "10px" }}>Branch</th>
              <th style={{ textAlign: "center", padding: "10px" }}>
                Valid Till
              </th>
              <th style={{ textAlign: "center", padding: "10px" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td style={{ textAlign: "center", padding: "10px" }}>
                  {item.rollNo}
                </td>
                <td style={{ textAlign: "center", padding: "10px" }}>
                  {item.name}
                </td>
                <td style={{ textAlign: "center", padding: "10px" }}>
                  {item.branch}
                </td>
                <td style={{ textAlign: "center", padding: "10px" }}>
                  {item.validTill}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    color: item.status === "Pending" ? "orange" : "green",
                  }}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <center>
          <Button
            variant="filled"
            color="blue"
            mt="md"
            style={{ marginTop: "20px" }}
          >
            Submit
          </Button>
        </center>
      </Paper>
    </div>
  );
}
export default BonafideFormStatus;
