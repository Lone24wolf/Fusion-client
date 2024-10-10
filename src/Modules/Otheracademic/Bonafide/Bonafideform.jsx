import React from "react";
import { TextInput, Button, Select, Grid, Title, Paper } from "@mantine/core";
import "./BonafideForm.css";

function BonafideForm() {
  return (
    <Paper className="bonafide-paper">
      <Title order={2} align="center" className="form-title">
        Bonafide Certificate Request
      </Title>
      <form className="bonafide-form">
        <Grid>
          <Grid.Col span={6}>
            <TextInput
              label="Name"
              placeholder="Enter your name"
              required
              className="form-input"
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
              label="Branch"
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
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Select
              label="Semester"
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
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <TextInput
              label="Purpose"
              placeholder="Enter the purpose of the bonafide certificate"
              required
              className="form-input"
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
