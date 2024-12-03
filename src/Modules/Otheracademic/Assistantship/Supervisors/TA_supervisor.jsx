import React, { useState } from "react";
import axios from "axios";
import { Assistantship_Form_Submit } from "../../../../routes/otheracademicRoutes";
import "./TA_supervisor.css"; // Import the CSS file for styling

export default function AssistantshipForm() {
  const [formData, setFormData] = useState({
    student_name: "John Doe",
    roll_no: "1234567",
    discipline: "",
    date_from: "",
    date_to: "",
    bank_account_no: "",
    signature: null,
    applicability: "",
    ta_supervisor: "",
    thesis_supervisor: "",
    date_applied: new Date().toISOString().split("T")[0],
    hod: "",
  });

  // Handle text and select field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      signature: e.target.files[0],
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = [
      "discipline",
      "date_from",
      "date_to",
      "bank_account_no",
      "signature",
      "applicability",
      "ta_supervisor",
      "thesis_supervisor",
      "hod",
    ];

    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      alert(
        `Please fill out the following fields: ${missingFields.join(", ")}`,
      );
      return;
    }

    // Prepare the form data for submission
    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });

    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      alert("Authentication failed. Please log in again.");
      return;
    }

    try {
      const response = await axios.post(Assistantship_Form_Submit, form, {
        headers: {
          Authorization: `Token ${authToken}`,
        },
      });
      alert(response.data.message || "Form submitted successfully!");
    } catch (error) {
      console.error("Form submission error:", error);
      alert(
        error.response?.data?.message ||
          "Error submitting the form. Please try again.",
      );
    }
  };

  return (
    <div className="assistantship-paper">
      <h2 className="form-title">Assistantship Form</h2>
      <form onSubmit={handleSubmit} className="assistantship-form">
        <div className="assistantship-grid">
          {/* Left Column */}
          <div className="input-container">
            <label htmlFor="discipline" className="input-label">
              Discipline
            </label>
            <input
              type="text"
              id="discipline"
              name="discipline"
              placeholder="Enter your discipline"
              className="assistantship-input"
              value={formData.discipline}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="date_from" className="input-label">
              From Date
            </label>
            <input
              type="date"
              id="date_from"
              name="date_from"
              className="assistantship-input"
              value={formData.date_from}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="date_to" className="input-label">
              To Date
            </label>
            <input
              type="date"
              id="date_to"
              name="date_to"
              className="assistantship-input"
              value={formData.date_to}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="bank_account_no" className="input-label">
              Bank Account Number
            </label>
            <input
              type="text"
              id="bank_account_no"
              name="bank_account_no"
              placeholder="Enter your bank account number"
              className="assistantship-input"
              value={formData.bank_account_no}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="signature" className="input-label">
              Upload Signature
            </label>
            <input
              type="file"
              id="signature"
              name="signature"
              className="assistantship-input"
              accept=".png,.jpg,.jpeg"
              onChange={handleFileChange}
              required
            />
          </div>

          {/* Right Column */}
          <div className="input-container">
            <label htmlFor="applicability" className="input-label">
              Applicability
            </label>
            <input
              type="text"
              id="applicability"
              name="applicability"
              placeholder="Enter applicability"
              className="assistantship-input"
              value={formData.applicability}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="ta_supervisor" className="input-label">
              TA Supervisor
            </label>
            <input
              type="text"
              id="ta_supervisor"
              name="ta_supervisor"
              placeholder="Enter TA supervisor's name"
              className="assistantship-input"
              value={formData.ta_supervisor}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="thesis_supervisor" className="input-label">
              Thesis Supervisor
            </label>
            <input
              type="text"
              id="thesis_supervisor"
              name="thesis_supervisor"
              placeholder="Enter thesis supervisor's name"
              className="assistantship-input"
              value={formData.thesis_supervisor}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="hod" className="input-label">
              HOD
            </label>
            <input
              type="text"
              id="hod"
              name="hod"
              placeholder="Enter HOD's name"
              className="assistantship-input"
              value={formData.hod}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
