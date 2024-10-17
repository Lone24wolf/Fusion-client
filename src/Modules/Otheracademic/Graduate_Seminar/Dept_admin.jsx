import React, { useState } from "react";
import {
  Table,
  Title,
  Container,
  Paper,
  Button,
  TextInput,
  Modal,
  Group,
} from "@mantine/core";

function GraduateStatusAdmin() {
  const [opened, setOpened] = useState(false);
  const [formData, setFormData] = useState({
    rollNo: "",
    semester: "",
    seminarDate: "",
    mentor: "",
    venue: "",
    title: "",
  });

  const [rows, setRows] = useState([
    {
      rollNo: "20MCS010",
      semester: "3rd",
      seminarDate: "2024-10-14",
      mentor: "Dr. Shivdayal Patel",
      venue: "Room L101",
      title: "Blockchain and Security",
    },
    {
      rollNo: "22MCS020",
      semester: "4th",
      seminarDate: "2024-12-20",
      mentor: "Dr. Durgesh Singh",
      venue: "Room L202",
      title: "AI in Healthcare",
    },
  ]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addSeminar = () => {
    setRows([...rows, formData]);
    setFormData({
      rollNo: "",
      semester: "",
      seminarDate: "",
      mentor: "",
      venue: "",
      title: "",
    });
    setOpened(false);
  };

  return (
    <Container size="lg" style={{ marginTop: "50px" }}>
      <Paper padding="md" shadow="xs">
        <Title order={2} align="center">
          Graduate Status - Dept. Admin
        </Title>

        <Group position="right" style={{ marginBottom: "20px" }}>
          <Button onClick={() => setOpened(true)}>Add New Seminar</Button>
        </Group>

        <Table striped highlightOnHover>
          <thead>
            <tr>
              <th style={{ width: "15%" }}>Roll No.</th>
              <th style={{ width: "10%" }}>Semester</th>
              <th style={{ width: "15%" }}>Seminar Date</th>
              <th style={{ width: "20%" }}>Mentor</th>
              <th style={{ width: "10%" }}>Venue</th>
              <th style={{ width: "20%" }}>Title</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>{row.rollNo}</td>
                <td>{row.semester}</td>
                <td>{row.seminarDate}</td>
                <td>{row.mentor}</td>
                <td>{row.venue}</td>
                <td>{row.title}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Add New Seminar"
        >
          <TextInput
            label="Roll No."
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            required
          />
          <TextInput
            label="Semester"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            required
          />
          <TextInput
            label="Seminar Date"
            name="seminarDate"
            value={formData.seminarDate}
            onChange={handleChange}
            required
          />
          <TextInput
            label="Mentor"
            name="mentor"
            value={formData.mentor}
            onChange={handleChange}
            required
          />
          <TextInput
            label="Venue"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            required
          />
          <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <Group position="right" style={{ marginTop: "20px" }}>
            <Button onClick={addSeminar}>Add Seminar</Button>
          </Group>
        </Modal>
      </Paper>
    </Container>
  );
}

export default GraduateStatusAdmin;
