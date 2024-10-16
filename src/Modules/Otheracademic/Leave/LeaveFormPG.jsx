import { useState } from "react";
import {
  Button,
  Text,
  TextInput,
  Select,
  FileInput,
  Textarea,
  Grid,
  Center,
} from "@mantine/core";

function LeaveFormPG() {
  const [formValues, setFormValues] = useState({
    dateFrom: "",
    dateTo: "",
    leaveType: "",
    documents: null,
    address: "",
    purpose: "",
    hodCredential: "",
    mobileNumber: "",
    parentsMobile: "",
    mobileDuringLeave: "",
    semester: "",
    academicYear: "",
    dateOfApplication: "",
  });

  const handleChange = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues); // Submit your form here
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid justify="space-around" gutter={{ base: 30 }}>
        <Grid.Col span={5}>
          {/* Date From */}
          <div style={{ marginBottom: "1rem" }}>
            <Text mt="md" size="sm" htmlFor="dateFrom">
              <span style={{ fontWeight: "600", marginLeft: "1px" }}>
                Date From:
              </span>
            </Text>
            <input
              type="date"
              id="dateFrom"
              value={formValues.dateFrom}
              onChange={(e) => handleChange("dateFrom", e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ced4da",
                fontSize: "16px",
                outline: "none",
                transition: "border-color 0.2s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#80bdff";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#ced4da";
              }}
            />
          </div>
        </Grid.Col>

        <Grid.Col span={5}>
          {/* Date To */}
          <div style={{ marginBottom: "1rem" }}>
            <Text mt="md" size="sm" htmlFor="dateTo">
              <span style={{ fontWeight: "600", marginLeft: "1px" }}>
                Date To:
              </span>
            </Text>
            <input
              type="date"
              id="dateTo"
              value={formValues.dateTo}
              onChange={(e) => handleChange("dateTo", e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ced4da",
                fontSize: "16px",
                outline: "none",
                transition: "border-color 0.2s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#80bdff";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#ced4da";
              }}
            />
          </div>
        </Grid.Col>

        <Grid.Col span={5}>
          <Select
            label="Leave Type"
            withAsterisk
            placeholder="Select Leave Type"
            data={["Casual", "Medical"]}
            value={formValues.leaveType}
            onChange={(value) => handleChange("leaveType", value)}
          />
        </Grid.Col>

        <Grid.Col span={5}>
          <FileInput
            label="Documents"
            withAsterisk
            placeholder="Choose file"
            value={formValues.documents}
            onChange={(file) => handleChange("documents", file)}
          />
        </Grid.Col>

        <Grid.Col span={5}>
          <Textarea
            label="Address"
            placeholder="Enter your address"
            autosize
            minRows={2}
            maxRows={4}
            value={formValues.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
        </Grid.Col>

        <Grid.Col span={5}>
          <Textarea
            label="Purpose"
            placeholder="Enter the purpose of leave"
            autosize
            minRows={2}
            maxRows={4}
            value={formValues.purpose}
            onChange={(e) => handleChange("purpose", e.target.value)}
          />
        </Grid.Col>

        <Grid.Col span={5}>
          <TextInput
            label="TA Supervisor (Credential)"
            placeholder="Enter TA Supervisor credential"
            value={formValues.hodCredential}
            onChange={(e) => handleChange("hodCredential", e.target.value)}
          />
        </Grid.Col>

        <Grid.Col span={5}>
          <TextInput
            label="Thesis Supervisor (Credential)"
            placeholder="Enter Thesis Supervisor credential"
            value={formValues.mobileNumber}
            onChange={(e) => handleChange("mobileNumber", e.target.value)}
          />
        </Grid.Col>

        <Grid.Col span={5}>
          <TextInput
            label="HOD (Credential)"
            placeholder="Enter HOD credential"
            value={formValues.parentsMobile}
            onChange={(e) => handleChange("parentsMobile", e.target.value)}
          />
        </Grid.Col>

        <Grid.Col span={5}>
          <TextInput
            label="Mobile Number"
            placeholder="Enter your mobile number"
            value={formValues.mobileDuringLeave}
            onChange={(e) => handleChange("mobileDuringLeave", e.target.value)}
          />
        </Grid.Col>

        <Grid.Col span={5}>
          <TextInput
            label="Parents Mobile Number"
            placeholder="Enter your parents mobile number"
            value={formValues.semester}
            onChange={(e) => handleChange("semester", e.target.value)}
          />
        </Grid.Col>

        <Grid.Col span={5}>
          <TextInput
            label="Mobile Number during leave"
            placeholder="Enter your mobile number during leave"
            value={formValues.academicYear}
            onChange={(e) => handleChange("academicYear", e.target.value)}
          />
        </Grid.Col>

        <Grid.Col span={5}>
          {/* Date of Application */}
          <div style={{ marginBottom: "1rem" }}>
            <Text mt="md" size="sm" htmlFor="dateOfApplication">
              <span style={{ fontWeight: "600", marginLeft: "1px" }}>
                Date of Application:
              </span>
            </Text>
            <input
              type="date"
              id="dateOfApplication"
              value={formValues.dateOfApplication}
              onChange={(e) =>
                handleChange("dateOfApplication", e.target.value)
              }
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ced4da",
                fontSize: "16px",
                outline: "none",
                transition: "border-color 0.2s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#80bdff";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#ced4da";
              }}
            />
          </div>
        </Grid.Col>
      </Grid>

      {/* Submit Button */}
      <Center>
        <Button type="submit" mt="md" style={{ marginBottom: "20px" }}>
          Submit
        </Button>
      </Center>
    </form>
  );
}

export default LeaveFormPG;
