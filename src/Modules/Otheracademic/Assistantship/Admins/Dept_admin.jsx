
import "../../Bonafide/AdminBonafideRequests.css"; // Import the CSS file
import React, { useState } from "react";
import {
  Table,
  Paper,
  Switch,
  Button,
  Modal,
  Text,
  Select,
} from "@mantine/core";

function DeptAdminPage() {
  const data = [
    {
      rollNo: "22bcsxxx",
      name: "Sample 1",
      form: "22bcsxxx.pdf",
      details: {
        dateFrom: "2024-10-10",
        dateTo: "2024-10-12",
        leaveType: "Casual",
        address: "123 Street, City",
        purpose: "Personal Work",
        hodCredential: "HOD123",
        mobileNumber: "1234567890",
        parentsMobile: "0987654321",
        mobileDuringLeave: "1234567890",
        semester: "5",
        academicYear: "2024-2025",
        dateOfApplication: "2024-10-01",
      },
    },
    {
      rollNo: "22bcsxxx",
      name: "Sample 2",
      form: "22bcsxxx.pdf",
      details: {
        dateFrom: "2024-10-15",
        dateTo: "2024-10-20",
        leaveType: "Medical",
        address: "456 Avenue, City",
        purpose: "Medical treatment",
        hodCredential: "HOD456",
        mobileNumber: "2234567890",
        parentsMobile: "2987654321",
        mobileDuringLeave: "2234567890",
        semester: "5",
        academicYear: "2024-2025",
        dateOfApplication: "2024-10-05",
      },
    },
    {
      rollNo: "22bcsxxx",
      name: "Sample 3",
      form: "22bcsxxx.pdf",
      details: {
        dateFrom: "2024-10-25",
        dateTo: "2024-10-30",
        leaveType: "Medical",
        address: "46 Dmart, City",
        purpose: "Medical treatment",
        hodCredential: "HOD456",
        mobileNumber: "2233457890",
        parentsMobile: "2987698721",
        mobileDuringLeave: "2234097890",
        semester: "3",
        academicYear: "2024-2025",
        dateOfApplication: "2024-10-15",
      },
    },
  ];

  const [status, setStatus] = useState(
    data.map(() => ({
      approveCheck: false,
      rejectCheck: false,
      submitted: false, // Track if the form has been submitted for this entry
      authorityTransfer: "", // Track the selected authority
    })),
  );

  const [opened, setOpened] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

import React, { useState, useEffect } from "react";
import { Table, Paper, Switch, Button, Modal, Text } from "@mantine/core";
import axios from "axios";
import {
  DeptAdmin_Fetch_Pending_Assistantship_Requests,
  DeptAdmin_Update_Assistantship_Status,
} from "../../../../routes/otheracademicRoutes/index"; // Adjust API paths if needed

function ApproveAssistantship() {
  const [assistantshipRequests, setAssistantshipRequests] = useState([]);
  const [status, setStatus] = useState([]);
  const [opened, setOpened] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const authToken = localStorage.getItem("authToken");

  const fetchPendingAssistantships = async () => {
    try {
      console.log("Fetching pending assistantship requests...");
      const response = await axios.get(DeptAdmin_Fetch_Pending_Assistantship_Requests, {
        headers: {
          Authorization: `Token ${authToken}`,
        },
      });
      console.log("Response from server:", response.data);
  
      if (response.status === 200 && Array.isArray(response.data)) {
        setAssistantshipRequests(response.data);
  
        // Initialize status for each assistantship request
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
      console.error("Error fetching assistantship requests", err);
    }
  };
  

  useEffect(() => {
    fetchPendingAssistantships();
  }, []);

  const handleToggle = (index, stat) => {
    setStatus((prevStatus) =>
      prevStatus.map((item, i) => {
        if (i === index) {
          if (stat.type === "approve") {
            if (stat.value === true && item.rejectCheck === true) {
            if (stat.value && item.rejectCheck) {
              return { ...item, approveCheck: true, rejectCheck: false };
            }
            return { ...item, approveCheck: stat.value };
          }
          if (stat.value === true && item.approveCheck === true) {
          if (stat.value && item.approveCheck) {
            return { ...item, approveCheck: false, rejectCheck: true };
          }
          return { ...item, rejectCheck: stat.value };
        }
        return item;
      }),
    );
  };

  const handleAuthorityChange = (index, value) => {
    setStatus((prevStatus) =>
      prevStatus.map((item, i) =>
        i === index ? { ...item, authorityTransfer: value } : item,
      ),
      })
    );
  };

  const handleViewForm = (index) => {
    setSelectedStudent(data[index]);
    setOpened(true);
  };

  const handleSubmit = () => {
    const updatedStatus = status.map((entry) => {
      if (entry.approveCheck || entry.rejectCheck) {
        // Mark as submitted if approved or rejected
    setSelectedStudent(assistantshipRequests[index]);
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

    const approvedLeaves = data.filter(
      (_, index) => status[index].approveCheck,
    );
    const rejectedLeaves = data.filter((_, index) => status[index].rejectCheck);
    console.log("Approved Leaves:", approvedLeaves);
    console.log("Rejected Leaves:", rejectedLeaves);

    // Here we can handle the form submission (e.g., send data to the server)
    const approvedRequests = assistantshipRequests.filter(
      (_, index) => status[index]?.approveCheck
    );
    const rejectedRequests = assistantshipRequests.filter(
      (_, index) => status[index]?.rejectCheck
    );

    try {
      const response = await axios.post(
        DeptAdmin_Update_Assistantship_Status,
        {
          approvedRequests: approvedRequests.map((request) => request.id), // Send only the ids
          rejectedRequests: rejectedRequests.map((request) => request.id), // Send only the ids
        },
        {
          headers: {
            Authorization: `Token ${authToken}`,
          },
        }
      );
      console.log("Status updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating assistantship status:", error);
    }

    fetchPendingAssistantships();
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
                    borderRight: "1px solid white",
                    textAlign: "center",
                  }}
                >
                  Authority Transfer
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
              {data.map((item, index) => (
                <tr key={index}>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    {item.rollNo}
                  </td>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    {item.name}
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      textAlign: "center",
                      maxWidth: "130px",
                    }}
                  >
                    {!status[index].submitted ? (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Switch
                          label="Approve"
                          checked={status[index].approveCheck}
                <th style={{ borderRight: "1px solid white", textAlign: "center" }}>
                  Roll No
                </th>
                <th style={{ borderRight: "1px solid white", textAlign: "center" }}>
                  Approve/Reject
                </th>
                <th style={{ textAlign: "center" }}>View Form</th>
                <th style={{ textAlign: "center" }}>Current Status</th>
              </tr>
            </thead>
            <tbody>
              {assistantshipRequests.map((item, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid black", textAlign: "center" }}>
                    {item.roll_no}
                  </td>
                  <td style={{ border: "1px solid black", textAlign: "center" }}>
                    {!status[index]?.submitted ? (
                      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
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
                          checked={status[index].rejectCheck}
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
                        {status[index].approveCheck
                          ? "Approved"
                          : status[index].rejectCheck
                            ? "Rejected"
                            : ""}
                      </Text>
                    )}
                  </td>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                        {status[index]?.approveCheck
                          ? "Approved"
                          : status[index]?.rejectCheck
                          ? "Rejected"
                          : ""}
                      </Text>
                    )}
                  </td>
                  <td style={{ border: "1px solid black", textAlign: "center" }}>
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
                      {item.form}
                    </button>
                  </td>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    <Select
                      placeholder="Select Authority"
                      data={[
                        { value: "Acad Admin", label: "Acad Admin" },
                        { value: "Dean Acad", label: "Dean Acad" },
                        { value: "Director", label: "Director" },
                        { value: "Account Section", label: "Account Section" },
                      ]}
                      value={status[index].authorityTransfer}
                      onChange={(value) => handleAuthorityChange(index, value)}
                    />
                  </td>
                  <td
                    style={{
                      color: `${
                        status[index].approveCheck
                          ? "green"
                          : status[index].rejectCheck
                            ? "red"
                            : "orange"
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
                    {status[index].approveCheck
                      ? "Approved"
                      : status[index].rejectCheck
                        ? "Rejected"
                        : "Pending"}
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
            <Text style={{ fontSize: "25px" }}>Student Form Details</Text>
          </div>
        }
        centered
        overlaycolor="rgba(0, 0, 0, 0.6)"
        overlayblur={3}
        title={<Text style={{ fontSize: "25px" }}>Student Form Details</Text>}
        centered
        overlayColor="rgba(0, 0, 0, 0.6)"
        overlayBlur={3}
        size="lg"
      >
        {selectedStudent && (
          <div>
            <Text>
              <strong>Date From:</strong> {selectedStudent.details.dateFrom}
            </Text>
            {/* Add more details as needed */}
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
              <strong>Thesis Supervisor:</strong> {selectedStudent.thesis_supervisor}
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
