import React, { useState, useEffect } from "react";
import { Table, Paper, Switch, Button, Modal, Text } from "@mantine/core";
import axios from "axios";
import "../../Bonafide/AdminBonafideRequests.css";

// Define API endpoints
const THESIS_FETCH_PENDING_REQUESTS = "/api/thesis-supervisor/pending-requests";
const THESIS_UPDATE_REQUEST_STATUS = "/api/thesis-supervisor/update-status";

function ThesisSupervisor() {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [status, setStatus] = useState([]);
  const [opened, setOpened] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const authToken = localStorage.getItem("authToken");

  const fetchPendingRequests = async () => {
    try {
      console.log("Fetching pending thesis supervisor leave requests...");
      const response = await axios.get(THESIS_FETCH_PENDING_REQUESTS, {
        headers: {
          Authorization: `Token ${authToken}`,
        },
      });
      console.log("Response from server:", response.data);

      if (response.status === 200 && Array.isArray(response.data)) {
        setLeaveRequests(response.data);

        // Initialize status for each leave request
        const initialStatus = response.data.map(() => ({
          approveCheck: false,
          rejectCheck: false,
          submitted: false,
        }));
        setStatus(initialStatus);
      } else {
        console.error("Unexpected response structure:", response.data);
      }
    } catch (err) {
      console.error("Error fetching leave requests", err);
    }
  };

  useEffect(() => {
    fetchPendingRequests();
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
    setSelectedStudent(leaveRequests[index]);
    setOpened(true);
  };

  const handleSubmit = async () => {
    const updatedStatus = status.map((entry) => {
      if (entry.approveCheck || entry.rejectCheck) {
        return { ...entry, submitted: true };
      }
      return entry;
    });

    setStatus(updatedStatus);

    const approvedRequests = leaveRequests.filter(
      (_, index) => status[index].approveCheck,
    );
    const rejectedRequests = leaveRequests.filter(
      (_, index) => status[index].rejectCheck,
    );

    try {
      const response = await axios.post(
        THESIS_UPDATE_REQUEST_STATUS,
        {
          approvedRequests: approvedRequests.map((request) => request.id),
          rejectedRequests: rejectedRequests.map((request) => request.id),
        },
        {
          headers: {
            Authorization: `Token ${authToken}`,
          },
        },
      );
      console.log("Status updated successfully:", response.data);
      // Refresh the list after submission
      fetchPendingRequests();
    } catch (error) {
      console.error("Error updating leave request status:", error);
    }
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
                    borderLeft: "1px solid black",
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
                  Student Name
                </th>
                <th
                  style={{
                    borderRight: "1px solid white",
                    textAlign: "center",
                  }}
                >
                  Approve/Reject
                </th>
                <th
                  style={{
                    borderRight: "1px solid white",
                    textAlign: "center",
                  }}
                >
                  View Form
                </th>
                <th
                  style={{
                    borderRight: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  Current Status
                </th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map((item, index) => (
                <tr key={index}>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    {item.roll_no}
                  </td>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    {item.student_name}
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      textAlign: "center",
                      maxWidth: "130px",
                    }}
                  >
                    {!status[index]?.submitted ? (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Switch
                          style={{ display: "flex", justifyContent: "center" }}
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
                          style={{ display: "flex", justifyContent: "center" }}
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
                        padding: 0,
                      }}
                      onClick={() => handleViewForm(index)}
                    >
                      View Details
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
        title={
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Text style={{ fontSize: "25px" }}>Student Leave Details</Text>
          </div>
        }
        centered
        overlayColor="rgba(0, 0, 0, 0.6)"
        overlayBlur={3}
        size="lg"
      >
        {selectedStudent && (
          <div>
            <Text>
              <strong>Date From:</strong> {selectedStudent.dateFrom}
            </Text>
            <Text>
              <strong>Date To:</strong> {selectedStudent.dateTo}
            </Text>
            <Text>
              <strong>Leave Type:</strong> {selectedStudent.leaveType}
            </Text>
            <Text>
              <strong>Address:</strong> {selectedStudent.address}
            </Text>
            <Text>
              <strong>Purpose:</strong> {selectedStudent.purpose}
            </Text>
            <Text>
              <strong>Mobile Number:</strong> {selectedStudent.mobileNumber}
            </Text>
            <Text>
              <strong>Parents Mobile:</strong> {selectedStudent.parentsMobile}
            </Text>
            <Text>
              <strong>Mobile During Leave:</strong>{" "}
              {selectedStudent.mobileDuringLeave}
            </Text>
            <Text>
              <strong>Semester:</strong> {selectedStudent.semester}
            </Text>
            <Text>
              <strong>Academic Year:</strong> {selectedStudent.academicYear}
            </Text>
            <Text>
              <strong>Date of Application:</strong>{" "}
              {selectedStudent.dateOfApplication}
            </Text>
          </div>
        )}
      </Modal>
    </>
  );
}

export default ThesisSupervisor;
