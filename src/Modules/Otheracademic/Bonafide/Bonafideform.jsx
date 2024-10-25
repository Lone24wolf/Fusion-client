import React, { useState } from "react";
import { TextInput, Button, Select, Grid, Title, Paper } from "@mantine/core";
import "./BonafideForm.css";
import axios from "axios";
import { Bonafide_Form_Submit } from "../../../routes/otheracademicRoutes";

function BonafideForm() {
  const roll = "22BCS009";
  const name = "Abhyuday Singh";
  const [formValues, setFormValues] = useState({
    student_name: name,
    roll_no: roll,
    purpose: "",
    branch: "",
    semester: "",
  });
  const handleChange = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      console.error("No auth token found");
      return;
    }
    const formData = new FormData();
    formData.append("student_name", name);
    formData.append("roll_no", roll);
    formData.append("purpose", formValues.purpose);
    formData.append("branch", "CSE");
    formData.append("semester", "6");

    try {
      const response = await axios.post(Bonafide_Form_Submit, formData, {
        headers: {
          Authorization: `Token ${authToken}`,
        },
      });

      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error(
        "Error submitting the form:",
        error.response?.data || error,
      );
    }
  };

  return (
    <Paper className="bonafide-paper">
      <Title order={2} align="center" className="form-title">
        Bonafide Certificate Request
      </Title>
      <form className="bonafide-form" onSubmit={handleSubmit}>
        <Grid>
          <Grid.Col span={6}>
            <TextInput
              label="Name"
              placeholder="Enter your name"
              required
              className="form-input"
              // onChange={(e) => handleChange("student_name", e.target.value)}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Roll No"
              placeholder="Enter your roll number"
              required
              className="form-input"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Select
              label="branch"
              placeholder="Select your branch"
              data={[
                { value: "CSE", label: "Computer Science and Engineering" },
                {
                  value: "ECE",
                  label: "Electronics and Communication Engineering",
                },
                { value: "ME", label: "Mechanical Engineering" },
                { value: "SM", label: "Smart Manufacturing" },
              ]}
              required
              className="form-input"
              // onChange={(e) => handleChange("branch", e.target.value)}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Select
              label="semester"
              placeholder="Select your semester"
              data={[
                { value: "1", label: "Semester 1" },
                { value: "2", label: "Semester 2" },
                { value: "3", label: "Semester 3" },
                { value: "4", label: "Semester 4" },
                { value: "5", label: "Semester 5" },
                { value: "6", label: "Semester 6" },
                { value: "7", label: "Semester 7" },
                { value: "8", label: "Semester 8" },
              ]}
              required
              className="form-input"
              // onChange={(e) => handleChange("semester", e.target.value)}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <TextInput
              label="purpose"
              placeholder="Enter the purpose of the bonafide certificate"
              required
              className="form-input"
              onChange={(e) => handleChange("purpose", e.target.value)}
            />
          </Grid.Col>
        </Grid>
        <Button type="submit" className="submit-btn">
          Submit
        </Button>
      </form>
    </Paper>
  );
}

export default BonafideForm;
