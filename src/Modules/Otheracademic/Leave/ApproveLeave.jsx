import "./leaveStatus.css"; // Import the CSS file
import React, { useState } from "react";
import { Table, Paper, Switch, Button } from "@mantine/core";

function ApproveLeave() {
  const data = [
    {
      rollNo: "22bcsxxx",
      name: "Sample 1",
      form: "22bcsxxx.pdf",
    },
    {
      rollNo: "22bcsxxx",
      name: "Sample 2",
      form: "22bcsxxx.pdf",
    },
    {
      rollNo: "22bcsxxx",
      name: "Sample 3",
      form: "22bcsxxx.pdf",
    },
  ];

  const [status, setStatus] = useState(
    data.map(() => ({
      approveCheck: false,
      rejectCheck: false,
      saved: false,
    })),
  );

  const handleToggle = (index, stat) => {
    setStatus((prevStatus) =>
      prevStatus.map((item, i) => {
        if (i === index) {
          if (stat.type === "approve") {
            if (stat.value === true && item.rejectCheck === true) {
              return {
                approveCheck: true,
                rejectCheck: false,
                saved: item.saved,
              };
            }
            return {
              approveCheck: stat.value,
              rejectCheck: item.rejectCheck,
              saved: item.saved,
            };
          }
          if (stat.value === true && item.approveCheck === true) {
            return {
              approveCheck: false,
              rejectCheck: true,
              saved: item.saved,
            };
          }
          return {
            approveCheck: item.approveCheck,
            rejectCheck: stat.value,
            saved: item.saved,
          };
        }
        return item;
      }),
    );
  };

  const handleSave = () => {
    setStatus((prevStatus) =>
      prevStatus.map((item) => ({
        ...item,
        saved: !!(item.approveCheck || item.rejectCheck),
      })),
    );
  };

  return (
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
                style={{ borderRight: " 1px solid white", textAlign: "center" }}
              >
                Student Name
              </th>
              <th
                style={{ borderRight: " 1px solid white", textAlign: "center" }}
              >
                Approve/Reject
              </th>
              <th
                style={{ borderRight: " 1px solid white", textAlign: "center" }}
              >
                View Form
              </th>
              <th
                style={{ borderRight: "1px solid black", textAlign: "center" }}
              >
                Current Status
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid black", textAlign: "center" }}>
                  {item.rollNo}
                </td>
                <td style={{ border: "1px solid black", textAlign: "center" }}>
                  {item.name}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    textAlign: "center",
                    maxWidth: "130px",
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    {!status[index].saved ? (
                      <>
                        <Switch
                          style={{ display: "flex", justifyContent: "center" }}
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
                          style={{ display: "flex", justifyContent: "center" }}
                          label="Reject"
                          checked={status[index].rejectCheck}
                          onChange={(event) =>
                            handleToggle(index, {
                              type: "reject",
                              value: event.currentTarget.checked,
                            })
                          }
                        />
                      </>
                    ) : (
                      <span
                        style={{
                          color: `${
                            status[index].approveCheck ? "green" : "red"
                          }`,
                        }}
                      >
                        {status[index].approveCheck ? "Approved" : "Rejected"}
                      </span>
                    )}
                  </div>
                </td>
                <td style={{ border: "1px solid black", textAlign: "center" }}>
                  {item.form}
                </td>
                <td
                  style={{
                    color: `${
                      status[index].approveCheck
                        ? "green"
                        : status[index].rejectCheck
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
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </div>
    </Paper>
  );
}

export default ApproveLeave;
