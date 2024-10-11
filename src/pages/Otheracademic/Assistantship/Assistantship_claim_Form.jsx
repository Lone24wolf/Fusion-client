import React from "react";
import { Button, TextInput, Select, Grid, Center } from "@mantine/core";
import { useForm } from "@mantine/form";

function AssistantshipForm() {
  const form = useForm({
    initialValues: {
      name: "",
      program: "",
      year: "",
      internshipStatus: "",
      taSupervisor: "",
      thesisSupervisor: "",
    },
    validate: {
      name: (value) => (!value ? "Name is required" : null),
      program: (value) => (!value ? "Program is required" : null),
      year: (value) => (!value ? "Year is required" : null),
    },
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Grid justify="center" gutter={{ base: 30 }}>
        <Grid.Col span={5}>
          <TextInput
            label="Name"
            withAsterisk
            placeholder="Enter your full name"
            value={form.values.name}
            onChange={(event) =>
              form.setFieldValue("name", event.currentTarget.value)
            }
            error={form.errors.name}
          />
        </Grid.Col>

        <Grid.Col span={5}>
          <Select
            label="Program"
            withAsterisk
            placeholder="Select your program"
            data={["MTech", "MDes", "PhD"]}
            value={form.values.program}
            onChange={(value) => form.setFieldValue("program", value)}
            error={form.errors.program}
          />
        </Grid.Col>

        {form.values.program === "MTech" && (
          <>
            <Grid.Col span={5}>
              <Select
                label="Year"
                placeholder="Select your year"
                data={["1st Year", "2nd Year"]}
                value={form.values.year}
                onChange={(value) => form.setFieldValue("year", value)}
                error={form.errors.year}
              />
            </Grid.Col>

            {form.values.year === "2nd Year" && (
              <Grid.Col span={5}>
                <Select
                  label="Internship Status"
                  placeholder="Are you an intern?"
                  data={["Intern", "Non-Intern"]}
                  value={form.values.internshipStatus}
                  onChange={(value) =>
                    form.setFieldValue("internshipStatus", value)
                  }
                  error={form.errors.internshipStatus}
                />
              </Grid.Col>
            )}
          </>
        )}

        <Grid.Col span={5}>
          <TextInput
            label="Name of TA Supervisor"
            withAsterisk
            placeholder="Enter TA Supervisor's name"
            value={form.values.taSupervisor}
            onChange={(event) =>
              form.setFieldValue("taSupervisor", event.currentTarget.value)
            }
            error={form.errors.taSupervisor}
          />
        </Grid.Col>

        {(form.values.program === "PhD" ||
          (form.values.program === "MTech" &&
            form.values.year === "2nd Year" &&
            form.values.internshipStatus === "Non-Intern")) && (
          <Grid.Col span={5}>
            <TextInput
              label="Name of Thesis Supervisor"
              withAsterisk
              placeholder="Enter Thesis Supervisor's name"
              value={form.values.thesisSupervisor}
              onChange={(event) =>
                form.setFieldValue(
                  "thesisSupervisor",
                  event.currentTarget.value,
                )
              }
              error={form.errors.thesisSupervisor}
            />
          </Grid.Col>
        )}
      </Grid>

      <Center>
        <Button type="submit" mt="md">
          Submit
        </Button>
      </Center>
    </form>
  );
}

export default AssistantshipForm;
