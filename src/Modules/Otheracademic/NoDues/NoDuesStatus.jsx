import React from "react";
import { Table, Text, Badge, Grid, Paper, ScrollArea } from "@mantine/core";

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
      <td
        style={{
          padding: "10px 20px",
          textAlign: "left",
          paddingLeft: "200px",
        }}
      >
        <Text>{item.department}</Text>
      </td>
      <td
        style={{
          padding: "10px 20px",
          textAlign: "center",
          paddingRight: "120px",
        }}
      >
        <Badge color={item.status === "Clear" ? "green" : "red"}>
          {item.status}
        </Badge>
      </td>
    </tr>
  ));

  return (
    <Paper
      shadow="md"
      padding="lg"
      radius="md"
      style={{ backgroundColor: "#f9f9f9" }}
    >
      <Grid>
        <Grid.Col span={12}>
          <Text size="25px" weight={1000} align="center" mb="md">
            No-Dues Status
          </Text>
        </Grid.Col>

        <Grid.Col span={12}>
          <ScrollArea>
            <Table highlightOnHover withBorder withColumnBorders>
              <thead>
                <tr>
                  <th style={{ padding: "10px 20px", textAlign: "left" }}>
                    <div style={{ marginLeft: "180px" }}>Department</div>
                  </th>
                  <th style={{ padding: "10px 20px", textAlign: "center" }}>
                    <div style={{ marginRight: "100px" }}>Status</div>
                  </th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </ScrollArea>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

export default NoDuesStatus;
