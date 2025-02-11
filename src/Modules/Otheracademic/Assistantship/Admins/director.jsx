import React, { useState, useEffect } from "react";
import { Table, Paper, Switch, Button, Modal, Text } from "@mantine/core";

function ApproveAssistantship() {
  const dummyData = [
    {
      id: 1,
      roll_no: "22MCS021",
      student_name: "John Doe",
      discipline: "CSE",
      dateFrom: "2023-01-01",
      dateTo: "2023-06-01",
      ta_supervisor: "Dr. Smith",
      thesis_supervisor: "Dr. Brown",
      applicability: "Yes",
    },
    {
      id: 2,
      roll_no: "21MCS011",
      student_name: "Jane Smith",
      discipline: "ECE",
      dateFrom: "2023-01-01",
      dateTo: "2023-06-01",
      ta_supervisor: "Dr. Wilson",
      thesis_supervisor: "Dr. Taylor",
      applicability: "No",
    },
  ];

  const [assistantshipRequests, setAssistantshipRequests] = useState([]);
  const [status, setStatus] = useState([]);
  const [opened, setOpened] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    // Simulating API fetch with dummy data
    setAssistantshipRequests(dummyData);
    const initialStatus = dummyData.map(() => ({
      approveCheck: false,
      rejectCheck: false,
      submitted: false,
    }));
    setStatus(initialStatus);
  }, []);

  const handleToggle = (index, stat) => {
    setStatus((prevStatus) =>
      prevStatus.map((item, i) => {
        if (i === index) {
          if (stat.type === "approve") {
            if (stat.value && item.rejectCheck) {
              return { ...item, approveCheck: true, rejectCheck: false };
            }
            return { ...item, approveCheck: stat.value };
          }
          if (stat.value && item.approveCheck) {
            return { ...item, approveCheck: false, rejectCheck: true };
          }
          return { ...item, rejectCheck: stat.value };
        }
        return item;
      }),
    );
  };

  const handleViewForm = (index) => {
    setSelectedStudent(assistantshipRequests[index]);
    setOpened(true);
  };

  const handleSubmit = () => {
    const updatedStatus = status.map((entry) => {
      if (entry.approveCheck || entry.rejectCheck) {
        return { ...entry, submitted: true };
      }
      return entry;
    });
    setStatus(updatedStatus);

    console.log("Updated Status:", updatedStatus);
  };

  return (
    <>
      <Paper className="responsive-table-container">
        <div className="table-wrapper" style={{ marginTop: "50px" }}>
          <Table striped highlightOnHover className="status-table">
            <thead>
              <tr>
                <th
                  style={{
                    borderRight: "1px solid white",
                    textAlign: "center",
                  }}
                >
                  Roll No
                </th>
                <th
                  style={{
                    borderRight: "1px solid white",
                    textAlign: "center",
                  }}
                >
                  Approve/Reject
                </th>
                <th style={{ textAlign: "center" }}>View Form</th>
                <th style={{ textAlign: "center" }}>Current Status</th>
              </tr>
            </thead>
            <tbody>
              {assistantshipRequests.map((item, index) => (
                <tr key={index}>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    {item.roll_no}
                  </td>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    {!status[index]?.submitted ? (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Switch
                          label="Approve"
                          checked={status[index]?.approveCheck}
                          onChange={(event) =>
                            handleToggle(index, {
                              type: "approve",
                              value: event.currentTarget.checked,
                            })
                          }
                        />
                        <Switch
                          label="Reject"
                          checked={status[index]?.rejectCheck}
                          onChange={(event) =>
                            handleToggle(index, {
                              type: "reject",
                              value: event.currentTarget.checked,
                            })
                          }
                        />
                      </div>
                    ) : (
                      <Text>
                        {status[index]?.approveCheck
                          ? "Approved"
                          : status[index]?.rejectCheck
                            ? "Rejected"
                            : ""}
                      </Text>
                    )}
                  </td>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "blue",
                      }}
                      onClick={() => handleViewForm(index)}
                    >
                      View Form
                    </button>
                  </td>
                  <td
                    style={{
                      color: `${
                        status[index]?.approveCheck
                          ? "green"
                          : status[index]?.rejectCheck
                            ? "red"
                            : "orange"
                      }`,
                      border: "1px solid black",
                      textAlign: "center",
                    }}
                  >
                    {status[index]?.approveCheck
                      ? "Approved"
                      : status[index]?.rejectCheck
                        ? "Rejected"
                        : "Pending"}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <center>
          <Button onClick={handleSubmit} mt="md">
            Submit
          </Button>
        </center>
      </Paper>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={<Text style={{ fontSize: "25px" }}>Student Form Details</Text>}
        centered
        overlayColor="rgba(0, 0, 0, 0.6)"
        overlayBlur={3}
        size="lg"
      >
        {selectedStudent && (
          <div>
            <Text>
              <strong>Student Name:</strong> {selectedStudent.student_name}
            </Text>
            <Text>
              <strong>Discipline:</strong> {selectedStudent.discipline}
            </Text>
            <Text>
              <strong>Date From:</strong> {selectedStudent.dateFrom}
            </Text>
            <Text>
              <strong>Date To:</strong> {selectedStudent.dateTo}
            </Text>
            <Text>
              <strong>TA Supervisor:</strong> {selectedStudent.ta_supervisor}
            </Text>
            <Text>
              <strong>Thesis Supervisor:</strong>{" "}
              {selectedStudent.thesis_supervisor}
            </Text>
            <Text>
              <strong>Applicability:</strong> {selectedStudent.applicability}
            </Text>
          </div>
        )}
      </Modal>
    </>
  );
}

export default ApproveAssistantship;
