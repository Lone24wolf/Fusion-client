// Import necessary libraries and components
import React, { useState } from "react";
import { TextInput, Button, Grid, Container } from "@mantine/core";

const NoDuesForm = () => {
  // Set up form state
  const [formData, setFormData] = useState({
    rollNumber: "",
    studentName: "",
    supervisor: "",
    hostel: "",
    bank: "",
    cseOffice: "",
    designOffice: "",
    acad: "",
    eceOffice: "",
    library: "",
    meOffice: "",
    mess: "",
    physicsOffice: "",
    disciplineOffice: "",
  });

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log("Form data submitted:", formData);
  };

  return (
    <Container
      size="sm"
      style={{
        backgroundColor: "#f7f7f7",
        borderRadius: "8px",
        padding: "20px",
      }}
    >
      <Grid>
        {/* Left Column */}
        <Grid.Col span={6}>
          <TextInput
            label="Roll no. (In Capital Letter)"
            placeholder="Enter your roll number"
            value={formData.rollNumber}
            onChange={handleChange}
            name="rollNumber"
            radius="md"
            mb="md"
          />
          <TextInput
            label="Student Name"
            placeholder="Enter your name"
            value={formData.studentName}
            onChange={handleChange}
            name="studentName"
            radius="md"
            mb="md"
          />
          <TextInput
            label="PBI/BTP/Thesis Supervisor (Credential)"
            placeholder="Credential"
            value={formData.supervisor}
            onChange={handleChange}
            name="supervisor"
            radius="md"
            mb="md"
          />
          <TextInput
            label="Hostel (Credential)"
            placeholder="Credential"
            value={formData.hostel}
            onChange={handleChange}
            name="hostel"
            radius="md"
            mb="md"
          />
          <TextInput
            label="Bank (Credential)"
            placeholder="Credential"
            value={formData.bank}
            onChange={handleChange}
            name="bank"
            radius="md"
            mb="md"
          />
          <TextInput
            label="CSE Office (Credential)"
            placeholder="Credential"
            value={formData.cseOffice}
            onChange={handleChange}
            name="cseOffice"
            radius="md"
            mb="md"
          />
          <TextInput
            label="Design Office (Credential)"
            placeholder="Credential"
            value={formData.designOffice}
            onChange={handleChange}
            name="designOffice"
            radius="md"
            mb="md"
          />
          <TextInput
            label="Acad (Credential)"
            placeholder="Credential"
            value={formData.acad}
            onChange={handleChange}
            name="acad"
            radius="md"
            mb="md"
          />
        </Grid.Col>

        {/* Right Column */}
        <Grid.Col span={6}>
          <TextInput
            label="ECE Office (Credential)"
            placeholder="Credential"
            value={formData.eceOffice}
            onChange={handleChange}
            name="eceOffice"
            radius="md"
            mb="md"
          />
          <TextInput
            label="Library (Credential)"
            placeholder="Credential"
            value={formData.library}
            onChange={handleChange}
            name="library"
            radius="md"
            mb="md"
          />
          <TextInput
            label="ME Office (Credential)"
            placeholder="Credential"
            value={formData.meOffice}
            onChange={handleChange}
            name="meOffice"
            radius="md"
            mb="md"
          />
          <TextInput
            label="Mess (Credential)"
            placeholder="Credential"
            value={formData.mess}
            onChange={handleChange}
            name="mess"
            radius="md"
            mb="md"
          />
          <TextInput
            label="Physics Office - NS (Credential)"
            placeholder="Credential"
            value={formData.physicsOffice}
            onChange={handleChange}
            name="physicsOffice"
            radius="md"
            mb="md"
          />
          <TextInput
            label="Discipline Office (Credential)"
            placeholder="Credential"
            value={formData.disciplineOffice}
            onChange={handleChange}
            name="disciplineOffice"
            radius="md"
            mb="md"
          />
        </Grid.Col>
      </Grid>

      {/* Apply Button */}
      <Button
        fullWidth
        radius="md"
        color="blue"
        style={{ marginTop: "20px" }}
        onClick={handleSubmit}
      >
        Apply
      </Button>
    </Container>
  );
};

export default NoDuesForm;
