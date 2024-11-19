import "./leaveStatus.css"; // Import the CSS file
import React from "react";
import { Table, Paper, Title, Button } from "@mantine/core";

function LeaveStatus() {
  const data = [
    {
      rollNo: "67890",
      name: "Jane Smith",
      branch: "ECE",
      dateFrom: "2024-12-15",
      dateTo: "2024-12-31",
      leaveType: "Medical",
      attachment: "Medical_attachment.pdf",
      purpose:
        "Purpose of leave here Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      address:
        "Address here Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      action: "Pending",
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
          width: "100%",
          padding: "30px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Title order={2} align="center" style={{ marginBottom: "20px" }}>
          Leave Status
        </Title>
        <Table striped highlightOnHover withBorder withColumnBorders>
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>Roll No</th>
              <th style={{ textAlign: "center" }}>Name</th>
              <th style={{ textAlign: "center" }}>Branch</th>
              <th style={{ textAlign: "center" }}>Date From</th>
              <th style={{ textAlign: "center" }}>Date To</th>
              <th style={{ textAlign: "center" }}>Leave Type</th>
              <th style={{ textAlign: "center" }}>Attachment</th>
              <th style={{ textAlign: "center" }}>Purpose</th>
              <th style={{ textAlign: "center" }}>Address</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td style={{ textAlign: "center" }}>{item.rollNo}</td>
                <td style={{ textAlign: "center" }}>{item.name}</td>
                <td style={{ textAlign: "center" }}>{item.branch}</td>
                <td style={{ textAlign: "center" }}>{item.dateFrom}</td>
                <td style={{ textAlign: "center" }}>{item.dateTo}</td>
                <td style={{ textAlign: "center" }}>{item.leaveType}</td>
                <td style={{ textAlign: "center" }}>{item.attachment}</td>
                <td style={{ textAlign: "center" }}>{item.purpose}</td>
                <td style={{ textAlign: "center" }}>{item.address}</td>
                <td
                  style={{
                    textAlign: "center",
                    color:
                      item.action === "Pending"
                        ? "orange"
                        : item.action === "Approved"
                          ? "green"
                          : "red",
                  }}
                >
                  {item.action}
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

export default LeaveStatus;
