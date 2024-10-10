import React from "react";
import { Table, Paper, Title } from "@mantine/core";
import "./BonafideFormStatus.css"; // Import the CSS file

function BonafideFormStatus() {
  const data = [
    {
      rollNo: "12345",
      name: "John Doe",
      branch: "CSE",
      semester: "5",
      purpose: "Job Application",
      dateApplied: "2024-10-01",
      bonafidePdf: "link_to_pdf.pdf",
      status: "Approved",
    },
    // Add more entries as needed
  ];

  return (
    <Paper className="status-paper">
      <Title order={2} align="center" className="status-title">
        Bonafide Form Status
      </Title>
      <Table striped highlightOnHover className="status-table">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Semester</th>
            <th>Purpose</th>
            <th>Date Applied</th>
            <th>Bonafide PDF</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.rollNo}</td>
              <td>{item.name}</td>
              <td>{item.branch}</td>
              <td>{item.semester}</td>
              <td>{item.purpose}</td>
              <td>{item.dateApplied}</td>
              <td>
                <a
                  href={item.bonafidePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View PDF
                </a>
              </td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Paper>
  );
}

export default BonafideFormStatus;
