import React from "react";
import "./GraduateStatus.css";

function GraduateStatus() {
  return (
    <div className="graduate-status-container">
      <h2>Graduate Status</h2>
      <table className="graduate-status-table">
        <thead>
          <tr>
            <th>Roll No.</th>
            <th>Semester</th>
            <th>Seminar Date</th>
            <th>Mentor</th>
            <th>Venue</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20MCS010</td>
            <td>3rd</td>
            <td>2024-10-15</td>
            <td>Dr. Shivdayal Patel</td>
            <td>Room L101</td>
            <td>Blockchain and Security</td>
          </tr>
          <tr>
            <td>22MCS021</td>
            <td>4th</td>
            <td>2024-11-20</td>
            <td>Dr. Durgesh Singh</td>
            <td>Room L202</td>
            <td>AI in Healthcare</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default GraduateStatus;
