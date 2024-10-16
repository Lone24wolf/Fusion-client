import React from "react";
import { Table, Text, Grid, Paper, ScrollArea } from "@mantine/core";

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

  // Render the no-dues status table
  const rows = noDuesStatus.map((item) => (
    <tr key={item.department}>
      {/* Department column inside shadowed boxes */}
      <td
        style={{
          padding: "10px 20px",
          textAlign: "left",
          paddingLeft: "200px",
        }}
      >
        <Paper
          shadow="sm"
          radius="md"
          p="sm"
          style={{
            // boxShadow: "0px 0px 5px 0px",
            width: "300px",
            height: "35px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "8px",
          }}
        >
          <Text>{item.department}</Text>
        </Paper>
      </td>

      <td
        style={{
          padding: "10px 20px",
          textAlign: "center",
          paddingRight: "30px",
        }}
      >
        <Paper
          shadow="sm"
          radius="md"
          p="sm"
          style={{
            width: "250px",
            height: "35px",
            backgroundColor: item.status === "Clear" ? "#d4edda" : "#f8d7da",
            color: item.status === "Clear" ? "#155724" : "#721c24",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "8px",
          }}
        >
          <Text>{item.status}</Text>
        </Paper>
      </td>
    </tr>
  ));

  return (
    // <Paper
    //   shadow="md"
    //   padding="sm"
    //   radius="md"
    //   style={{ backgroundColor: "#f9f9f9" }}
    // >
    <Grid
      style={{
        marginTop: "20px",
      }}
    >
      {/* <Grid.Col span={12}>
          <Text size="25px" weight={1000} align="center" mb="md">
            No-Dues Status
          </Text>
        </Grid.Col> */}

      <Grid.Col span={12}>
        <ScrollArea>
          <Table highlightOnHover withBorder withColumnBorders>
            <thead>
              <tr>
                <th style={{ padding: "10px 20px", textAlign: "left" }}>
                  <div style={{ marginLeft: "280px" }}>Department</div>
                </th>
                <th style={{ padding: "10px 20px", textAlign: "center" }}>
                  <div style={{ marginRight: "230px" }}>Status</div>
                </th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </ScrollArea>
      </Grid.Col>
    </Grid>
    //  </Paper>
  );
}

export default NoDuesStatus;
