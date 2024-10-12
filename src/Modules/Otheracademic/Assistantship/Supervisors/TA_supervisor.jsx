import { useState } from "react";
import { Button, TextInput, Select } from "@mantine/core";
import "./TA_supervisor.css"; // Importing the CSS file

function AssistantshipForm() {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    discipline: "",
    bankAccount: "",
    taSupervisor: "",
    thesisSupervisor: "",
    program: "", // To store MTech/PhD/other details
    internshipStatus: "", // For MTech second-year intern status
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data logic here
    console.log(formData);
  };

  return (
    <div className="bonafide-paper">
      <h2 className="form-title">Assistantship Form</h2>
      <form onSubmit={handleSubmit} className="bonafide-form">
        {/* Program Selection */}
        <div className="form-row">
          <Select
            label="Program"
            name="program"
            value={formData.program}
            onChange={(value) => handleSelectChange(value, "program")}
            data={[
              { value: "MTech1", label: "MTech 1st Year" },
              { value: "MTech2Intern", label: "MTech 2nd Year Intern" },
              { value: "MTech2NonIntern", label: "MTech 2nd Year Non-Intern" },
              { value: "PhD", label: "PhD" },
              { value: "MDes", label: "MDes" },
            ]}
            placeholder="Select your program"
            required
            className="form-input"
          />
        </div>

        <div className="form-row">
          <TextInput
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
            className="form-input"
          />
          <TextInput
            label="Roll Number"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleInputChange}
            placeholder="Enter your roll number"
            required
            className="form-input"
          />
        </div>

        <div className="form-row">
          <TextInput
            label="Discipline"
            name="discipline"
            value={formData.discipline}
            onChange={handleInputChange}
            placeholder="Enter your discipline"
            required
            className="form-input"
          />
          <TextInput
            label="Student Bank Account Number"
            name="bankAccount"
            value={formData.bankAccount}
            onChange={handleInputChange}
            placeholder="Enter your bank account number"
            required
            className="form-input"
          />
        </div>

        {/* Conditional Fields for Supervisors */}
        {formData.program === "PhD" && (
          <div className="form-row">
            <TextInput
              label="TA Supervisor"
              name="taSupervisor"
              value={formData.taSupervisor}
              onChange={handleInputChange}
              placeholder="Enter TA Supervisor name"
              required
              className="form-input"
            />
            <TextInput
              label="Thesis Supervisor"
              name="thesisSupervisor"
              value={formData.thesisSupervisor}
              onChange={handleInputChange}
              placeholder="Enter Thesis Supervisor name"
              required
              className="form-input"
            />
          </div>
        )}

        {formData.program === "MTech2NonIntern" && (
          <div className="form-row">
            <TextInput
              label="TA Supervisor"
              name="taSupervisor"
              value={formData.taSupervisor}
              onChange={handleInputChange}
              placeholder="Enter TA Supervisor name"
              required
              className="form-input"
            />
            <TextInput
              label="Thesis Supervisor"
              name="thesisSupervisor"
              value={formData.thesisSupervisor}
              onChange={handleInputChange}
              placeholder="Enter Thesis Supervisor name"
              required
              className="form-input"
            />
          </div>
        )}

        {formData.program === "MTech1" && (
          <div className="form-row">
            <TextInput
              label="TA Supervisor"
              name="taSupervisor"
              value={formData.taSupervisor}
              onChange={handleInputChange}
              placeholder="Enter TA Supervisor name"
              required
              className="form-input"
            />
          </div>
        )}

        {formData.program === "MTech2Intern" && (
          <div className="form-row">
            <TextInput
              label="TA Supervisor"
              name="taSupervisor"
              value={formData.taSupervisor}
              onChange={handleInputChange}
              placeholder="Enter TA Supervisor name"
              required
              className="form-input"
            />
          </div>
        )}

        <Button type="submit" className="submit-btn">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default AssistantshipForm;
