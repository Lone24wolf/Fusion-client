import { useState } from "react";
import {
  Button,
  Code,
  Text,
  TextInput,
  Select,
  FileInput,
  Textarea,
  Grid,
  Center,
} from "@mantine/core";
import { useForm } from "@mantine/form";

function LeaveForm() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
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
    },

    validate: {
      dateFrom: (value) => (!value ? "Please select a start date" : null),
      dateTo: (value) => (!value ? "Please select an end date" : null),
    },
  });

  const [submittedValues, setSubmittedValues] = useState(null);

  const handleSubmit = (values) => {
    setSubmittedValues(values);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Grid justify="center" gutter={{ base: 30 }}>
        <Grid.Col span={5}>
          {/* Date From */}
          <div style={{ marginBottom: "1rem" }}>
            <Text mt="md" size="sm" htmlFor="dateFrom">
              <span style={{ fontWeight: "600", marginLeft: "1px" }}>
                {" "}
                Date From:{" "}
              </span>
            </Text>
            <input
              type="date"
              id="dateFrom"
              value={form.values.dateFrom}
              onChange={(event) =>
                form.setFieldValue("dateFrom", event.currentTarget.value)
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

        <Grid.Col span={5}>
          {/* Date To */}
          <div style={{ marginBottom: "1rem" }}>
            <Text mt="md" size="sm" htmlFor="dateTo">
              <span style={{ fontWeight: "600", marginLeft: "1px" }}>
                {" "}
                Date To:{" "}
              </span>
            </Text>
            <input
              type="date"
              id="dateTo"
              value={form.values.dateTo}
              onChange={(event) =>
                form.setFieldValue("dateTo", event.currentTarget.value)
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

        <Grid.Col span={5}>
          <Select
            label="Leave Type"
            withAsterisk
            placeholder="Select Leave Type"
            data={["Casual", "Medical"]}
            value={form.values.leaveType}
            onChange={(value) => form.setFieldValue("leaveType", value)}
          />
        </Grid.Col>

        <Grid.Col span={5}>
          <FileInput
            label="Documents"
            withAsterisk
            placeholder="Choose file"
            value={form.values.documents}
            onChange={(file) => form.setFieldValue("documents", file)}
          />
        </Grid.Col>

        <Grid.Col span={5}>
          <Textarea
            label="Address"
            placeholder="Enter your address"
            autosize
            minRows={2}
            maxRows={4}
            value={form.values.address}
            onChange={(event) =>
              form.setFieldValue("address", event.currentTarget.value)
            }
          />
        </Grid.Col>

        <Grid.Col span={5}>
          <Textarea
            label="Purpose"
            placeholder="Enter the purpose of leave"
            autosize
            minRows={2}
            maxRows={4}
            value={form.values.purpose}
            onChange={(event) =>
              form.setFieldValue("purpose", event.currentTarget.value)
            }
          />
        </Grid.Col>

        <Grid.Col span={5}>
          <TextInput
            label="HOD (Credential)"
            placeholder="Enter HOD credential"
            value={form.values.hodCredential}
            onChange={(event) =>
              form.setFieldValue("hodCredential", event.currentTarget.value)
            }
          />
        </Grid.Col>

        <Grid.Col span={5}>
          <TextInput
            label="Mobile Number"
            placeholder="Enter your mobile number"
            value={form.values.mobileNumber}
            onChange={(event) =>
              form.setFieldValue("mobileNumber", event.currentTarget.value)
            }
          />
        </Grid.Col>

        <Grid.Col span={5}>
          <TextInput
            label="Parents Mobile Number"
            placeholder="Enter your parents mobile number"
            value={form.values.parentsMobile}
            onChange={(event) =>
              form.setFieldValue("parentsMobile", event.currentTarget.value)
            }
          />
        </Grid.Col>

        <Grid.Col span={5}>
          <TextInput
            label="Mobile Number during leave"
            placeholder="Enter your mobile number during leave"
            value={form.values.mobileDuringLeave}
            onChange={(event) =>
              form.setFieldValue("mobileDuringLeave", event.currentTarget.value)
            }
          />
        </Grid.Col>

        <Grid.Col span={5}>
          <TextInput
            label="Semester"
            placeholder="Enter your current semester"
            value={form.values.semester}
            onChange={(event) =>
              form.setFieldValue("semester", event.currentTarget.value)
            }
          />
        </Grid.Col>

        <Grid.Col span={5}>
          <TextInput
            label="Academic Year"
            placeholder="Enter your current academic year"
            value={form.values.academicYear}
            onChange={(event) =>
              form.setFieldValue("academicYear", event.currentTarget.value)
            }
          />
        </Grid.Col>

        <Grid.Col span={5}>
          {/* Date of Application */}
          <div style={{ marginBottom: "1rem" }}>
            <Text mt="md" size="sm" htmlFor="dateOfApplication">
              <span style={{ fontWeight: "600", marginLeft: "1px" }}>
                {" "}
                Date of Application:{" "}
              </span>
            </Text>
            <input
              type="date"
              id="dateOfApplication"
              value={form.values.dateOfApplication}
              onChange={(event) =>
                form.setFieldValue(
                  "dateOfApplication",
                  event.currentTarget.value,
                )
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
        <Button type="submit" mt="md">
          Submit
        </Button>
      </Center>

      {/* Display Submitted Values (For debugging, remove later) */}
      <Text mt="md">Submitted values:</Text>
      <Code block>
        {submittedValues ? JSON.stringify(submittedValues, null, 2) : "–"}
      </Code>
    </form>
  );
}

export default LeaveForm;
