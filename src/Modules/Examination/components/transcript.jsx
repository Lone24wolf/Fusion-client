/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { Table, Button, ScrollArea } from "@mantine/core";
import "../styles/transcript.css";
// import {generate_transcript_from} "../routes/examinationRoutes"
function Transcript({ data, semester }) {
  const navigate = useNavigate();
  const students = data?.students || []; // Extract students array safely
  // const Fstudents = students.filter(
  //   (x) => x.curr_semester_no === semester,
  // );
  const handlePreview = (student) => {
    console.log(student);
    navigate(`/examination/generate-transcript/${student.id_id}`, {
      state: { student, semester },
    });
  };

  const handleDownload = (student) => {
    console.log(`Download transcript for ${student.id_id}`);
  };

  return (
    <div className="transcript-container">
      <ScrollArea className="table-container">
        {students.length > 0 ? (
          <Table highlightOnHover className="transcript-table">
            <thead>
              <tr>
                <th>Roll Number</th>
                <th>Programme</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id_id} className="table-row">
                  <td className="table-cell tc">
                    <div className="table-cell-content">{student.id_id}</div>
                  </td>
                  <td className="table-cell">{student.programme}</td>
                  <td className="table-cell">
                    <Button
                      onClick={() => handlePreview(student)}
                      variant="subtle"
                      className="actions-button"
                      aria-label={`Preview transcript for ${student.id_id}`}
                    >
                      Preview
                    </Button>
                    <Button
                      onClick={() => handleDownload(student)}
                      variant="subtle"
                      className="actions-button"
                      aria-label={`Download transcript for ${student.id_id}`}
                    >
                      Download
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <div className="no-data">No transcript records available.</div>
        )}
      </ScrollArea>
    </div>
  );
}

export default Transcript;
