import "../../Bonafide/AdminBonafideRequests.css"; // Import the CSS file
import React, { useState, useEffect } from "react";
import { Table, Paper, Switch, Button, Modal, Text } from "@mantine/core";

function HoDPage() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [opened, setOpened] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("YOUR_API_ENDPOINT");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
        setStatus(
          result.map(() => ({
            approveCheck: false,
            rejectCheck: false,
            submitted: false, // Initialize status for each entry
          })),
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleToggle = (index, stat) => {
    setStatus((prevStatus) =>
      prevStatus.map((item, i) => {
        if (i === index) {
          if (stat.type === "approve") {
            if (stat.value === true && item.rejectCheck === true) {
              return { ...item, approveCheck: true, rejectCheck: false };
            }
            return { ...item, approveCheck: stat.value };
          }
          if (stat.value === true && item.approveCheck === true) {
            return { ...item, approveCheck: false, rejectCheck: true };
          }
          return { ...item, rejectCheck: stat.value };
        }
        return item;
      }),
    );
  };

  const handleViewForm = (index) => {
    setSelectedStudent(data[index]);
    setOpened(true);
  };

  const handleSubmit = () => {
    const approvedLeaves = data.filter(
      (_, index) => status[index].approveCheck,
    );
    const rejectedLeaves = data.filter((_, index) => status[index].rejectCheck);

    console.log("Approved Leaves:", approvedLeaves);
    console.log("Rejected Leaves:", rejectedLeaves);

    // Here we can handle submission to the server
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Paper className="responsive-table-container">
        <div className="table-wrapper" style={{ marginTop: "50px" }}>
          <Table striped highlightOnHover className="status-table">
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>Roll No</th>
                <th style={{ textAlign: "center" }}>Student Name</th>
                <th style={{ textAlign: "center" }}>Approve/Reject</th>
                <th style={{ textAlign: "center" }}>View Form</th>
                <th style={{ textAlign: "center" }}>Current Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td style={{ textAlign: "center" }}>{item.rollNo}</td>
                  <td style={{ textAlign: "center" }}>{item.name}</td>
                  <td style={{ textAlign: "center" }}>
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
                  <td style={{ textAlign: "center" }}>
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
                      {item.form}
                    </button>
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      color: status[index].approveCheck
                        ? "green"
                        : status[index].rejectCheck
                          ? "red"
                          : "orange",
                    }}
                  >
                    {status[index].approveCheck
                      ? "Approved"
                      : status[index].rejectCheck
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

      {/* Modal for viewing form details */}
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
              <strong>Date From:</strong> {selectedStudent.details.dateFrom}
            </Text>
            <Text>
              <strong>Date To:</strong> {selectedStudent.details.dateTo}
            </Text>
            <Text>
              <strong>Leave Type:</strong> {selectedStudent.details.leaveType}
            </Text>
            <Text>
              <strong>Address:</strong> {selectedStudent.details.address}
            </Text>
            <Text>
              <strong>Purpose:</strong> {selectedStudent.details.purpose}
            </Text>
            <Text>
              <strong>HOD Credential:</strong>{" "}
              {selectedStudent.details.hodCredential}
            </Text>
            <Text>
              <strong>Mobile Number:</strong>{" "}
              {selectedStudent.details.mobileNumber}
            </Text>
            <Text>
              <strong>Parents' Mobile Number:</strong>{" "}
              {selectedStudent.details.parentsMobile}
            </Text>
            <Text>
              <strong>Mobile During Leave:</strong>{" "}
              {selectedStudent.details.mobileDuringLeave}
            </Text>
            <Text>
              <strong>Semester:</strong> {selectedStudent.details.semester}
            </Text>
            <Text>
              <strong>Academic Year:</strong>{" "}
              {selectedStudent.details.academicYear}
            </Text>
            <Text>
              <strong>Date of Application:</strong>{" "}
              {selectedStudent.details.dateOfApplication}
            </Text>
          </div>
        )}
      </Modal>
    </>
  );
}

export default HoDPage;
